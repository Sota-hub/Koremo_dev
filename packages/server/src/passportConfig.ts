// パスポートの設定をここでする
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy} from "passport-google-oauth20"
import entities from "@koremo/entities";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const clientID = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const callbackURL =  process.env.CALLBACK_URL as string;
const { User } = entities;

passport.serializeUser((user: any, done) => {
  // TODO: fix any type ( can't use User type from entities)
  // req.session.passport.user = {id: user.id}みたいに登録する(app.use(session())が走ったときここ呼ばれる)
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  // ここで使うidはreq.session.passport.user.id
  // serializeUserで取得したidでユーザー検索(セッションあったらここ走るかもpassport.session(）はこれを走らせる)
  const user = await User.findOne({ where: { id } });
  done(null, user); //これがreq.userになる done(第一引数はerr, 第二引数はuser)だから
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ where: { email } });
      if (!user || !bcrypt.compareSync(password, user.passwordHash))
        return done(null, false);
      return done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL
  }, (accessToken, refreshToken, profile, done) => {

  })
)

export default passport;

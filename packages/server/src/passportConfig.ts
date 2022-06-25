// パスポートの設定をここでする
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User as CurrentUser } from "@koremo/graphql-resolvers";
import { User } from "@koremo/entities";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const clientID = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const callbackURL = process.env.CALLBACK_URL as string;

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
      done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    async (_, __, profile, done) => {
      const user = await User.findOne({ where: { googleId: profile.id } });
      // login
      if (user) {
        const currentUser: CurrentUser = {
          id: user.id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          name: user.name,
          email: user.email,
          profileImageUrl: user.profileImageUrl,
          lastAccessedAt: user.lastAccessedAt,
        };
        done(null, currentUser);
      }
      if (!profile.emails) {
        // emailが一個もないのはおかしい
        throw new Error("Something went wrong");
      }
      // signup
      if (!user) {
        const newUser = new User();
        newUser.name = profile.displayName;
        newUser.email = profile.emails[0].value;
        newUser.profileImageUrl = "";
        newUser.lastAccessedAt = new Date();
        newUser.googleId = profile.id;

        const savedUser = await newUser.save();

        const currentUser: CurrentUser = {
          id: savedUser.id,
          createdAt: savedUser.createdAt,
          updatedAt: savedUser.updatedAt,
          name: savedUser.name,
          email: savedUser.email,
          profileImageUrl: savedUser.profileImageUrl,
          lastAccessedAt: savedUser.lastAccessedAt,
        };
        return done(null, currentUser);
      }
    }
  )
);

export default passport;

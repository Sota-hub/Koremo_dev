import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { User } from "@koremo/entities";
// import { User as CurrentUser } from "@koremo/graphql-resolvers";

dotenv.config();

const clientID = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const callbackURL = process.env.CALLBACK_URL as string;

passport.serializeUser((user: any /* ←FIX */, done) => {
  // console.log("+++++ serializeUser called +++++");
  console.log(user);
  
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  // console.log("+++++ deserializeUser called +++++");
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (e) {
    return done(e);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.passwordHash.toString())) {
          return done(null, false);
        }
        return done(null, user);
      } catch (e) {
        return done(e, false);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    // clientIDはクライアントを識別するために使用される
    // callbackURLはアクセス承認をもらった後のリダイレクト先
    // passReqToCallbackは第二引数でreqを使えるようにしている
    // 3. 1で指定したscopeと共にclientIDとcallbackURLを含み認可サーバーのURLにリダイレクトされる
    // 4. リソースオーナーがアクセスを許可し認可コードを発行する
    // 5. 認可コードをqueryとしてcallbackURLに遷移する（例：localhost:80/google/callback?code=<認可コード>）
    // 6. oauth/loginファイルの"/google/callback"のルーター処理に移動
    {
      clientID,
      clientSecret,
      callbackURL,
      passReqToCallback: true,
    },
    // 8. queryに付属する認可コードを認可サーバーに渡してアクセストークンを発行する
    // 9. アクセストークンを提示してリソースサーバーにアクセス
    // 10. scopeで指定した情報を取得する
    // 11. oauthでできることはこれで終わり！
    async (req, _, __, profile, done) => {
      try {
        const user = await User.findOne({ where: { googleId: profile.id } });

        if (req.query.state === "login") {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }

        if (req.query.state === "signup") {
          if (user) {
            return done(null, false);
          } else {
            const newUser = new User();
            newUser.name = "No name";
            newUser.email = profile._json.email!;
            newUser.lastAccessedAt = new Date();
            newUser.googleId = profile.id;
            await newUser.save();
            return done(null, newUser);
          }
        }

        return done(null, false);
      } catch (e) {
        const error = e as Error;
        return done(error);
      }
    }
  )
);

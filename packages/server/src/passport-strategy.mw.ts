import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "@koremo/entities";

passport.serializeUser((user: any, done) => {
  // user: interface X extends Express.User didn't work
  done(null, user.id);
});

passport.deserializeUser(async (userId: string, done) => {
  console.log("Deserialize executed");

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      done(null, false);
    } else {
      done(null, user); //これがreq.userになる done(第一引数はerr, 第二引数はuser)だから
    }
  } catch (e) {
    const error = e as Error;
    done(error);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // ←This must be req.body.email
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return done(null, false, { message: "Email address is invalid" });
        }
        if (!bcrypt.compareSync(password, user.passwordHash.toString())) {
          return done(null, false, { message: "Password is invalid" });
        }
        done(null, user);
      } catch (e) {
        done(e, false, { message: "Something went wrong" });
      }
    }
  )
);

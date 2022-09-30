import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "@koremo/entities";

passport.serializeUser((user: any /* ←FIX */, done) => {
  console.log("+++++ serializeUser called +++++");
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  console.log("+++++ deserializeUser called +++++");
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      done(null, false);
    } else {
      done(null, user);
    }
  } catch (e) {
    done(e);
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
        done(null, user);
      } catch (e) {
        done(e, false);
      }
    }
  )
);

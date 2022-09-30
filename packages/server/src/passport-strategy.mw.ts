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

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    (_, __, profile, cb) => {
      console.log(profile);
      cb(null, profile);
    }
  )
);

// async (_, __, profile, done) => {
//   const user = await User.findOne({ where: { googleId: profile.id } });

//   // login
//   if (user) {
//     const currentUser: CurrentUser = {
//       id: user.id,
//       createdAt: user.createdAt,
//       updatedAt: user.updatedAt,
//       name: user.name,
//       email: user.email,
//       profileImageUrl: user.profileImageUrl,
//       lastAccessedAt: user.lastAccessedAt,
//     };
//     done(null, currentUser);
//   }

//   if (!profile.emails) {
//     // emailが一個もないのはおかしい
//     throw new Error("Something went wrong");
//   }

//   // signup
//   if (!user) {
//     const newUser = new User();
//     newUser.name = profile.displayName;
//     newUser.email = profile.emails[0].value;
//     newUser.profileImageUrl = "";
//     newUser.lastAccessedAt = new Date();
//     newUser.googleId = profile.id;

//     const savedUser = await newUser.save();

//     const currentUser: CurrentUser = {
//       id: savedUser.id,
//       createdAt: savedUser.createdAt,
//       updatedAt: savedUser.updatedAt,
//       name: savedUser.name,
//       email: savedUser.email,
//       profileImageUrl: savedUser.profileImageUrl,
//       lastAccessedAt: savedUser.lastAccessedAt,
//     };
//     return done(null, currentUser);
//   }
// }

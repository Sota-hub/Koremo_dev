import dataSource from "./DataSource";
import passport from "./passportConfig";
import { User as CurrentUser } from "@koremo/graphql-resolvers";
import entities from "@koremo/entities";
import bcrypt from "bcrypt";

const { User } = entities;

// TODO: req: any + res: any ← How to define returned req from passport LocalStrategy↓
// express.Request<ParamsDictionary, any, any, QueryString.ParsedQs, Record<string, any>>
// authが成功したらコールバック関数が走る(req.userがログインしたユーザー)
const apolloContext = (req: any, res: any) => {
  const signupLocal = async () => {
    const { email, password } = req.body;
    if (!email || !password) throw new Error(`Email and password are required`);

    const user = await User.findOne({ where: { email } });
    if (user) throw new Error("Entered Email has already been registered")

    const salt = await bcrypt.genSalt(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User();
    newUser.name = "";
    newUser.email = email;
    newUser.passwordHash = passwordHash;
    newUser.profileImageUrl = "";
    newUser.lastAccessedAt = new Date();

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
    return currentUser;
  };

  const loginLocal = () => {
    return (
      passport.authenticate("local", {
        failureRedirect: "/login",
        failureMessage: true,
      }),
      (req: any) => {
        const currentUser: CurrentUser = {
          id: req.user.id,
          createdAt: req.user.createdAt,
          updatedAt: req.user.updatedAt,
          name: req.user.name,
          email: req.user.email,
          profileImageUrl: req.user.profileImageUrl,
          lastAccessedAt: req.user.lastAccessedAt,
        };
        return currentUser;
      }
    );
  };

  const loginGoogle = () => {
    passport.authenticate('google', {
      failureRedirect: "/login",
      failureMessage: true,
    }),
    (req: any, res: any) => {
      res.redirect('/');
    }
  }

  const logoutLocal = () => {
    req.logout((err: Error) => {
      if (err) throw new Error(`Something went wrong: ${err}`);
      res.redirect("/login");
    });
  };

  return {
    dataSource,
    signupLocal,
    loginLocal,
    logoutLocal,
  };
};

export default apolloContext;

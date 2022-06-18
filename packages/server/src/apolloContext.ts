import dataSource from "./DataSource";
import passport from "./passportConfig";
import { User } from "@koremo/graphql-resolvers";

// TODO: req: any + res: any ← How to define returned req from passport LocalStrategy↓
// express.Request<ParamsDictionary, any, any, QueryString.ParsedQs, Record<string, any>>
const apolloContext = (req: any, res: any) => {
  const loginLocal = () => {
    return (
      passport.authenticate("local", {
        failureRedirect: "/login",
        failureMessage: true,
      }),
      (req: any) => { // authが成功したらここ走る
        const currentUser: User = {
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

  const logoutLocal = () => {
    req.logout((e: Error) => {
      if(e) return res.status(500).send(e); 
      res.redirect("/login");
    });
  }

  return {
    dataSource,
    loginLocal, // return logged in User
    logoutLocal,
  };
};

export default apolloContext;

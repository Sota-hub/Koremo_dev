import { MutationResolvers, /*User as CurrentUser*/ } from "@koremo/graphql-resolvers";
import passport from "passport";
// import { Context } from "../../types/Context";


const localLogin: MutationResolvers["localLogin"] = (_, /*args, context: Context*/) => {
  console.log(
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureMessage: true,
    }), (req: any, res: any) => {
      console.log(req);
      console.log(res);
      
    }
    )
  // (req: any) => {
  //   const currentUser: CurrentUser = {
  //     id: req.user.id,
  //     createdAt: req.user.createdAt,
  //     updatedAt: req.user.updatedAt,
  //     name: req.user.name,
  //     email: req.user.email,
  //     profileImageUrl: req.user.profileImageUrl,
  //     lastAccessedAt: req.user.lastAccessedAt,
  //   };
  //   return currentUser;
  // }

  const user = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "aaa",
    email: "test@test.com",
    profileImageUrl: null,
    lastAccessedAt: new Date(),
  };
  return user;
};

export default localLogin;
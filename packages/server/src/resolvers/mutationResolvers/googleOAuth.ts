import { MutationResolvers } from "@koremo/graphql-resolvers";
import passport from "passport";

const googleOAuth: MutationResolvers["googleOAuth"] = async (
  _,
  __,
  context
) => {
  console.log("Run googleOAuth Mutation");

  passport.authenticate("google", { scope: ["profile", "email"] });

  console.log(context.req);

  //   const googleOAuthCallback = () => {
  //     passport.authenticate("google", { failureRedirect: "/login" }),
  //       (_: any, res: any): void => res.redirect("/[userId]");
  //   };

  return true;
};

export default googleOAuth;

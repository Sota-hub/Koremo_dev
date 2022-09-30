import { Router } from "express";
import passport from "passport";

const oauthLoginRouter = Router();

oauthLoginRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

oauthLoginRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  () => {
    console.log("Login Success");
  }
);

export default oauthLoginRouter;

import { Router } from "express";
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();

const frontendUrl = process.env.FRONTEND_URL;
const googleRouter = Router();

googleRouter.get(
  "/google/login",
  // 1. scopeに使用したい情報を指定する
  // 2. passport-strategyファイルのGoogleStrategyの第一引数に移動
  passport.authenticate("google", {
    scope: ["email", "profile"],
    state: "login",
  })
);

googleRouter.get(
  "/google/signup",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    state: "signup",
  })
);

googleRouter.get(
  "/google/callback",
  // 7. 処理失敗時のリダイレクト先を指定する
  // 8. passport-strategyファイルのGoogleStrategyの第二引数に移動
  passport.authenticate("google", { failureRedirect: `${frontendUrl}/failed` }),
  (_, res) => {
    res.redirect(`${frontendUrl}`);
  }
);

export default googleRouter;

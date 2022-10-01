import { Router } from "express";
import passport from "passport";

const googleRouter = Router();

googleRouter.get(
  "/google",
  // 1. scopeに使用したい情報を指定する
  // 2. passport-strategyファイルのGoogleStrategyの第一引数に移動
  passport.authenticate("google", { scope: ["email", "profile"] })
);

googleRouter.get(
  "/google/callback",
  // 7. 処理失敗時のリダイレクト先を指定する
  // 8. passport-strategyファイルのGoogleStrategyの第二引数に移動
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req) => {
    console.log(req.user);
  }
);

export default googleRouter;

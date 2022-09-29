import { Router } from "express";
import passport from "passport";
import RequestUser from "../types/RequestUser";

const loginRouter = Router();

loginRouter.post(
  "/login",
  passport.authenticate("local"),
  (req: RequestUser, res) => {
    try {
      console.log(req.user);
      res.redirect("http://localhost:3000");
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
);

export default loginRouter;

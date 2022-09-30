import { Router } from "express";
import passport from "passport";
import RequestUser from "../../types/RequestUser";

const localLoginRouter = Router();

localLoginRouter.post(
  "/login",
  passport.authenticate("local"),
  (req: RequestUser, res) => {
    try {
      console.log(req.user);
      res.redirect("http://localhost:3000");
    } catch (e) {
      const error = e as Error;
      res.status(400).send({ error: { message: error.message } });
    }
  }
);

export default localLoginRouter;

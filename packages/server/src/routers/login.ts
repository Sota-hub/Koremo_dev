import { Router } from "express";
import passport from "passport";
import dotenv from "dotenv";
// import RequestUser from "../types/RequestUser";

dotenv.config();
const frontendUrl = process.env.FRONTEND_URL as string;
const loginRouter = Router();

// loginRouter.post(
//   "/login",
//   passport.authenticate("local"),
//   (req, res) => {
//     try {
//       console.log(req.cookies);
//       console.log(req.user);
//       res.redirect(`${frontendUrl}/home`);
//     } catch (e) {
//       const error = e as Error;
//       res.status(400).send({ error: { message: error.message } });
//     }
//   }
// );

loginRouter.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(_, res) {
    res.redirect(`${frontendUrl}/home`);
  });

export default loginRouter;

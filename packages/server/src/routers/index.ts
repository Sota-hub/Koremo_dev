import { Router } from "express";
import localLoginRouter from "./local/login";
import localSignupRouter from "./local/signup";
import oauthLoginRouter from "./oauth/login";

const routers = Router();

routers.use("/local", localLoginRouter);
routers.use("/local", localSignupRouter);
routers.use("/oauth", oauthLoginRouter);

export default routers;

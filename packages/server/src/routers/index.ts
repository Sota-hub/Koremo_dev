import { Router } from "express";
import loginRouter from "./login";
import signupRouter from "./signup";
import googleRouter from "./google";

const routers = Router();

routers.use(loginRouter);
routers.use(signupRouter);
routers.use(googleRouter);

export default routers;

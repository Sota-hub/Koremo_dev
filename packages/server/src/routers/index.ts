import { Router } from "express";
import loginRouter from "./local/login";
import signupRouter from "./local/signup";

const routers = Router();

routers.use(loginRouter);
routers.use(signupRouter);

export default routers;

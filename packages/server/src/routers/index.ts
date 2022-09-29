import { Router } from "express";
import loginRouter from "./login";
import signupRouter from "./signup";

const routers = Router();

routers.use(loginRouter);
routers.use(signupRouter);

export default routers;

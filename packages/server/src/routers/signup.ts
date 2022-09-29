import bcrypt from "bcrypt";
import { Router } from "express";
import { User } from "@koremo/entities";
import { emailExpression, passwordExpression } from "@koremo/constants";

const signupRouter = Router();

signupRouter.post("/signup", async (req, res) => {
  const { email, password, confPass } = req.body;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  if (!emailExpression.test(email)) {
    throw new Error("Email address is invalid");
  }
  if (!passwordExpression.test(password)) {
    throw new Error("Password is invalid");
  }
  if (!(password === confPass)) {
    throw new Error("Password and confPass Don't match");
  }

  try {
    const registeredUser = await User.findOne({ where: { email } });

    if (registeredUser) {
      throw new Error("Entered Email has already been registered");
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const user = new User();
    user.name = "No name";
    user.email = email;
    user.lastAccessedAt = new Date();
    user.passwordHash = passwordHash;

    await user.save();
    res.redirect("http://localhost:3000");
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

export default signupRouter;

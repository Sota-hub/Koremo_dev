import { MutationResolvers } from "@koremo/graphql-resolvers";
import { User } from "@koremo/entities";
import { emailExpression, passwordExpression } from "@koremo/constants";
import bcrypt from "bcrypt";

const localSignup: MutationResolvers["localSignup"] = async (
  _,
  args,
  context
) => {
  const { email, password, confPass, isChecked } = args.input;

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

  if (isChecked) {
    context.login(user);
  }

  return true;
};

export default localSignup;

import {
  MutationResolvers,
  User as CurrentUser,
} from "@koremo/graphql-resolvers";
import { User } from "@koremo/entities";
import { emailExpression, passwordExpression } from "@koremo/constants";
import bcrypt from "bcrypt";

const localSignup: MutationResolvers["localSignup"] = async (_, args) => {
  const { email, password, confPass } = args.input;

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

  const user = await User.findOne({ where: { email } });
  if (user) {
    throw new Error("Entered Email has already been registered");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  const newUser = new User();
  newUser.name = "No name";
  newUser.email = email;
  newUser.lastAccessedAt = new Date();
  newUser.passwordHash = passwordHash;

  const savedUser = await newUser.save();

  const currentUser: CurrentUser = {
    id: savedUser.id,
    createdAt: savedUser.createdAt,
    updatedAt: savedUser.updatedAt,
    name: savedUser.name,
    email: savedUser.email,
    profileImageUrl: savedUser.profileImageUrl,
    lastAccessedAt: savedUser.lastAccessedAt,
  };
  return currentUser;
};

export default localSignup;

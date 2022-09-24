import { MutationResolvers } from "@koremo/graphql-resolvers";
import { emailExpression, passwordExpression } from "@koremo/constants";

const localLogin: MutationResolvers["localLogin"] = async (
  _,
  args,
  context /*: refer buildContext.d.ts */
) => {
  const { email, password, isChecked } = args.input;

  if (!emailExpression.test(email)) {
    throw new Error("Email address is invalid");
  }
  if (!passwordExpression.test(password)) {
    throw new Error("Password is invalid");
  }

  const { user } = await context.authenticate("graphql-local", {
    email,
    password,
  });

  if (isChecked) {
    context.login(user); // execute passport.serialize
  }

  return true;
};

export default localLogin;

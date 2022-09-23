import { MutationResolvers } from "@koremo/graphql-resolvers";

const localLogin: MutationResolvers["localLogin"] = async (
  _,
  args,
  context /*: refer buildContext.d.ts */
) => {
  const { email, password } = args.input;
  const { user } = await context.authenticate("graphql-local", {
    email,
    password,
  });
  context.login(user); // this line execute passport.serialize
  return user;
};

export default localLogin;

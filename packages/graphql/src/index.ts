import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { resolve } from "path";

const typeDefs = loadSchema(resolve(__dirname, "..", "schemas", "**/*.graphql"), {
  loaders: [new GraphQLFileLoader()]
});

export default typeDefs
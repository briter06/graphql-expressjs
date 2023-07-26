import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeResolvers } from "@graphql-tools/merge";
import path from "path";
import movieResolver from "./graphql/MovieResolver/movie.resolver";
import actorResolver from "./graphql/ActorResolver/actor.resolver";

export const initTypeSchema = () => {
  const schema = loadSchemaSync(path.join(__dirname, "./schema.gql"), {
    loaders: [new GraphQLFileLoader()],
  });
  return schema;
};

export const initResolvers = () => {
  const livenessResolver = {
    Query: {
      liveness: () => ({
        status: true,
      }),
    },
  };
  const resolvers = mergeResolvers([
    livenessResolver,
    movieResolver.getResolvers(),
    actorResolver.getResolvers(),
  ]);
  return resolvers;
};

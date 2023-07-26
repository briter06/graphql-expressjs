import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { mergeResolvers } from '@graphql-tools/merge'
import path from "path";
import echoResolver from './graphql/EchoResolver/Echo.resolver';

export const initTypeSchema = () => {
    const schema = loadSchemaSync(path.join(__dirname, './schema.gql'), { loaders: [new GraphQLFileLoader()] })
    return schema
}

export const initResolvers = () => {
    const livenessResolver = {
        Query: {
            liveness: () => ({
                status: true
            })
        }
    }
    const resolvers = mergeResolvers([livenessResolver, echoResolver.getResolvers()])
    return resolvers
}
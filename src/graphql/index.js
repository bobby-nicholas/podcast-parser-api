import GQLSchema from './schema/query.graphql'
import { gql } from 'apollo-server'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import { resolvers } from './resolvers'

const typeDefs = gql(GQLSchema)

export default {
  typeDefs,
  resolvers,
  cacheControl: {
    defaultMaxAge: 14400
  },
  plugins: [responseCachePlugin()]
}
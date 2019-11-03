import { ApolloServer } from 'apollo-server-lambda'
import config from './graphql'

const server = new ApolloServer(config)

export const graphqlHandler = server.createHandler({ cors: { origin: '*', methods: '*' } })
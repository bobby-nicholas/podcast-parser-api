import { ApolloServer } from 'apollo-server'
import gql from './graphql'

const server = new ApolloServer(gql)

server.listen().then(({url}) => console.log(url))
import { ApolloServer, IResolvers } from 'apollo-server'
import { readFileSync } from 'fs'
import { join } from 'path'

import Database from './data'

const typeDefs = readFileSync(join(__dirname, '../schema.graphql')).toString('utf8')

const resolvers: IResolvers = {
  Query: {
    companies: (root, args, context) => Database.companies,
    company: (root, args, context) => Database.companies.find(c => c.id === parseInt(args.id)),
  },
  Mutation: {
    createCompany: (root, { input }, context) => {
      const newCompany = {
        id: Math.floor(Math.random() * 1000000),
        founder: Database.employers.find(e => e.id === parseInt(input.founderId)),
        ...input,
      }
      Database.companies.push(newCompany)

      return newCompany
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
})

server.listen(3000).then(() => {
  console.log('Server started on port 3000...')
})

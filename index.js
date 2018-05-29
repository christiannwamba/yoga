const {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
  type Computer {
    model: String!
    maker: String!
    year: Int!
  }

  type Query {
    computers: [Computer!]!
  }
`

const computersData = [
  {
    model: 'Macbook Pro',
    maker: 'Apple',
    year: 2017
  },
  {
    model: 'Macbook Air',
    maker: 'Apple',
    year: 2016
  }
]

const resolvers = {
  Query: {
    computers: () => computersData
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start({port: 4200}, () => console.log(`Server at 4200`))
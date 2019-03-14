const express = require("express");
const { ApolloServer, gql } = require("apollo-server");
const app = express();
const users = require("./Users");
const match = require("./Match");

// The GraphQL schema
const typeDefs = gql`
  type Query {
    hi: Array
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hi() {
      return users;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

// Add headers
// app.use(function(req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });
//

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));

// Old express below
// Get all members
// app.get('/api/users', (req, res) => res.send(users));

// // Get single member
// app.get('/api/users/:id', (req, res) => {
//   const found = users.some(user => user.id === req.params.id);

//   if(found) {
//     res.send(users.filter(user => user.id === req.params.id));
//   } else {
//     res.status(404).json({ msg: `no user with the id of ${req.params.id}`});
//   }
// });

// // Get all members
// app.get('/api/match', (req, res) => res.send(match));

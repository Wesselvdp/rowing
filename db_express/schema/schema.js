const graphql = require("graphql");

const { GraphQlObjectType, GraphQLString } = graphql;

const BookType = new GraphQlObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

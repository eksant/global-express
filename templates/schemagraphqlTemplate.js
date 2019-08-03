const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    examples(page: Int, limit: Int): Examples
  }

  type Examples {
    products: [Products!]
  }

  type Products {
    id: ID!
    title: String
    description: String
    npmjs: String
  }
`;

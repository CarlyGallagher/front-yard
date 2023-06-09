const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    listings: [Listing]!
    followers: [User]!
    reviews: [Review]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    followers(username: String!): [User]
    listings: [Listing]
    listingIsTaken(_id: ID!): Boolean
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFollower(username: String!): User
    addListing(
      title: String!
      description: String!
      price: Float!
      image: String!
      zip: String!
    ): Listing
    removeListing(_id: ID!): Listing
  }

  type Listing {
    _id: ID
    title: String
    description: String
    price: Float
    image: String
    zip: String
    createdAt: String
    username: String
    isTaken: Boolean
  }

  type Query {
    listings: [Listing]
    listing(_id: ID!): Listing
    listingIsTaken(_id: ID!): Boolean
  }

  type Mutation {
    addListing(
      title: String!
      description: String!
      price: Float!
      image: String!
      zip: String!
    ): Listing
    updateListing(
      _id: ID!
      title: String!
      description: String!
      price: Float!
      image: String!
      zip: String!
    ): Listing
    removeListing(_id: ID!): Listing
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
  }

  type Query {
    reviews: [Review]
    review(_id: ID!): Review
  }

  type Mutation {
    addReview(reviewText: String!, reviewAuthor: String!): Review
    updateReview(_id: ID!, reviewText: String!): Review
    removeReview(_id: ID!): Review
  }

  type Query {
    followers: [User]
  }

  type Mutation {
    addFollower(username: String!): User
  }

`;

module.exports = typeDefs;

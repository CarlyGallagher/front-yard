import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_LISTINGS = gql`
  query listings($zip: String) {
    listings(zip: $zip) {
      _id
      title
      description
      zip
      createdAt
      username
    }
  }
`;

export const QUERY_SINGLE_LISTING = gql`
  query getSingleListing($id: ID!) {
    listing(_id: $id) {
      _id
      title
      description
      price
      image
      zip
      createdAt
      username
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews($listingId: ID) {
    reviews(listingId: $listingId) {
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;

export const SEARCH_QUERY = gql`
  query searchQuery($searchQuery: String) {
    searchQuery(searchQuery: $searchQuery) {
      title
      description
    }
  }
`;


import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    tests {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    tests {
      data {
        attributes {
          title
          blogPost
          slug
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_ALL_SLUGS };

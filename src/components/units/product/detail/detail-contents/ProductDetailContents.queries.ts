import { gql } from "@apollo/client";

export const HOT_COURSES = gql`
  query {
    hotCourses {
      id
      name
      maxPrice
      minPrice
      address
      pick
      category {
        name
      }
      imageURLs {
        isThumbnail
        imageURLs
      }
    }
  }
`;

export const FETCH_PICKS_BY_USER = gql`
  query {
    fetchPicksByUser
  }
`;

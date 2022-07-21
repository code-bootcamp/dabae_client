import { gql } from "@apollo/client";

// 인기순 API
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

// 신규순 API
export const NEW_COURSES = gql`
  query {
    newCourses {
      id
      name
      maxPrice
      minPrice
      address
      pick
      contents
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

// 할인순 API
export const CHEAP_COURSES = gql`
  query {
    cheapCourses {
      id
      name
      maxPrice
      minPrice
      address
      pick
      contents
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

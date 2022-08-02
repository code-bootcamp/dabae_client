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
      review {
        rate
      }
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
      review {
        rate
      }
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
      review {
        rate
      }
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

// 저장 비교 api
export const FETCH_PICKS_BY_USER = gql`
  query {
    fetchPicksByUser
  }
`;

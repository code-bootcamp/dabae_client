import { gql } from "@apollo/client";
export const FETCH_STUDY_LIST = gql`
  query {
    fetchCoursesByUser(page: $page) {
      id
      name
      maxPrice
      minPrice
      pick
      openingDate
      closingDate
      host {
        nickname
      }
      imageURLs {
        imageURLs
      }
      review {
        rate
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const SAVE_LIST = gql`
  query ($search: String, $page: Float) {
    fetchCoursesSortByPick(page: $page, search: $search) {
      id
      name
      maxPrice
      minPrice
      address
      openingDate
      closingDate
      pick
      category {
        name
      }
      imageURLs {
        imageURLs
      }
    }
  }
`;

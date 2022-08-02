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
        isThumbnail
        imageURLs
      }
    }
  }
`;

// toggle pick이랑 비교
export const FETCH_PICKS_BY_USER = gql`
  query {
    fetchPicksByUser
  }
`;

import { gql } from "@apollo/client";

export const SAVE_LIST = gql`
  query ($search: String, $page: Float, $option: String) {
    fetchCoursesSortByOption(search: $search, page: $page, option: $option) {
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
        isThumbnail
      }
      review {
        rate
      }
      materials {
        id
        materials
      }
    }
  }
`;

// toggle pick이랑 비교
export const FETCH_PICKS_BY_USER = gql`
  query {
    fetchPicksByUser {
      id
    }
  }
`;

import { gql } from "@apollo/client";

// 로그인
export const LOGGED_IN = gql`
  query {
    fetchLoginUser {
      id
      email
      nickname
      isHost
    }
  }
`;

// 로그아웃
export const LOGOUT_USER = gql`
  mutation {
    logout
  }
`;

// 상품 목록
export const SEARCH_LIST = gql`
  query ($search: String, $page: Float) {
    fetchCoursesSortByPick(search: $search, page: $page) {
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

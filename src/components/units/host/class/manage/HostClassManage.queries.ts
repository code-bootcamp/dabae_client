import { gql } from "@apollo/client";

export const FETCH_COURSES_BY_HOST = gql`
  query ABC($hostID: String!, $page: Float) {
    fetchCoursesByHost(hostID: $hostID, page: $page) {
      id
      name
      maxPrice
      minPrice
      difficulty
      contents
      openingDate
      closingDate
      # address
      # addressDetail
      # imageURLs
      # category {
      #   id
      #   name
      # }
      # pick
      # materials {
      #   id
      #   materials
      # }
    }
  }
`;

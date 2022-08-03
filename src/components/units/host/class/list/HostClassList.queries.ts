import { gql } from "@apollo/client";

export const FETCH_COURSES_BY_HOST_ID = gql`
  query ABC($hostID: String!, $page: Float) {
    fetchCoursesByHostId(hostID: $hostID, page: $page) {
      id
      name
      maxPrice
      minPrice
      difficulty
      contents
      openingDate
      closingDate
      address
      addressDetail
      zipCode
      lat
      lng
      courseDate {
        id
        date
        courseTime {
          id
          maxUsers
          currentUsers
          recruitmentStartDate
          recruitmentEndDate
          courseStartTime
          courseEndTime
          # payment {
          # id
          # status
          # createdAt
          # price
          # quantity
          # amount
          # impUid
          # }
        }
      }
      materials {
        id
        materials
      }
    }
  }
`;

export const HOW_MANY_COURSES_BY_HOST = gql`
  query {
    howManyCoursesByHost
  }
`;

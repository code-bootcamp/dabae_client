import { gql } from "@apollo/client";

export const FETCH_COURSES = gql`
  query {
    fetchCourses {
      id
      name
      maxPrice
      minPrice
      address
    }
  }
`;

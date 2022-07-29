import { gql } from "@apollo/client";

export const FETCH_COURSE = gql`
  query fetchCourse($courseId: String!) {
    fetchCourse(courseId: $courseId) {
      id
      maxPrice
      minPrice
      courseDay {
        courseDay
        # specificSchedule {
        #   maxUsers
        #   courseStartTime
        #   courseEndTime
        # }
      }
    }
  }
`;

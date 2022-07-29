import { gql } from "@apollo/client";

export const CREATE_COURSE = gql`
  mutation ABC($createCourseInput: CreateCourseInput!) {
    createCourse(createCourseInput: $createCourseInput) {
      id
      name
      maxPrice
      minPrice
      difficulty
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const CREATE_COURSE_DATE = gql`
  mutation ABC($courseId: String!, $date: DateTime!) {
    createCourseDate(courseId: $courseId, date: $date) {
      id
      date
    }
  }
`;

export const CREATE_COURSE_TIME = gql`
  mutation ABC($createCourseTimeInput: CreateCourseTimeInput!) {
    createCourseTime(createCourseTimeInput: $createCourseTimeInput) {
      id
      maxUsers
      currentUsers
      recruitmentStartDate
      recruitmentEndDate
      courseStartTime
      courseEndTime
    }
  }
`;

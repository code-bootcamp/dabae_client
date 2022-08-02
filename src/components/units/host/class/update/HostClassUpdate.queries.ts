import { gql } from "@apollo/client";

export const UPDATE_COURSE = gql`
  mutation ABC($courseId: String!, $updateCourseInput: UpdateCourseInput!) {
    updateCourse(courseId: $courseId, updateCourseInput: $updateCourseInput) {
      id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const UPDATE_COURSE_DATE = gql`
  mutation ABC($courseId: String!, $date: DateTime!) {
    updateCourseDate(courseId: $courseId, date: $date) {
      id
      date
    }
  }
`;

export const UPDATE_COURSE_TIME = gql`
  mutation ABC($updateCourseTimeInput: CreateCourseTimeInput!) {
    updateCourseTime(updateCourseTimeInput: $updateCourseTimeInput) {
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

export const FETCH_COURSE = gql`
  query fetchCourse($courseId: String!) {
    fetchCourse(courseId: $courseId) {
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
      category {
        id
        name
      }
      imageURLs {
        id
        isThumbnail
        imageURLs
      }
      materials {
        id
        materials
      }
      courseDate {
        id
        date
        courseTime {
          id
          maxUsers
          recruitmentStartDate
          recruitmentEndDate
          courseStartTime
          courseEndTime
        }
      }
    }
  }
`;

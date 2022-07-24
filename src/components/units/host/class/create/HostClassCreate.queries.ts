import { gql } from "@apollo/client";

export const CREATE_COURSE = gql`
  mutation ABC($createCourseInput: CreateCourseInput!) {
    createCourse(createCourseInput: $createCourseInput) {
      id
      name
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const CREATE_COURSE_DATE = gql`
  mutation ABC($courseId: String!, $courseDay: DateTime!) {
    createCourseDate(courseId: $courseId, courseDay: $courseDay) {
      id
      courseDay
    }
  }
`;

export const CREATE_SPECIFIC_SCHEDULE_INPUT = gql`
  mutation ABC($createSpecificScheduleInput: CreateSpecificScheduleInput!) {
    createSpecificSchedule(
      createSpecificScheduleInput: $createSpecificScheduleInput
    ) {
      id
      courseStartTime
      courseEndTime
      maxUsers
      reservedPerson
      recruitmentStartDate
      recruitmentEndDate
    }
  }
`;

import { gql } from "@apollo/client";

export const CREATE_COURSE_REVIEW = gql`
  mutation createCourseReview($createReviewInput: CreateReviewInput!) {
    createCourseReview(createReviewInput: $createReviewInput) {
      id
      rate
      contents
      imageURLs
      course
      user
    }
  }
`;

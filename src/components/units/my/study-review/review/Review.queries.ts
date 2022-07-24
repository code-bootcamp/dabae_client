import { gql } from "@apollo/client";

// 리뷰 리스트
export const FETCH_REVIEWS = gql`
  query ($courseId: String, $page: Float = 1) {
    fetchCourseReviews(courseId: $courseId, page: $page) {
      id
      rate
      contents
      user {
        nickname
      }
      course {
        id
        name
        address
        imageURLs {
          imageURLs
        }
      }
    }
  }
`;

// 리뷰 삭제
export const DELETE_REVIEWS = gql`
  mutation ($courseReviewId: String!) {
    deleteCourseReview(courseReviewId: $courseReviewId)
  }
`;

import { gql } from "@apollo/client";
// toggle pick api
export const TOGGLE_PICK = gql`
  mutation ($courseId: String!) {
    togglePick(courseId: $courseId)
  }
`;

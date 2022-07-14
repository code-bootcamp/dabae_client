import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($newPassword: String!) {
    updatePassword(newPassword: $newPassword) {
      id
      email
      phone
    }
  }
`;

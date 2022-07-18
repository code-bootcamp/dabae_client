import { gql } from "@apollo/client";

// 패스워드 수정
export const PASSWORD_EDIT = gql`
  mutation ($newPassword: String!) {
    updatePassword(newPassword: $newPassword) {
      id
    }
  }
`;

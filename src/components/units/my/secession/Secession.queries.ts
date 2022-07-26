import { gql } from "@apollo/client";

// 회원 탈퇴
export const DELETE_USER = gql`
  mutation ($inputPassword: String!) {
    deleteLoginUser(inputPassword: $inputPassword)
  }
`;

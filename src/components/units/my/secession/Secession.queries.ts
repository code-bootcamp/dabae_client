import { gql } from "@apollo/client";

// 회원 탈퇴
export const DELETE_USER = gql`
  mutation ($inputPassword: String!) {
    deleteLoginUser(inputPassword: $inputPassword)
  }
`;

// 로그아웃
export const LOGOUT_USER = gql`
  mutation {
    logout
  }
`;

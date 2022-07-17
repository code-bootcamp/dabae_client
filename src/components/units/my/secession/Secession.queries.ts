import { gql } from "@apollo/client";

// 회원 탈퇴
export const DELETE_USER = gql`
  mutation {
    deleteLoginUser
  }
`;

// 로그인

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

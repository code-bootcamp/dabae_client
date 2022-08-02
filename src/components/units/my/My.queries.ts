import { gql } from "@apollo/client";

// 로그인
export const LOGGED_IN = gql`
  query {
    fetchLoginUser {
      id
      email
      nickname
      phone
      gender
      birth
      isHost
      profileImageURL
    }
  }
`;

// 로그아웃
export const LOGOUT_USER = gql`
  mutation {
    logout
  }
`;

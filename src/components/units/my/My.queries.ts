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
      profileImageURL
    }
  }
`;

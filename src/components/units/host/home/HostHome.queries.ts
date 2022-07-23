import { gql } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      email
      nickname
    }
  }
`;

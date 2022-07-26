import { gql } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      id
      email
      nickname
      isHost
      businessName
      businessNumber
      phone
    }
  }
`;

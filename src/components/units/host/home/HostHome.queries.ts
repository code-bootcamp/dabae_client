import { gql } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      id
      email
      nickname
      phone
      account
      bank
      businessName
      businessNumber
      gender
      profileImageURL
    }
  }
`;

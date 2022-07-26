import { gql } from "@apollo/client";

export const USER_TO_HOST = gql`
  mutation userToHost(
    $businessName: String!
    $businessNumber: String!
    $inputPassword: String!
  ) {
    userToHost(
      businessName: $businessName
      businessNumber: $businessNumber
      inputPassword: $inputPassword
    ) {
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

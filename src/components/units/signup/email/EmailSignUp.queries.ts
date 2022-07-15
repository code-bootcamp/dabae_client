import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      nickname
      isHost
      marketingAgreement
    }
  }
`;

export const HAS_EMAIL = gql`
  mutation hasEmail($email: String!) {
    hasEmail(email: $email)
  }
`;

export const HAS_NICKNAME = gql`
  mutation hasEmail($nickname: String!) {
    hasNickname(nickname: $nickname)
  }
`;

export const SEND_TOKEN_TO_PHONE = gql`
  mutation sendTokenToPhone($phone: String!) {
    sendTokenToPhone(phone: $phone)
  }
`;

export const AUTH_PHONE_OK = gql`
  mutation authPhoneOk($phone: String!, $inputToken: String!) {
    authPhoneOk(phone: $phone, inputToken: $inputToken)
  }
`;

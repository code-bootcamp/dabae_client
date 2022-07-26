import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const CHECK_EMAIL = gql`
  mutation checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`;

export const CHECK_NICKNAME = gql`
  mutation checkNickname($nickname: String!) {
    checkNickname(nickname: $nickname)
  }
`;

export const CHECK_PHONE = gql`
  mutation checkPhone($phone: String!) {
    checkPhone(phone: $phone)
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

import { gql } from "@apollo/client";

export const FORGET_PASSWORD = gql`
  mutation forgotPassword($email: String!, $newPassword: String!) {
    forgotPassword(email: $email, newPassword: $newPassword) {
      id
      email
      nickname
      isHost
      marketingAgreement
    }
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

export const CHECK_PHONE = gql`
  mutation checkPhone($phone: String!) {
    checkPhone(phone: $phone)
  }
`;

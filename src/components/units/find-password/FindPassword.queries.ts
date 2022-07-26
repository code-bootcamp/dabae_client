import { gql } from "@apollo/client";

export const FORGOT_PASSWORD_UPDATE = gql`
  mutation forgotPasswordUpdate($newPassword: String!, $email: String!) {
    forgotPasswordUpdate(newPassword: $newPassword, email: $email)
  }
`;

export const FORGOT_PASSWORD_SEND_TOKEN = gql`
  mutation forgotPasswordSendToken($phone: String!) {
    forgotPasswordSendToken(phone: $phone)
  }
`;

export const FORGOT_PASSWORD_AUTH_PHONE_OK = gql`
  mutation forgotPasswordAuthPhoneOk($phone: String!, $inputToken: String!) {
    forgotPasswordAuthPhoneOk(phone: $phone, inputToken: $inputToken)
  }
`;

export const CHECK_PHONE = gql`
  mutation checkPhone($phone: String!) {
    checkPhone(phone: $phone)
  }
`;

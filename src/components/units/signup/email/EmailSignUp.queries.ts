import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      nickname
      isHost
      marketingAgreement
    }
  }
`;

// export const SEND_TOKEN_TO_PHONE = gql`
//   mutation sendTokenToPhone($phone: String!) {
//     sendTokenToPhone(phone: $phone)
//   }
// `;

// export const AUTH_PHONE_OK = gql`
//   mutation authPhoneOk($phone: String!, $inputToken: String!) {
//     authPhoneOk(phone: $phone, inputToken: $inputToken)
//   }
// `;

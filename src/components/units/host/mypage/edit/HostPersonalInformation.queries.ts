import { gql } from "@apollo/client";

export const DELETE_LOGIN_USER = gql`
  mutation ABC($inputPassword: String!) {
    deleteLoginUser(inputPassword: $inputPassword)
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation ABC($newPassword: String!, $inputPassword: String!) {
    updatePassword(newPassword: $newPassword, inputPassword: $inputPassword)
  }
`;

export const CHECK_NICKNAME = gql`
  mutation checkNickname($nickname: String!) {
    checkNickname(nickname: $nickname)
  }
`;

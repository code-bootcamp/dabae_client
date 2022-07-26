import { gql } from "@apollo/client";

export const HOST_LOGIN = gql`
  mutation hostLogin($email: String!, $password: String!) {
    hostLogin(email: $email, password: $password)
  }
`;

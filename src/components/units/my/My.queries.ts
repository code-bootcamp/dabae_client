import { gql } from "@apollo/client";

// 로그인
export const LOGGED_IN = gql`
  query {
    fetchLoginUser {
      id
      email
      nickname
      phone
      point
      gender
      birth
      isHost
      profileImageURL
    }
  }
`;

// 로그아웃
export const LOGOUT_USER = gql`
  mutation {
    logout
  }
`;

// 포인트 충전
export const CHARGE_POINT = gql`
  mutation chargePoint($amount: Float!, $impUid: String!) {
    chargePoint(amount: $amount, impUid: $impUid) {
      id
    }
  }
`;

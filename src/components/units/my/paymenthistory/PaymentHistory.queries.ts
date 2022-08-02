import { gql } from "@apollo/client";

// 결제정보 리스트
export const PAYMENT_LIST = gql`
  query {
    fetchPaymentsByUser {
      id
      createdAt
      price
      impUid
      course {
        id
        name
        maxPrice
        minPrice
      }
    }
  }
`;

// 결제 취소
export const PAYMENT_CANCEL = gql`
  mutation ($impUid: String!) {
    cancelPayment(impUid: $impUid)
  }
`;

// 결제 취소를 위한 api
export const PAYMENT = gql`
  query ($paymentId: String!) {
    fetchPayment(paymentId: $paymentId) {
      impUid
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_PAYMENT = gql`
  query ($paymentId: String!) {
    fetchPayment(paymentId: $paymentId) {
      id
      amount
      quantity
      course {
        id
        name
        imageURLs {
          imageURLs
        }
      }
      courseTime {
        id
        maxUsers
        courseStartTime
      }
    }
  }
`;

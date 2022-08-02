import Head from "next/head";
import { IPaymentUIProps } from "./Payment.types";
import * as S from "./Payment.styles";

export default function PaymentUI(props: IPaymentUIProps) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        />
      </Head>
      <S.PaymentButton onClick={props.requestPay}>결제하기</S.PaymentButton>
    </>
  );
}

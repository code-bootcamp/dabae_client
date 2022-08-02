import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  PAYMENT,
  PAYMENT_CANCEL,
  PAYMENT_LIST,
} from "./PaymentHistory.queries";
import PaymentHistoryPresenter from "./PaymentHistory.presenter";
import { accessTokenState } from "@/src/commons/store";
import { useRecoilState } from "recoil";

export default function PaymentHistoryContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  const [accessToken] = useRecoilState(accessTokenState);
  const { data: payment } = useQuery(PAYMENT_LIST);
  const client = useApolloClient();

  const onClickCancel = (paymentId: string) => async () => {
    try {
      const res = await client.query({
        query: PAYMENT,
        variables: {
          paymentId,
        },
      });
      const impUid = res.data?.fetchPayment.impUid;
      await client.mutate({
        mutation: PAYMENT_CANCEL,
        variables: {
          impUid,
        },
        context: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
        refetchQueries: [
          {
            query: PAYMENT_LIST,
          },
        ],
      });
      alert("결제 취소가 완료되었습니다 :)");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <PaymentHistoryPresenter
      payment={payment}
      BackMyMove={BackMyMove}
      onClickCancel={onClickCancel}
    />
  );
}

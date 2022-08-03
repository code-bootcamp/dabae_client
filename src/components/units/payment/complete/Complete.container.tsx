import { useQuery } from "@apollo/client";
import CompletePresenter from "./Complete.presenter";
import { FETCH_PAYMENT } from "./Complete.queries";
import { ICompleteContainer } from "./Complete.types";

export default function CompleteContainer(props: ICompleteContainer) {
  console.log(props.paymentId);
  const { data } = useQuery(FETCH_PAYMENT, {
    variables: {
      paymentId: props.paymentId,
    },
  });

  return <CompletePresenter data={data} />;
}

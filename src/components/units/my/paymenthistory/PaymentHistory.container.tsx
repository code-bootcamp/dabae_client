import { useRouter } from "next/router";
import PaymentHistoryPresenter from "./PaymentHistory.presenter";

export default function PaymentHistoryContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  return <PaymentHistoryPresenter BackMyMove={BackMyMove} />;
}

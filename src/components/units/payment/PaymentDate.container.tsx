import { useRouter } from "next/router";
import { useState } from "react";
import PaymentPresenter from "./Payment.presenter";

export default function PaymentContainer() {
  const router = useRouter();

  const onClickPaymentMove = () => {
    router.push("/");
  };

  const [toggle, setToggle] = useState<boolean>(false);
  const [personCount, setPersonCount] = useState<number>(1);

  const increaseCount = () => {
    setPersonCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setPersonCount((prev) => prev - 1);
  };

  return (
    <PaymentPresenter
      toggle={toggle}
      personCount={personCount}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
      setToggle={setToggle}
      onClickPaymentMove={onClickPaymentMove}
    />
  );
}

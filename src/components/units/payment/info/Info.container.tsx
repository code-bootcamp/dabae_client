import { useRouter } from "next/router";
import { useState } from "react";
import InfoPresenter from "./Info.presenter";

export default function InfoContainer() {
  // const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
  //   const onlyNumber = value.replace(/[^0-9]/g, "");
  //   setPrice(onlyNumber);
  // };

  const router = useRouter();

  const onClickPaymentMove = () => {
    router.push(`/products/${router.query.courseId}/payment/complete`);
  };

  // 모달 버튼
  const [isModalVisible, setIsModalVisible] = useState({
    service: false,
    agree: false,
  });

  const onServiceModal = () => {
    setIsModalVisible({
      ...isModalVisible,
      service: !isModalVisible.service,
    });
  };

  const onAgreeModal = () => {
    setIsModalVisible({
      ...isModalVisible,
      agree: !isModalVisible.agree,
    });
  };

  return (
    <InfoPresenter
      isModalVisible={isModalVisible}
      onServiceModal={onServiceModal}
      onAgreeModal={onAgreeModal}
      onClickPaymentMove={onClickPaymentMove}
    />
  );
}

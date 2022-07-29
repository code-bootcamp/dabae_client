import { useState } from "react";
import InfoPresenter from "./Info.presenter";
import { IInfoContainer } from "./Info.types";

export default function InfoContainer(props: IInfoContainer) {
  // const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
  //   const onlyNumber = value.replace(/[^0-9]/g, "");
  //   setPrice(onlyNumber);
  // };

  const onClickPaymentMove = () => {
    props.setPage(3);
  };

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
      data={props.data}
      courseTime={props.courseTime}
      currentPrice={props.currentPrice}
      isModalVisible={isModalVisible}
      onServiceModal={onServiceModal}
      onAgreeModal={onAgreeModal}
      onClickPaymentMove={onClickPaymentMove}
    />
  );
}

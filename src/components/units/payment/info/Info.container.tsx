import { useState } from "react";
import InfoPresenter from "./Info.presenter";
import { IInfoContainer } from "./Info.types";

export default function InfoContainer(props: IInfoContainer) {
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
      userData={props.userData}
      setPage={props.setPage}
      courseTime={props.courseTime}
      currentPrice={props.currentPrice}
      currentUsers={props.currentUsers}
      isModalVisible={isModalVisible}
      onServiceModal={onServiceModal}
      onAgreeModal={onAgreeModal}
    />
  );
}

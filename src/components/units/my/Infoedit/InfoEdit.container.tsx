import { useRouter } from "next/router";
import React, { useState } from "react";
import InfoEditPresenter from "./InfoEdit.presenter";

export default function InfoEditContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  // 모달 버튼
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <InfoEditPresenter
      BackMyMove={BackMyMove}
      isModalVisible={isModalVisible}
      onToggleModal={onToggleModal}
    />
  );
}

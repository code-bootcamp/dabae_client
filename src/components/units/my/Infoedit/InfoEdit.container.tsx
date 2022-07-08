import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import InfoEditPresenter from "./InfoEdit.presenter";

export default function InfoEditContainer() {
  const profileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  // 프로필 사진 변경
  const ProfileUpload = () => {
    profileRef.current?.click();
  };

  // 모달 버튼
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <InfoEditPresenter
      isModalVisible={isModalVisible}
      profileRef={profileRef}
      BackMyMove={BackMyMove}
      onToggleModal={onToggleModal}
      ProfileUpload={ProfileUpload}
    />
  );
}

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState, useRef, ChangeEvent } from "react";
import InfoEditPresenter from "./InfoEdit.presenter";
import { PASSWORD_EDIT } from "./InfoEdit.queries";

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
  const [, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [, setNewPasswordConfirm] = useState<string>("");

  // 오류메세지 상태저장
  const [passwordNewMessage, setPasswordNewMessage] = useState<string>("");
  const [passwordConfirmNewMessage, setPasswordNewConfirmMessage] =
    useState<string>("");
  // 유효성 검사
  const [isNewPassword, setIsNewPassword] = useState<boolean>(false);
  const [isNewPasswordConfirm, setIsNewPasswordConfirm] =
    useState<boolean>(false);

  // 기존 비밀번호
  const currentPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // password 유효성 검사
  const onChageNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordCurrent = e.target.value;
    setNewPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordNewMessage(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
      );
      setIsNewPassword(false);
    } else {
      setPasswordNewMessage("");
      setIsNewPassword(true);
    }
  };

  // password 확인
  const onChageNewPasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordConfirmCurrent = e.target.value;
    setNewPasswordConfirm(passwordConfirmCurrent);

    if (newPassword === passwordConfirmCurrent) {
      setPasswordNewConfirmMessage("");
      setIsNewPasswordConfirm(true);
    } else {
      setPasswordNewConfirmMessage("비밀번호를 다시 확인해주세요.");
      setIsNewPasswordConfirm(false);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [passwordEdit] = useMutation(PASSWORD_EDIT);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const changeNewPassword = async () => {
    try {
      await passwordEdit({
        variables: {
          newPassword,
        },
      });
      setIsModalVisible((prev) => !prev);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <InfoEditPresenter
      isModalVisible={isModalVisible}
      profileRef={profileRef}
      passwordNewMessage={passwordNewMessage}
      passwordConfirmNewMessage={passwordConfirmNewMessage}
      isNewPassword={isNewPassword}
      isNewPasswordConfirm={isNewPasswordConfirm}
      currentPassword={currentPassword}
      onChageNewPassword={onChageNewPassword}
      onChageNewPasswordConfirm={onChageNewPasswordConfirm}
      changeNewPassword={changeNewPassword}
      BackMyMove={BackMyMove}
      onToggleModal={onToggleModal}
      ProfileUpload={ProfileUpload}
    />
  );
}

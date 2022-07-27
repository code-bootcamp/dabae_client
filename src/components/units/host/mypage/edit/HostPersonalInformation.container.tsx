import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import HostPersonalInformationUI from "./HostPersonalInformation.presenter";
import { HostPersonalInformationSchema } from "./HostPersonalInformation.schema";
import { fetchHostUserDataType } from "./HostPersonalInformation.types";
import { useMutation } from "@apollo/client";
import {
  CHECK_NICKNAME,
  DELETE_LOGIN_USER,
  UPDATE_PASSWORD,
} from "./HostPersonalInformation.queries";
import { useRouter } from "next/router";

/**
 * Author : Sukyung Lee
 * FileName: HostPersonalInformation.container.tsx
 * Date: 2022-07-16 18:18:44
 * Description : 호스트 개인 정보 조회 및 수정
 */

interface IHostPersonalInformationProps {
  fetchHostUserData: fetchHostUserDataType;
}

const HostPersonalInformation = (props: IHostPersonalInformationProps) => {
  const methods = useForm({
    resolver: yupResolver(HostPersonalInformationSchema),
    mode: "onChange",
  });
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenNewPasswordModal, setIsOpenNewPasswordModal] = useState(false);
  const [deleteLoginUserGQL] = useMutation(DELETE_LOGIN_USER);
  const [updatePasswordGQL] = useMutation(UPDATE_PASSWORD);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [, setRenderToggle] = useState("");
  const [, setIsNicknameValid] = useState(false); // 닉네임 중복 검사
  const router = useRouter();

  const changeDeleteToggle = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const changePasswordToggle = () => {
    setIsOpenNewPasswordModal((prev) => !prev);
  };

  const handleChangeGender = (e: ChangeEvent<HTMLInputElement>) => {
    methods.setValue("gender", e.target.value);
    setRenderToggle(e.target.value);
  };

  const handleChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    methods.setValue("nickname", e.target.value);
    methods.trigger("nickname");
    setIsNicknameValid(false);
  };

  const deleteHost = async () => {
    try {
      const result = await deleteLoginUserGQL({
        variables: {
          inputPassword: methods.getValues("deleteCheckPassword"),
        },
      });
      if (result.data.deleteLoginUser) {
        setIsOpenDeleteModal(false);
        alert("회원 탈퇴가 되었습니다.");
        router.push("/");
      }
    } catch {
      alert("회원 탈퇴를 실패했습니다.");
    }
  };

  const handleNicknameDuplicateCheck = async () => {
    try {
      const result = await checkNickname({
        variables: {
          nickname: methods.getValues("nickname"),
        },
      });
      if (result?.data.checkNickname) {
        alert("사용 가능한 닉네임 입니다.");
        setIsNicknameValid(true);
      } else {
        alert("이미 존재하는 닉네임 입니다.");
      }
    } catch {
      alert("현재 닉네임 중복 검사를 할 수 없습니다.");
    }
  };

  const updateHostInformation = () => {
    console.log(methods.getValues());
  };

  const updateNewPassword = async () => {
    const result = await updatePasswordGQL({
      variables: {
        inputPassword: methods.getValues("currentCheckPassword"),
        newPassword: methods.getValues("newCheckPassword"),
      },
    });
    if (result.data?.updatePassword) {
      methods.resetField("currentCheckPassword");
      methods.resetField("newCheckPassword");
      methods.resetField("newDoubleCheckPassword");
      changePasswordToggle();
    } else {
      alert("비밀번호가 변경되지 않았습니다.");
    }
  };

  return (
    <HostPersonalInformationUI
      methods={methods}
      fetchHostUserData={props.fetchHostUserData}
      isOpenDeleteModal={isOpenDeleteModal}
      isOpenNewPasswordModal={isOpenNewPasswordModal}
      changeDeleteToggle={changeDeleteToggle}
      changePasswordToggle={changePasswordToggle}
      deleteHost={deleteHost}
      updateNewPassword={updateNewPassword}
      updateHostInformation={updateHostInformation}
      handleChangeGender={handleChangeGender}
      handleNicknameDuplicateCheck={handleNicknameDuplicateCheck}
      handleChangeNickName={handleChangeNickName}
    />
  );
};
export default HostPersonalInformation;

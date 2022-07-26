import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HostPersonalInformationUI from "./HostPersonalInformation.presenter";
import { HostPersonalInformationSchema } from "./HostPersonalInformation.schema";
import { fetchHostUserDataType } from "./HostPersonalInformation.types";
import { useMutation } from "@apollo/client";
import {
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
  const router = useRouter();

  const changeDeleteToggle = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const changePasswordToggle = () => {
    setIsOpenNewPasswordModal((prev) => !prev);
  };
  const deleteHost = async () => {
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
    />
  );
};
export default HostPersonalInformation;

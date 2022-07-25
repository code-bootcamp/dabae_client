import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HostPersonalInformationUI from "./HostPersonalInformation.presenter";
import { HostPersonalInformationSchema } from "./HostPersonalInformation.schema";
import { fetchHostUserDataType } from "./HostPersonalInformation.types";

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

  const changeDeleteToggle = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const changePasswordToggle = () => {
    setIsOpenNewPasswordModal((prev) => !prev);
  };
  const deleteHost = () => {};

  const changeNewPassword = () => {};

  return (
    <HostPersonalInformationUI
      methods={methods}
      fetchHostUserData={props.fetchHostUserData}
      isOpenDeleteModal={isOpenDeleteModal}
      isOpenNewPasswordModal={isOpenNewPasswordModal}
      changeDeleteToggle={changeDeleteToggle}
      changePasswordToggle={changePasswordToggle}
      deleteHost={deleteHost}
      changeNewPassword={changeNewPassword}
    />
  );
};
export default HostPersonalInformation;

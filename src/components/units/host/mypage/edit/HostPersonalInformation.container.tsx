import { yupResolver } from "@hookform/resolvers/yup";
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

  return (
    <HostPersonalInformationUI
      methods={methods}
      fetchHostUserData={props.fetchHostUserData}
    />
  );
};
export default HostPersonalInformation;

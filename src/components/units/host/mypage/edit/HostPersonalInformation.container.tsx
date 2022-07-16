import { useForm } from "react-hook-form";
import HostPersonalInformationUI from "./HostPersonalInformation.presenter";

/**
 * Author : Sukyung Lee
 * FileName: HostPersonalInformation.container.tsx
 * Date: 2022-07-16 18:18:44
 * Description : 호스트 개인 정보 조회 및 수정
 */

const HostPersonalInformation = () => {
  const methods = useForm();

  return <HostPersonalInformationUI methods={methods} />;
};
export default HostPersonalInformation;

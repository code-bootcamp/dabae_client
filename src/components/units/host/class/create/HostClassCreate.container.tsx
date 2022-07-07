import HostClassCreateUI from "./HostClassCreate.presenter";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

/**
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Container.tsx
 * Date: 2022-07-06 20:41:52
 * Description : 호스트 수업 등록 컨테이너
 */
const HostClassCreate = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [step, setStep] = useState(1);
  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const onClickChangeStep = (move: number) => () => {
    setStep(move);
  };
  return (
    <HostClassCreateUI
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      files={files}
      step={step}
      onClickChangeStep={onClickChangeStep}
    />
  );
};
export default HostClassCreate;

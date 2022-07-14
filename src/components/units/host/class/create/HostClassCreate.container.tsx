import HostClassCreateUI from "./HostClassCreate.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";

/**
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Container.tsx
 * Date: 2022-07-06 20:41:52
 * Description : 호스트 수업 등록 컨테이너
 */
const HostClassCreate = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<any>({
    defaultValues: {
      materials: [],
      imageUrls: [],
      openingDate: "",
      closingDate: "",
    },
  });
  const [firstCategory, setFirstCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const onChangeFirstCategory = (e: any) => {
    setFirstCategory(e.target.value);
    methods.setValue("firstCategory", e.target.value);
  };
  const onChangeSecondCategory = (e: any) => {
    setSecondCategory(e.target.value);
    methods.setValue("secondCategory", e.target.value);
  };

  const onClickChangeStep = (move: number) => () => {
    setStep(move);
  };

  const onChangeClassRecruitDate = (date: any, dateString: string) => {
    methods.setValue("openingDate", dateString[0]);
    methods.setValue("closingDate", dateString[1]);
  };

  const onChangeLevel = (e: any) => {
    methods.setValue("difficulty", e.target.value);
  };

  const onClickResetField = () => {
    methods.reset();
  };

  const onClickSubmit = () => {
    const { tagsInput, ...tempInput } = { ...methods.getValues() };
    console.log(tempInput);
  };

  return (
    <HostClassCreateUI
      step={step}
      onClickChangeStep={onClickChangeStep}
      onChangeFirstCategory={onChangeFirstCategory}
      onChangeSecondCategory={onChangeSecondCategory}
      firstCategory={firstCategory}
      secondCategory={secondCategory}
      onChangeClassRecruitDate={onChangeClassRecruitDate}
      // classRecruitDeadLine={classRecruitDeadLine}
      methods={methods}
      onClickSubmit={onClickSubmit}
      onChangeLevel={onChangeLevel}
      onClickResetField={onClickResetField}
    />
  );
};
export default HostClassCreate;

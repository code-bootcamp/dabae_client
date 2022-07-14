import HostClassCreateUI from "./HostClassCreate.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { dateFormat4y2m2d2h2m } from "@/src/function/date/format/dateFormat";

/**
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Container.tsx
 * Date: 2022-07-06 20:41:52
 * Description : 호스트 수업 등록 컨테이너
 */

const CREATE_COURSE = gql`
  mutation ABC($createCourseInput: CreateCourseInput!) {
    createCourse(createCourseInput: $createCourseInput) {
      id
      name
    }
  }
`;

const HostClassCreate = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<any>({
    defaultValues: {
      materials: [],
      imageurls: [],
      openingDate: dateFormat4y2m2d2h2m(new Date()),
      closingDate: dateFormat4y2m2d2h2m(new Date()),
    },
  });
  const [firstCategory, setFirstCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [createCourseGQL] = useMutation(CREATE_COURSE);

  const onChangeFirstCategory = (e: any) => {
    setFirstCategory(e.target.value);
    methods.setValue("firstCategory", e.target.value);
  };
  const onChangeSubCategory = (e: any) => {
    setSubCategory(e.target.value);
    methods.setValue("subCategory", e.target.value);
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

  const onChangeDifficulty = (e: any) => {
    methods.setValue("difficulty", e.target.value);
  };

  const onClickSubmit = () => {
    methods.unregister(["tagsInput", "firstCategory"]);
    // methods.unregister("firstCategory");

    console.log(methods.getValues());
    const { tagsInput, firstCategory, ...data } = methods.getValues();

    try {
      createCourseGQL({
        variables: {
          createCourseInput: {
            // name: "도비의 수업",
            // maxPrice: 50000,
            // minPrice: 10000,
            // address: "호그와트",
            // addressDetail: "9와 4분의 3 승강장",
            // zipCode: "1234567",
            // difficulty: "easy",
            // materials: "[마법지팡이, 부엉이, 그리핀도르]",
            // contents: "도비는 주인님께 양말을 받았어요",
            // openingDate: "2022/07/14",
            // closingDate: "2022/07/16",
            // imageurls: ["123", "123"],
            // lat: 37.1234,
            // lng: 123.1234,
            // subCategory: "서핑",
            // ...methods.getValues(),
            ...data,
            materials: String(methods.getValues("materials")),
            maxPrice: Number(methods.getValues("maxPrice")),
            minPrice: Number(methods.getValues("minPrice")),
            lat: Number(methods.getValues("lat")),
            lng: Number(methods.getValues("lng")),
            imageurls: ["123", "123"],
          },
        },
      }).then((res) => {
        console.log(res);
      });
    } catch {
      console.log("에러");
    }
  };

  return (
    <HostClassCreateUI
      step={step}
      onClickChangeStep={onClickChangeStep}
      onChangeFirstCategory={onChangeFirstCategory}
      onChangeSubCategory={onChangeSubCategory}
      firstCategory={firstCategory}
      subCategory={subCategory}
      onChangeClassRecruitDate={onChangeClassRecruitDate}
      // classRecruitDeadLine={classRecruitDeadLine}
      methods={methods}
      onClickSubmit={onClickSubmit}
      onChangeLevel={onChangeLevel}
      onClickResetField={onClickResetField}
      onChangeDifficulty={onChangeDifficulty}
    />
  );
};
export default HostClassCreate;

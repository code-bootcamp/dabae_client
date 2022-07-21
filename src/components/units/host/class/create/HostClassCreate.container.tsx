import HostClassCreateUI from "./HostClassCreate.presenter";
import { ChangeEvent, useState } from "react";
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

const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

type useFormType = {
  materials?: string[];
  imageURLs: [];
  openingDate: string;
  closingDate: string;
  firstCategory: string;
  category: string;
  difficulty: string;
  tagsInput: string | undefined;
  maxPrice: string | number;
  minPrice: string | number;
  lat: number;
  lng: number;
  contents: string;
  name: string;
  courseDate: [];
};

const HostClassCreate = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<useFormType>({
    defaultValues: {
      materials: [],
      imageURLs: [],
      openingDate: dateFormat4y2m2d2h2m(new Date()),
      closingDate: dateFormat4y2m2d2h2m(new Date()),
      courseDate: [],
    },
  });
  const [firstCategory, setFirstCategory] = useState("");
  const [category, setCategory] = useState("");
  const [uploadFileGQL] = useMutation(UPLOAD_FILE);
  const [createCourseGQL] = useMutation(CREATE_COURSE);
  const onChangeFirstCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstCategory(e.target.value);
    methods.setValue("firstCategory", e.target.value);
  };
  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    methods.setValue("category", e.target.value);
  };

  const onClickChangeStep = (move: number) => () => {
    setStep(move);
  };

  // TODO: typescript 해결하기
  const onChangeClassRecruitDate = (
    date: any,
    dateString: any // [string,string]
  ) => {
    methods.setValue("openingDate", dateString[0]);
    methods.setValue("closingDate", dateString[1]);
  };

  const onChangeLevel = (e: ChangeEvent<HTMLSelectElement>) => {
    methods.setValue("difficulty", e.target.value);
  };

  const onClickResetField = () => {
    methods.reset();
  };

  const onChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
    methods.setValue("difficulty", e.target.value);
  };

  const onClickSubmit = async () => {
    methods.unregister(["tagsInput", "firstCategory", "courseDate"]);
    // methods.unregister("firstCategory");

    let imgPrevCount = 0;
    let imgNewCount = 0;
    const imgTempArr: string[] = [];
    const fileTemp: any = [];
    // 서버에서 받아온 이미지 중에 삭제되지 않고 남아있는 갯수 찾기
    console.log("test", methods.getValues("imageURLs"));
    console.log(methods.getValues());
    // TODO: 타입 스크립트를 잡으려고 임시로 처리한 방법(추후 수정 필요)
    const imageURLsTemp: any = methods.getValues("imageURLs");
    if (methods.getValues("imageURLs")) {
      for (const el of imageURLsTemp) {
        if (typeof el === "string") {
          imgPrevCount = imgPrevCount + 1;
          imgTempArr.push(el);
        } else {
          imgNewCount = imgNewCount + 1;
          fileTemp.push(el.file);
        }
      }
      if (fileTemp.length) {
        const result = await uploadFileGQL({ variables: { files: fileTemp } });
        console.log("result", result.data?.uploadFile);
        result.data?.uploadFile.forEach((el: string) => {
          imgTempArr.push(el);
        });
      }
    }

    methods.setValue("imageURLs", imgTempArr as any);
    const { tagsInput, firstCategory, courseDate, ...data } =
      methods.getValues();

    try {
      const result = await createCourseGQL({
        variables: {
          createCourseInput: {
            ...data,
            materials: methods.getValues("materials"),
            maxPrice: Number(methods.getValues("maxPrice")),
            minPrice: Number(methods.getValues("minPrice")),
            lat: Number(methods.getValues("lat")),
            lng: Number(methods.getValues("lng")),
            category: methods.getValues("category"),
          },
        },
      });
      console.log(result);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <HostClassCreateUI
      step={step}
      onClickChangeStep={onClickChangeStep}
      onChangeFirstCategory={onChangeFirstCategory}
      onChangeCategory={onChangeCategory}
      firstCategory={firstCategory}
      category={category}
      onChangeClassRecruitDate={onChangeClassRecruitDate}
      methods={methods}
      onClickSubmit={onClickSubmit}
      onChangeLevel={onChangeLevel}
      onClickResetField={onClickResetField}
      onChangeDifficulty={onChangeDifficulty}
    />
  );
};
export default HostClassCreate;

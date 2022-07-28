import HostClassCreateUI from "./HostClassCreate.presenter";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { IHostClassCreateProps, useFormType } from "./HostClassCreate.types";
import {
  CREATE_COURSE,
  CREATE_COURSE_DATE,
  CREATE_COURSE_TIME,
  UPLOAD_FILE,
} from "./HostClassCreate.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { HostClassCreateSchema } from "./HostClassCreate.schema";
import { useRouter } from "next/router";
import { Moment } from "moment";
/**
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Container.tsx
 * Date: 2022-07-06 20:41:52
 * Description : 호스트 수업 등록 컨테이너
 */

const HostClassCreate = (props: IHostClassCreateProps) => {
  const [step, setStep] = useState(1);
  const methods = useForm<useFormType>({
    resolver: yupResolver(HostClassCreateSchema),
    mode: "onChange",
    defaultValues: {
      materials: [],
      imageURLs: [],
      courseDate: [],
    },
  });
  const [firstCategory, setFirstCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const [uploadFileGQL] = useMutation(UPLOAD_FILE);
  const [createCourseGQL] = useMutation(CREATE_COURSE);
  const [createCourseDateGQL] = useMutation(CREATE_COURSE_DATE);
  const [createCourseTimeGQL] = useMutation(CREATE_COURSE_TIME);
  const router = useRouter();

  // 수업 첫번째 카테고리 변경하는 함수
  const onChangeFirstCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstCategory(e.target.value);
    methods.setValue("firstCategory", e.target.value);
    methods.trigger("firstCategory");
  };
  // 수업 두번째 카테고리 변경하는 함수
  const onChangeSecondCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSecondCategory(e.target.value);
    methods.setValue("secondCategory", e.target.value);
    methods.trigger("secondCategory");
  };
  // 수업 생성 단계 페이지 변경하는 함수
  const onClickChangeStep = (move: number) => () => {
    setStep(move);
  };

  // 수업 진행 기간 설정하는 함수
  const onChangeClassRecruitDate = (
    date: [Moment, Moment],
    dateString: [string, string]
  ) => {
    methods.setValue("openingDate", dateString[0]);
    methods.setValue("closingDate", dateString[1]);
    methods.trigger("openingDate");
    methods.trigger("closingDate");
  };
  // 수업 생성할 때 입력한 인자값 모두 초기화하는 함수
  const onClickResetField = () => {
    methods.reset();
    setFirstCategory("");
    setSecondCategory("");
  };

  // 수업 난이도 설정하는 함수
  const onChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
    methods.setValue("difficulty", e.target.value);
    methods.trigger("difficulty");
  };
  const onChangePrice =
    (minmax: string) => (e: ChangeEvent<HTMLInputElement>) => {
      if (minmax === "minPrice") {
        methods.setValue("minPrice", e.target.value);
      } else {
        methods.setValue("maxPrice", e.target.value);
      }
      methods.trigger("minPrice");
      methods.trigger("maxPrice");
    };

  // 수업 등록을 최종적으로 제출할 때 인자값에 문제가 있다면 발생하는 함수
  const onClickErrorSubmit = () => {
    alert("값이 입력되지 않거나 잘못입력된 값이 존재합니다.");
  };

  // 수업 등록을 최종적으로 제출할 때 발생하는 함수
  const onClickSubmit = async () => {
    router.push("/host/[menu]/[submenu]", `/host/dashboard/home`, {
      shallow: true,
    });
    console.log("methods.getValues()", methods.getValues());
    methods.unregister(["tagsInput", "secondCategory", "courseDate"]);
    let imgPrevCount = 0;
    let imgNewCount = 0;
    const imgTempArr: string[] = [];
    const fileTemp: any = [];
    // 서버에서 받아온 이미지 중에 삭제되지 않고 남아있는 갯수 찾기
    // TODO: 타입 스크립트를 잡으려고 임시로 처리한 방법(추후 수정 필요, 파일과 스트링이 공존하는 타입...)
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
        result.data?.uploadFile.forEach((el: string) => {
          imgTempArr.push(el);
        });
      }
    }
    methods.setValue("imageURLs", imgTempArr as any);
    console.log(methods.getValues());
    const { tagsInput, firstCategory, secondCategory, courseDate, ...data } =
      methods.getValues();
    console.log("data", data);
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
            category: methods.getValues("firstCategory"),
          },
        },
      });
      if (result.data.createCourse.id) {
        console.log("result", result);
        console.log("result.data.createCourse.id", result.data.createCourse.id);
        Promise.all(
          methods.getValues("courseDate").map(async (el: any) => {
            const result1 = await createCourseDateGQL({
              variables: {
                courseId: result.data.createCourse.id,
                date: el.date,
              },
            });
            if (result1.data.createCourseDate?.id) {
              console.log(
                "result1.data.createCourseDate?.id",
                result1.data.createCourseDate
              );
              Promise.all(
                el.schedules.map((el1: any) =>
                  createCourseTimeGQL({
                    variables: {
                      createCourseTimeInput: {
                        courseStartTime: el.date + " " + el1.courseStartTime,
                        courseEndTime: el.date + " " + el1.courseEndTime,
                        maxUsers: Number(el1.maxUsers),
                        recruitmentStartDate: el1.recruitmentStartDate,
                        recruitmentEndDate: el1.recruitmentEndDate,
                        courseDateId: result1.data.createCourseDate?.id,
                        courseId: result.data.createCourse.id,
                      },
                    },
                  })
                )
              ).then((res1) => {
                console.log("res1", res1);
              });
            }
          })
        ).then((res) => {
          // 모든 API가 끝나면
          methods.reset();
          alert("수업이 등록되었습니다.");
          props.onClickMenu("dashboard", "home")();
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
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
      methods={methods}
      onClickSubmit={onClickSubmit}
      onClickResetField={onClickResetField}
      onChangeDifficulty={onChangeDifficulty}
      onChangePrice={onChangePrice}
      onClickErrorSubmit={onClickErrorSubmit}
    />
  );
};
export default HostClassCreate;

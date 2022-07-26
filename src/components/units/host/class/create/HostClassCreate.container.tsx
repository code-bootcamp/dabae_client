import HostClassCreateUI from "./HostClassCreate.presenter";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { IHostClassCreateProps, useFormType } from "./HostClassCreate.types";
import {
  CREATE_COURSE,
  CREATE_COURSE_DATE,
  CREATE_SPECIFIC_SCHEDULE_INPUT,
  UPLOAD_FILE,
} from "./HostClassCreate.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { HostClassCreateSchema } from "./HostClassCreate.schema";
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
  const [createSpecificScheduleInputGQL] = useMutation(
    CREATE_SPECIFIC_SCHEDULE_INPUT
  );
  const onChangeFirstCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstCategory(e.target.value);
    methods.setValue("firstCategory", e.target.value);
    methods.trigger("firstCategory");
  };
  const onChangeSecondCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSecondCategory(e.target.value);
    methods.setValue("secondCategory", e.target.value);
    methods.trigger("secondCategory");
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
    methods.trigger("openingDate");
    methods.trigger("closingDate");
  };
  const onClickResetField = () => {
    methods.reset();
    setFirstCategory("");
    setSecondCategory("");
  };

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

  const onClickSubmit = async () => {
    console.log("methods.getValues()", methods.getValues());
    methods.unregister(["tagsInput", "secondCategory", "courseDate"]);

    let imgPrevCount = 0;
    let imgNewCount = 0;
    const imgTempArr: string[] = [];
    const fileTemp: any = [];
    // 서버에서 받아온 이미지 중에 삭제되지 않고 남아있는 갯수 찾기
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
                courseDay: el.date,
              },
            });
            if (result1.data.createCourseDate?.id) {
              console.log(
                "result1.data.createCourseDate?.id",
                result1.data.createCourseDate
              );
              Promise.all(
                el.schedules.map((el1: any) =>
                  createSpecificScheduleInputGQL({
                    variables: {
                      createSpecificScheduleInput: {
                        courseStartTime: el.date + " " + el1.courseStartTime,
                        courseEndTime: el.date + " " + el1.courseEndTime,
                        recruitmentStartDate: el1.recruitmentStartDate,
                        recruitmentEndDate: el1.recruitmentEndDate,
                        maxUsers: el1.maxPerson,
                        courseDateId: result1.data.createCourseDate?.id,
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
    />
  );
};
export default HostClassCreate;

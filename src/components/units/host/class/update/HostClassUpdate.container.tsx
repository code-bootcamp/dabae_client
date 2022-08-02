import HostClassUpdateUI from "./HostClassUpdate.presenter";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { IHostClassUpdateProps, useFormType } from "./HostClassUpdate.types";
import {
  UPDATE_COURSE,
  // UPDATE_COURSE_DATE,
  // UPDATE_COURSE_TIME,
  UPLOAD_FILE,
  FETCH_COURSE,
} from "./HostClassUpdate.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { HostClassUpdateSchema } from "./HostClassUpdate.schema";
import { useRouter } from "next/router";
import { Moment } from "moment";
import Spinner3 from "@/src/components/commons/spinner/Spinner3";
import { dateFormat4y2m2d } from "../../../../../function/date/format/dateFormat";
/**
 * Author : Sukyung Lee
 * FileName: HostClassUpdate.Container.tsx
 * Date: 2022-07-06 20:41:52
 * Description : 호스트 수업 수정 컨테이너
 */
const HostClassUpdate = (props: IHostClassUpdateProps) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [firstCategory, setFirstCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const [uploadFileGQL] = useMutation(UPLOAD_FILE);
  const [updateCourseGQL] = useMutation(UPDATE_COURSE);
  // const [updateCourseDateGQL] = useMutation(UPDATE_COURSE_DATE);
  // const [updateCourseTimeGQL] = useMutation(UPDATE_COURSE_TIME);

  // 수업 fetch graphQL 쿼리
  const { data: fetchCourseGQL } = useQuery(FETCH_COURSE, {
    variables: {
      courseId: router.query.id,
    },
  });

  console.log(fetchCourseGQL);

  const methods = useForm<useFormType>({
    resolver: yupResolver(HostClassUpdateSchema),
    mode: "onChange",
    defaultValues: {
      // materials: [],
      // imageURLs: [],
      // courseDate: [],
    },
  });

  // useEffect(() => {
  //   if (fetchCourseGQL?.fetchCourse.id) {
  //     methods.setValue("courseDate", fetchCourseGQL?.fetchCourse.courseDate);
  //   }
  // }, [fetchCourseGQL?.fetchCourse.id]);

  // 수업 첫번째 카테고리 변경하는 함수
  const onChangeFirstCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstCategory(e.target.value);
    methods.setValue("firstCategory", e.target.value);
    methods.trigger("firstCategory");
  };
  // 수업 두번째 카테고리 변경하는 함수
  const onChangeSecondCategory = (e: ChangeEvent<HTMLSelectElement>) => {
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
    let imgPrevCount = 0;
    let imgNewCount = 0;
    const imgTempArr: string[] = [];
    const fileTemp: any = [];
    // 서버에서 받아온 이미지 중에 삭제되지 않고 남아있는 갯수 찾기
    // TODO: 타입 스크립트를 잡으려고 임시로 처리한 방법(추후 수정 필요, 파일과 스트링이 공존하는 타입...)
    const imageURLsTemp: any = methods.getValues("imageURLs");
    if (methods.getValues("imageURLs")) {
      for (const el of imageURLsTemp) {
        if (el.id) {
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
    const tempArgs: any = {};
    // * 카테고리, 강의 시작, 강의 종료, 난이도, 최소가격, 최대가격, 우편번호, 주소, 상세주소
    // if (
    //   methods.getValues("firstCategory") &&
    //   methods.getValues("firstCategory") !==
    //     fetchCourseGQL?.fetchCourse.category.name
    // ) {
    //   tempArgs.category = {
    //     id: fetchCourseGQL?.fetchCourse.category.id,
    //     name: methods.getValues("firstCategory"),
    //   };
    // }
    if (
      methods.getValues("openingDate") &&
      methods.getValues("openingDate") !==
        dateFormat4y2m2d(fetchCourseGQL?.fetchCourse.openingDate)
    ) {
      tempArgs.openingDate = methods.getValues("openingDate");
    }
    if (
      methods.getValues("closingDate") &&
      methods.getValues("closingDate") !==
        dateFormat4y2m2d(fetchCourseGQL?.fetchCourse.closingDate)
    ) {
      tempArgs.closingDate = methods.getValues("closingDate");
    }
    if (
      methods.getValues("difficulty") &&
      methods.getValues("difficulty") !== fetchCourseGQL?.fetchCourse.difficulty
    ) {
      tempArgs.difficulty = methods.getValues("difficulty");
    }
    if (
      methods.getValues("minPrice") &&
      methods.getValues("minPrice") !== fetchCourseGQL?.fetchCourse.minPrice
    ) {
      tempArgs.minPrice = Number(methods.getValues("minPrice"));
    }
    if (
      methods.getValues("maxPrice") &&
      methods.getValues("maxPrice") !== fetchCourseGQL?.fetchCourse.maxPrice
    ) {
      tempArgs.maxPrice = Number(methods.getValues("maxPrice"));
    }
    if (
      methods.getValues("address") &&
      methods.getValues("address") !== fetchCourseGQL?.fetchCourse.address
    ) {
      tempArgs.address = methods.getValues("address");
    }
    if (
      methods.getValues("addressDetail") &&
      methods.getValues("addressDetail") !==
        fetchCourseGQL?.fetchCourse.addressDetail
    ) {
      tempArgs.addressDetail = methods.getValues("addressDetail");
    }
    if (
      methods.getValues("zipCode") &&
      methods.getValues("zipCode") !== fetchCourseGQL?.fetchCourse.zipCode
    ) {
      tempArgs.zipCode = methods.getValues("zipCode");
    }
    if (
      methods.getValues("lat") &&
      methods.getValues("lat") !== fetchCourseGQL?.fetchCourse.lat
    ) {
      tempArgs.lat = Number(methods.getValues("lat"));
    }
    if (
      methods.getValues("lng") &&
      methods.getValues("lng") !== fetchCourseGQL?.fetchCourse.lng
    ) {
      tempArgs.lng = Number(methods.getValues("lng"));
    }
    if (
      methods.getValues("name") &&
      methods.getValues("name") !== fetchCourseGQL?.fetchCourse.name
    ) {
      tempArgs.name = methods.getValues("name");
    }
    if (
      methods.getValues("contents") &&
      methods.getValues("contents") !== fetchCourseGQL?.fetchCourse.contents
    ) {
      tempArgs.contents = methods.getValues("contents");
    }
    // 준비물, 이미지는 잠시 보류
    console.log("tempArgs", tempArgs);
    try {
      const result = await updateCourseGQL({
        variables: {
          courseId: fetchCourseGQL?.fetchCourse.id,
          updateCourseInput: {
            ...tempArgs,
          },
        },
      });
      console.log(result);
      alert("수업이 등록되었습니다.");
      // if (result.data.updateCourse.id) {
      //   console.log("result", result);
      //   console.log("result.data.updateCourse.id", result.data.updateCourse.id);
      //   Promise.all(
      //     methods.getValues("courseDate").map(async (el: any) => {
      //       const result1 = await updateCourseDateGQL({
      //         variables: {
      //           courseId: result.data.updateCourse.id,
      //           date: el.date,
      //         },
      //       });
      //       if (result1.data.updateCourseDate?.id) {
      //         console.log(
      //           "result1.data.updateCourseDate?.id",
      //           result1.data.updateCourseDate
      //         );
      //         Promise.all(
      //           el.schedules.map((el1: any) =>
      //             updateCourseTimeGQL({
      //               variables: {
      //                 updateCourseTimeInput: {
      //                   courseStartTime: el.date + " " + el1.courseStartTime,
      //                   courseEndTime: el.date + " " + el1.courseEndTime,
      //                   maxUsers: Number(el1.maxUsers),
      //                   recruitmentStartDate: el1.recruitmentStartDate,
      //                   recruitmentEndDate: el1.recruitmentEndDate,
      //                   courseDateId: result1.data.updateCourseDate?.id,
      //                   courseId: result.data.updateCourse.id,
      //                 },
      //               },
      //             })
      //           )
      //         ).then((res1) => {
      //           console.log("res1", res1);
      //         });
      //       }
      //     })
      //   ).then((res) => {
      //     // 모든 API가 끝나면
      //     methods.reset();
      //     alert("수업이 등록되었습니다.");
      //     router.push("/host/dashboard/home");
      //   });
      // }
      // console.log(result);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      {fetchCourseGQL?.fetchCourse.id ? (
        <HostClassUpdateUI
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
          element={fetchCourseGQL.fetchCourse}
        />
      ) : (
        <Spinner3 />
      )}
    </>
  );
};
export default HostClassUpdate;

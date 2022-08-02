import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";
import { useForm } from "react-hook-form";
import HostClassListUI from "./HostClassList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_COURSES_BY_HOST_ID,
  HOW_MANY_COURSES_BY_HOST,
} from "./HostClassList.queries";
import { ChangeEvent } from "react";
import { Moment } from "moment";
import { IHostClassListProps } from "./HostClassList.types";

/**
 * Author : Sukyung Lee
 * FileName: HostClassList.container.tsx
 * Date: 2022-07-12 17:34:19
 * Description : 수업 조회하는 컴포넌트
 */
const HostClassList = (props: IHostClassListProps) => {
  const { getValues, setValue, watch, register } = useForm<any>({
    defaultValues: {
      searchDate: ["", ""],
      classStatus: "all",
    },
  });

  const { data: courseCount } = useQuery(HOW_MANY_COURSES_BY_HOST);
  const { data: coursesByHost, refetch: refetchCoursesByHost } = useQuery(
    FETCH_COURSES_BY_HOST_ID,
    {
      variables: {
        hostID: props.fetchHostUserData.id,
      },
    }
  );
  // 상품등록일, 판매시작일, 판매종료일 검색 옵션 변경하는 함수
  const onChangeSearchDate = (date: Moment, dateString: [string, string]) => {
    setValue("searchDate", [dateString[0], dateString[1]]);
  };

  // 모두, 클래스 운영중, 클래스 운영 종료 검색 옵션 변경하는 함수
  const onChangeClassStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("classStatus", e.target.value);
  };

  // 검색 옵션으로 날짜를 선택하는 버튼 함수
  const onClickSearchDate = (array: [string, number]) => () => {
    const date1 = new Date();
    const date2 = new Date();
    if (array[0] === "day") {
      date1.setDate(date1.getDate() - array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "week") {
      date1.setDate(date1.getDate() - array[1] * 7);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "month") {
      date1.setMonth(date1.getMonth() - array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "year") {
      date1.setFullYear(date1.getFullYear() - array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else {
      setValue("searchDate", [
        dateFormat4y2m2d("1900-01-01"),
        dateFormat4y2m2d("9999-12-31"),
      ]);
    }
    watch("searchDate");
  };
  //  호스트가 등록한 수업을 검색하는 API
  const onClickSubmitSearch = () => {};

  return (
    <HostClassListUI
      getValues={getValues}
      onChangeSearchDate={onChangeSearchDate}
      onClickSearchDate={onClickSearchDate}
      onChangeClassStatus={onChangeClassStatus}
      register={register}
      onClickSubmitSearch={onClickSubmitSearch}
      onClickMenu={props.onClickMenu}
      courseCount={courseCount?.howManyCoursesByHost}
      coursesByHost={coursesByHost}
      refetchCoursesByHost={refetchCoursesByHost}
    />
  );
};
export default HostClassList;

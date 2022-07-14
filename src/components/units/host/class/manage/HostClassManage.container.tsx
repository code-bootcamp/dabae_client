import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";
import { useForm } from "react-hook-form";
import HostClassManageUI from "./HostClassManage.presenter";

/**
 * Author : Sukyung Lee
 * FileName: HostClassManage.container.tsx
 * Date: 2022-07-12 17:34:19
 * Description :
 */
const HostClassManage = () => {
  const { getValues, setValue, watch, register } = useForm<any>({
    defaultValues: {
      searchDate: ["", ""],
      classStatus: "all",
    },
  });

  const onChangeSearchDate = (date: any, dateString: string) => {
    setValue("searchDate", [dateString[0], dateString[1]]);
  };
  const onChangeClassStatus = (e: any) => {
    setValue("classStatus", e.target.value);
  };
  const onClickSearchDate = (array: any) => () => {
    const date1 = new Date();
    const date2 = new Date();
    if (array[0] === "day") {
      date1.setDate(date1.getDate() + array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "week") {
      date1.setDate(date1.getDate() + array[1] * 7);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "month") {
      date1.setMonth(date1.getMonth() + array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "year") {
      date1.setFullYear(date1.getFullYear() + array[1]);
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
  return (
    <HostClassManageUI
      getValues={getValues}
      onChangeSearchDate={onChangeSearchDate}
      onClickSearchDate={onClickSearchDate}
      onChangeClassStatus={onChangeClassStatus}
      register={register}
    />
  );
};
export default HostClassManage;

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
  const { getValues, setValue, watch } = useForm({
    defaultValues: {
      searchDate: ["", ""],
    },
  });

  const onChangeSearchDate = (date: any, dateString: string) => {
    setValue("searchDate", [dateString[0], dateString[1]]);
  };
  const onClickSearchDate = (array: any) => () => {
    const date1 = new Date();
    const date2 = new Date();
    if (array[0] === "day") {
      date2.setDate(date2.getDate() + array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "week") {
      date2.setDate(date2.getDate() + array[1] * 7);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "month") {
      date2.setMonth(date2.getMonth() + array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else if (array[0] === "year") {
      date2.setFullYear(date2.getFullYear() + array[1]);
      setValue("searchDate", [
        dateFormat4y2m2d(date1),
        dateFormat4y2m2d(date2),
      ]);
    } else {
      setValue("searchDate", [
        dateFormat4y2m2d(new Date()),
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
    />
  );
};
export default HostClassManage;

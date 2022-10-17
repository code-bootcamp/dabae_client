import { getDate } from "@/src/commons/libraries/utils";
import { useEffect, useState } from "react";
import PaymentPresenter from "./Payment.presenter";
import { IPaymentContainer } from "./Payment.types";

export default function PaymentContainer(props: IPaymentContainer) {
  const [date, setDate] = useState(new Date());
  const [calendarMark, setCalendarMark] = useState<string[]>([]);
  const [courseTimes, setCourseTimes] = useState([]);
  const [personCount, setPersonCount] = useState<number>(1);

  useEffect(() => {
    const dateArr = props.data?.fetchCourse.courseDate.map((el: any) => {
      return getDate(el.date);
    });
    setCalendarMark(dateArr);
  }, [props.data?.fetchCourse.courseDate]);

  const onClickPaymentMove = () => {
    props.setCurrentPrice((prev: number) => prev * personCount);
    props.setCurrentUsers(personCount);
    props.setPage(2);
  };

  const increaseCount = () => {
    setPersonCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setPersonCount((prev) => prev - 1);
  };

  const onChangeCalendar = (value: Date) => {
    setDate(value);
    props.data?.fetchCourse.courseDate.forEach((el: any) => {
      setCourseTimes(
        getDate(el.date) === getDate(String(value)) ? el.courseTime : []
      );
    });
  };

  const onClickPaymentDetail = (el: any) => () => {
    props.setCourseTime(el);
    props.setCurrentPrice(
      props.data?.fetchCourse.maxPrice -
        ((props.data?.fetchCourse.maxPrice - props.data?.fetchCourse.minPrice) /
          el.maxUsers) *
          el.currentUsers
    );
  };

  return (
    <PaymentPresenter
      data={props.data}
      personCount={personCount}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
      onClickPaymentMove={onClickPaymentMove}
      onChangeCalendar={onChangeCalendar}
      date={date}
      setDate={setDate}
      calendarMark={calendarMark}
      courseTime={props.courseTime}
      courseTimes={courseTimes}
      currentPrice={props.currentPrice}
      onClickPaymentDetail={onClickPaymentDetail}
    />
  );
}

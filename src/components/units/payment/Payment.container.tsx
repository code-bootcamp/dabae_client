import { getDate } from "@/src/commons/libraries/utils";
import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import PaymentPresenter from "./Payment.presenter";
import { FETCH_COURSE } from "./Payment.queries";

export default function PaymentContainer() {
  const router: NextRouter = useRouter();

  const [date, setDate] = useState(new Date());
  const [calendarMark, setCalendarMark] = useState([]);

  const [toggle, setToggle] = useState<boolean>(false);
  const [personCount, setPersonCount] = useState<number>(1);

  const { data } = useQuery(FETCH_COURSE, {
    variables: {
      courseId: router.query.courseId,
    },
  });

  useEffect(() => {
    const dateArr = data?.fetchCourse.courseDay.map((el: any) => {
      return getDate(el.courseDay);
    });
    setCalendarMark(dateArr);
  }, [data?.fetchCourse.courseDay]);

  const onClickPaymentMove = () => {
    router.push(`/products/${router.query.courseId}/payment`);
  };

  const increaseCount = () => {
    setPersonCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setPersonCount((prev) => prev - 1);
  };

  const onChangeCalendar = (value: Date) => {
    setDate(value);
    // const schedule = data?.fetchCourse.courseDay.map((el: any) => {
    //   if (getDate(el.courseDay) === getDate(String(value))) {
    //     return el.specificSchedule;
    //   }
    // });
  };

  console.log(date);

  return (
    <PaymentPresenter
      toggle={toggle}
      personCount={personCount}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
      setToggle={setToggle}
      onClickPaymentMove={onClickPaymentMove}
      onChangeCalendar={onChangeCalendar}
      date={date}
      setDate={setDate}
      calendarMark={calendarMark}
    />
  );
}

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
// import CalendarDayItem from "./CalendarDayItem";
// import CalendarDayItem from '@/src/components/commons/calendar/CalendarDayItem';

const CustomCalendar = (props: any) => {
  const todayDate = new Date();
  const [, setRenderToggle] = useState(false);
  const [calendarDays, setCalendarDays] = useState<any>({});
  const [calendarYear, setCalendarYear] = useState(
    Number(todayDate.getFullYear())
  );
  const [calendarMonth, setCalendarMonth] = useState(
    Number(todayDate.getMonth())
  );
  const forceRender = () => {
    setRenderToggle((prev) => !prev);
  };
  const moveLeftDate = () => {
    if (calendarMonth === 0) {
      setCalendarYear(calendarYear - 1);
      setCalendarMonth(11);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };

  const moveRightDate = () => {
    if (calendarMonth === 11) {
      setCalendarYear(calendarYear + 1);
      setCalendarMonth(0);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  const dateString = (year: number, month: number, day: number) => {
    // 13개월이 되면 1월로 만들고 1년을 더해준다.
    // 출력 형식은 2000-12-31 과 같이 반환
    if (month === 13) {
      year = year + 1;
      month = 1;
    } else if (month === 0) {
      year = year - 1;
      month = 12;
    }
    return (
      year.toString() +
      "-" +
      ("0" + month).slice(-2) +
      "-" +
      ("0" + day).slice(-2)
    );
  };

  useEffect(() => {
    const baseDate = new Date(calendarYear, calendarMonth, 1);
    const baseDateStartDayW = baseDate.getDay(); // 0-6
    const baseDateEndDay = new Date(
      baseDate.getFullYear(),
      baseDate.getMonth() + 1,
      0
    ).getDate(); // 28-31
    const prevDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), 0);
    const prevDateEndDay = prevDate.getDate(); // 28-31
    const prevEndDayW = prevDate.getDay(); // 0-6
    const nextDateStartDate = new Date(
      baseDate.getFullYear(),
      baseDate.getMonth() + 1,
      1
    );
    const nextDateStartDayW = nextDateStartDate.getDay(); // 0-6

    setCalendarDays({}); // 월이나 연도가 변경될때 마다 초기화
    // [1]시작일이 일요일일 경우(저번달은 보여줄 필요가 없다.)
    const temp = {} as any;
    if (baseDateStartDayW === 0) {
      // 이번달
      for (let i = 1; i <= baseDateEndDay; i++) {
        temp[dateString(calendarYear, calendarMonth + 1, i)] = {
          day: i,
          dayW: (i - 1) % 7,
          isThisMonth: false,
        };
      }

      // 다음달(일요일로 시작하면 제외)
      if (nextDateStartDayW !== 0) {
        for (let i = 1; i <= 7 - nextDateStartDayW; i++) {
          temp[dateString(calendarYear, calendarMonth + 2, i)] = {
            day: i,
            dayW: nextDateStartDayW + i - 1,
            isThisMonth: true,
          };
        }
      }
    }
    // [2]시작일이 일요일이 아닌 경우
    else {
      // 저번달
      for (
        let i = prevDateEndDay - prevEndDayW, j = 0;
        i <= prevDateEndDay;
        i++, j++
      ) {
        temp[dateString(calendarYear, calendarMonth, i)] = {
          day: i,
          dayW: j,
          isThisMonth: false,
        };
      }
      // 이번달
      for (let i = 1; i <= baseDateEndDay; i++) {
        temp[dateString(calendarYear, calendarMonth + 1, i)] = {
          day: i,
          dayW: (i - 1 + baseDateStartDayW) % 7,
          isThisMonth: true,
        };
      }
      // 다음달
      if (nextDateStartDayW !== 0) {
        for (let i = 1; i <= 7 - nextDateStartDayW; i++) {
          temp[dateString(calendarYear, calendarMonth + 2, i)] = {
            day: i,
            dayW: nextDateStartDayW + i - 1,
            isThisMonth: false,
          };
        }
      }
    }
    setCalendarDays(Object.assign({}, temp));
  }, [calendarMonth]);

  return (
    <>
      <Container>
        {/* 달력 상단 */}
        <Header>
          <LeftButton
            onClick={() => {
              moveLeftDate();
            }}
            type="button"
          >
            <img src="/images/host/left_icon.svg" />
          </LeftButton>
          {calendarYear}년 {calendarMonth + 1}월
          <RightButton
            onClick={() => {
              moveRightDate();
            }}
            type="button"
          >
            <img src="/images/host/right_icon.svg" />
          </RightButton>
        </Header>
        {/* 달력 메인 */}
        <Main>
          <DayHeader color={"red"}> 일 </DayHeader>
          <DayHeader> 월 </DayHeader>
          <DayHeader> 화 </DayHeader>
          <DayHeader> 수 </DayHeader>
          <DayHeader> 목 </DayHeader>
          <DayHeader> 금 </DayHeader>
          <DayHeader color={"blue"}> 토 </DayHeader>

          {Object.entries(calendarDays)?.map((el: any) =>
            // el[0]는 date, el[1]는 day,dayW, isThisMonth
            // HostClassCreate.presenter.tsx에서 넣어준다.
            props.calendarDayItem(el, forceRender)
          )}
        </Main>
      </Container>
    </>
  );
};

export default CustomCalendar;
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;
const Main = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Header = styled.header`
  width: 100%;
  height: 60px;
  line-height: 40px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    img {
      height: 20px;
    }
  }
`;
const LeftButton = styled.button`
  margin-right: 20px;
`;
const RightButton = styled.button`
  margin-left: 20px;
`;
// 월화수목금토일 스타일
const DayHeader = styled.div`
  text-align: center;
  height: 32px;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "#333333"};
`;

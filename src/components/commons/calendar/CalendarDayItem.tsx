import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type CalendarDayItemType = {
  color?: string;
  opacity?: string;
  day?: string;
  content?: any;
  id?: string;
  children?: ReactNode;
  date?: string;
  data?: any;
  dayW?: number;
};

const CalendarDayItem = (props: CalendarDayItemType) => {
  console.log(props.data);
  return (
    <Container opacity={props.opacity}>
      <ColumnDiv>
        {/* 일 수 */}
        {<DaySpan dayW={props.dayW}>{props.day} 일</DaySpan>}
        {/* {props.data?.map((i: any, index: number) => (
          <div key={index}> 123 </div>
        ))} */}
        <div> {props.data?.id} </div>
      </ColumnDiv>
    </Container>
  );
};

export default CalendarDayItem;

const Container = styled.div<{ opacity: string | undefined }>`
  width: 100%;
  height: 100px;
  padding: 4px;
  opacity: ${(props) => (props.opacity ? "0.6" : 1)};
  display: grid;
  box-shadow: 0px 0px 1px 1px #32c2b9 inset;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-flow: nowrap column;
  gap: 2px;
`;
const DaySpan = styled.span<{ dayW?: number }>`
  font-size: 12px;
  color: ${(props) =>
    (props.dayW === 0 && "red") || (props.dayW === 6 && "blue") || "#333333"};
`;
// const TodoTask = styled.button`
//   width: 100%;
//   height: 20px;
//   line-height: 20px;
//   background: #aeaeae;
//   text-align: left;
//   &:hover {
//     background: white;
//   }
// `;

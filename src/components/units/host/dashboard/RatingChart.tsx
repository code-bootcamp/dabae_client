import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IRatingChartProps {
  ratingData: number[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

const RatingChart = (props: IRatingChartProps) => {
  const avg =
    Math.round(
      ((props.ratingData[0] * 1 +
        props.ratingData[1] * 2 +
        props.ratingData[2] * 3 +
        props.ratingData[3] * 4 +
        props.ratingData[4] * 5) /
        props.ratingData.reduce((acc, cur) => (acc = acc + cur), 0)) *
        100
    ) / 100;
  const chartRef = useRef<any>(null);
  const options = {
    responsive: true, // 반응형으로 할지 말지
    // plugins: {
    //   legend: {
    //     position: "chartArea" as const, // 상단의 설명의 위치를 뜻한다.
    //   },
    //   title: {
    //     display: true, // 최상단 그래프의 제목을 보여줄지 말지
    //     text: "평점", // 최상단 그래프의 제목
    //     textAlign: "top",
    //   },
    // },
  };

  const data = {
    // labels: ["Red", "Blue"],
    datasets: [
      {
        // label: "# of Votes",
        backgroundColor: [
          "rgba(104, 85, 228, 0.2)",
          "rgba(219, 228, 234, 0.2)",
        ],
        borderColor: ["rgba(104, 85, 228, 1)", "rgba(219, 228, 234, 1)"],
        offset: 5,
        borderWidth: 2,
        data: [avg, 5 - avg],
        hoverBackgroundColor: [
          "rgba(104, 85, 228, 1)",
          "rgba(219, 228, 234, 1)",
        ],
        hoverBorderColor: ["rgba(104, 85, 228, 1)", "rgba(219, 228, 234, 1)"],
        hoverOffset: 10, // 밖으로 벗어나는거
      },
    ],
  };

  useEffect(() => {
    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return (
    <Container>
      <WrapperHeader> 평점 </WrapperHeader>
      <RowDiv>
        <Wrapper1>
          <Doughnut options={options} data={data} ref={chartRef} />
          <ColumnDiv>
            <RatingSpan> {avg} </RatingSpan>
            <RatingCountSpan>
              {props.ratingData.reduce((acc, cur) => (acc = acc + cur), 0)}
            </RatingCountSpan>
          </ColumnDiv>
        </Wrapper1>
        <Wrapper2>
          <div> 1점 : {props.ratingData[0]} </div>
          <div> 2점 : {props.ratingData[1]} </div>
          <div> 3점 : {props.ratingData[2]} </div>
          <div> 4점 : {props.ratingData[3]} </div>
          <div> 5점 : {props.ratingData[4]} </div>
        </Wrapper2>
      </RowDiv>
    </Container>
  );
};
export default RatingChart;

const Container = styled.section`
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
`;
const RowDiv = styled.div`
  ${theme.flex.row._.center};
  gap: 20px;
`;
const WrapperHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Wrapper1 = styled.div`
  position: relative;
  max-width: 240px;
`;

const Wrapper2 = styled.div`
  & > div:hover {
    color: #6855e4;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ColumnDiv = styled.div`
  position: absolute;
  top: calc(50% + 10px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  line-height: 20px;
`;
const RatingSpan = styled.span`
  color: #6855e4;
  font-size: 24px;
  font-weight: 600;
`;
const RatingCountSpan = styled.span`
  color: #aeaeae;
  font-size: 12px;
`;

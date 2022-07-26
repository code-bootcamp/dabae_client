import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "@emotion/styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IClientCountChartProps {
  clientCountData?: number[];
}

const ClientCountChart = (props: IClientCountChartProps) => {
  const chartRef = useRef<any>(null);
  const options = {
    responsive: true, // 반응형으로 할지 말지
    plugins: {
      legend: {
        position: "top" as const, // 상단의 설명의 위치를 뜻한다.
      },
    },
  };

  const data = {
    // 최근 6개월을 보여주기 위해서
    labels: [
      new Date().getMonth() - 5 > 0
        ? new Date().getMonth() - 5
        : 12 - (new Date().getMonth() - 5),
      new Date().getMonth() - 4 > 0
        ? new Date().getMonth() - 4
        : 12 - (new Date().getMonth() - 4),
      new Date().getMonth() - 3 > 0
        ? new Date().getMonth() - 3
        : 12 - (new Date().getMonth() - 3),
      new Date().getMonth() - 2 > 0
        ? new Date().getMonth() - 2
        : 12 - (new Date().getMonth() - 2),
      new Date().getMonth() - 1 > 0
        ? new Date().getMonth() - 1
        : 12 - (new Date().getMonth() - 1),
      new Date().getMonth() > 0
        ? new Date().getMonth()
        : 12 - new Date().getMonth(),
    ],
    datasets: [
      {
        borderColor: "rgb(54, 162, 235)", // 그래프 선의 색깔
        borderWidth: 2, // 그래프 선의 두께
        data: props.clientCountData, // data 배열로
        label: "수강생 수", // 상단에 표시되는 그래프의 이름
        hoverBackgroundColor: "black",
        tension: 0.4,
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
      <WrapperHeader> 그래프 </WrapperHeader>
      <Line options={options} data={data} ref={chartRef} />
    </Container>
  );
};
export default ClientCountChart;

const Container = styled.div`
  display: flex;
  flex-flow: nowrap column;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 10px;
  max-height: 280px;
  width: 480px;
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

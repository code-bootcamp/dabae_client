import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "@emotion/styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "정산 내역",
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
  },
};

const labels = [
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
];

export const data = {
  labels,
  datasets: [
    {
      label: "정산 금액(단위: 10000원)",
      data: [120, 190, 300, 50, 200, 300],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

interface ITransactionChartProps {}
const TransactionChart = (props: ITransactionChartProps) => {
  const chartRef = useRef<any>(null);
  return (
    <Container>
      <WrapperHeader> 그래프 </WrapperHeader>
      <Bar options={options} data={data} ref={chartRef} />;
    </Container>
  );
};
export default TransactionChart;

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

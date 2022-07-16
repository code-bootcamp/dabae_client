// import theme from "@/styles/theme";
import theme from "@/styles/theme";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const fadeOutAnimation = keyframes`
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
`;
export const Container = styled.section`
  scroll-behavior: smooth;
  animation: ${fadeOutAnimation} 1s linear;
  padding: 10px;
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;

  label,
  input,
  select {
    cursor: pointer;
  }
`;
export const SearchHeader = styled.div`
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
  background-color: #fff;
  padding: 10px 10px;
`;
export const SearchDateButton = styled.button`
  height: 30px;
  outline: 2px solid #32c2b9;
  color: #32c2b9;
  padding: 2px 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const BorderDiv = styled.div`
  width: 100%;
  outline: solid ${theme.backgroundColors.border} 1px;
  font-size: 16px;
  font-weight: 600;
`;
export const SearchSelect = styled.select`
  height: 30px;
  padding: 0px 4px;
`;
export const RangePickerStyle = styled(RangePicker)``;

export const TransactionHeaderDiv = styled.div`
  display: grid;
  height: 40px;
  align-items: center;
  background-color: #fff;
  grid-template-columns: 60px calc(100% - 300px) 120px 120px;
  font-size: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 60px calc(100% - 200px) 80px 60px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 60px calc(100% - 240px) 120px 60px;
  }
`;
export const RowCenterHeaderDiv1 = styled.div`
  text-align: center;
`;
export const RowCenterHeaderDiv2 = styled.div`
  text-align: center;
`;
export const RowCenterHeaderDiv3 = styled.div`
  text-align: center;
`;
export const RowCenterHeaderDiv4 = styled.div`
  text-align: center;
`;
export const TransactionBodyDiv = styled.div`
  display: grid;
  font-size: 16px;
  font-weight: 600;
  height: 80px;
  grid-template-columns: 60px calc(100% - 300px) 120px 120px;
  background-color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: 60px calc(100% - 200px) 80px 60px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 60px calc(100% - 240px) 120px 60px;
    font-size: 12px;
    height: 60px;
  }
`;
export const RowCenterBodyDiv1 = styled.div`
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ResponsiveDiv = styled.div`
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
`;
export const RowCenterBodyDiv2 = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RowCenterBodyDiv3 = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: #666666;
  @media (max-width: 1200px) {
    font-size: 10px;
  }
`;
export const RowCenterBodyDiv4 = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: #666666;
  @media (max-width: 1200px) {
    font-size: 10px;
  }
`;
export const RowCenterBodyDiv5 = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RowCenterBodyDiv6 = styled.div`
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
`;
export const Status = styled.div``;
export const Button = styled.button<{ status?: string }>`
  border-radius: 4px;
  padding: 2px;
  ${(props) =>
    props.status === "red" &&
    css`
      background-color: #fbeff2;
      color: #fd748d;
    `}

  ${(props) =>
    props.status === "blue" &&
    css`
      background-color: #e1e5f6;
      color: #7c93de;
    `}

    ${(props) =>
    props.status === "green" &&
    css`
      background-color: #cce4e1;
      color: #70c7b9;
    `}
`;
export const PaginationDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
export const SearchSelect = styled.select`
  height: 30px;
  padding: 0px 4px;
`;
export const SearchDateButton = styled.button`
  height: 30px;
  outline: 2px solid #32c2b9;
  color: #32c2b9;
  padding: 2px 10px;
  border-radius: 10px;
`;

export const RowCenterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BorderDiv = styled.div`
  width: 100%;
  border: solid ${theme.backgroundColors.border} 1px;
  padding: 2px 0px;
  font-size: 16px;
  font-weight: 600;
`;
export const RowCenterProgressStatusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;

  @media (max-width: 768px) {
    width: 100px;
    padding: 2px 0px;
  }
`;

export const RowCenterButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100px;
    padding: 2px 0px;
  }
`;
export const RowCenterOperationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
`;
export const OperatingDate = styled.div`
  display: flex;
  flex-flow: nowrap column;
  min-width: 120px;
  align-items: center;

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
  }
`;
export const InputClassTitle = styled.div`
  width: 120px;
  height: 30px;
  outline: solid 1px #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputSearch = styled.input``;

export const RangePickerStyle = styled(RangePicker)``;

//  /////////////////////////////////////

export const ManageHeaderDiv = styled.div`
  color: #32c2b9;
  display: grid;
  height: 40px;
  align-items: center;
  background-color: #fff;
  grid-template-columns: 60px calc(100% - 380px) 200px 120px;
  font-size: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 60px calc(100% - 200px) 80px 60px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 60px calc(100% - 240px) 120px 60px;
  }
`;

export const RowCenterHeaderDiv1 = styled.div`
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;

export const RowCenterHeaderDiv2 = styled.div`
  min-width: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;
export const RowCenterHeaderDiv3 = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 1200px) {
    min-width: 100px;
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;
export const RowCenterHeaderDiv4 = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;

export const ManageBodyDiv = styled.div`
  display: grid;
  font-size: 16px;
  font-weight: 600;
  height: 80px;
  grid-template-columns: 60px calc(100% - 380px) 200px 120px;
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
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;

export const RowCenterBodyDiv2 = styled.div`
  min-width: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;
export const RowCenterBodyDiv3 = styled.div`
  min-width: 200px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (max-width: 1200px) {
    min-width: 100px;
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;
export const RowCenterBodyDiv4 = styled.div`
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

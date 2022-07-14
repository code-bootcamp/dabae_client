// import theme from "@/styles/theme";
import theme from "@/styles/theme";
import { keyframes } from "@emotion/react";
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
  padding: 0px 10px;
  scroll-behavior: smooth;
  animation: ${fadeOutAnimation} 1s linear;

  @media (max-width: 768px) {
    padding: 0px;
    font-size: 12px;
  }

  label,
  input,
  select {
    cursor: pointer;
  }
`;
export const SearchHeader = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
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

export const Button = styled.button`
  border: 1px solid #32c2b9;
  padding: 0px 4px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 50px;
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
  height: 40px;
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 564px) {
    font-size: 14px;
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
  display: flex;
  flex-flow: nowrap row;
  min-height: 60px;

  @media (max-width: 564px) {
    font-size: 14px;
  }

  @media (max-width: 408px) {
    font-size: 12px;
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
  min-width: 60px;
  height: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: nowrap column-reverse;
  font-size: 14px;

  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

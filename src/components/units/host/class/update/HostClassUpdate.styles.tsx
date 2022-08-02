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
export const MainContent = styled.div`
  animation: ${fadeOutAnimation} 1s linear;
  background-color: #eceef2;
  padding-bottom: 60px;
`;
export const Wrapper = styled.div`
  scroll-behavior: smooth;
  gap: 10px;
  ${theme.flex.row._};
  height: 100%;
  padding: 10px;
  @media screen and (max-width: ${theme.deviceSizes.laptop}) {
    ${theme.flex.column};
  }
`;

export const Wrapper1 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
`;

export const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
`;
export const SelectTitle = styled.div`
  ${theme.fontSizes.lg};
  font-weight: 800;
`;
export const BlockSelect = styled.select`
  background-color: white;
  padding: 10px 10px;
  position: relative;
  min-width: 200px;
  background-color: #fff;
  border: 1px solid #acebe7;
  border-radius: 10px;

  option {
    position: absolute;
    left: 0;
  }
`;
export const BorderDiv = styled.div`
  width: 100%;
  height: 100%;
  /* outline: solid ${theme.backgroundColors.border} 1px; */
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;
export const FooterMenu = styled.div`
  height: 60px;
  width: calc(100% - 240px);
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  padding: 10px;

  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;

export const PageLocationDiv = styled.div`
  ${theme.fontSizes.subTitle};
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  ${theme.fontSizes.base};
`;
export const Button = styled.button<{ isActive?: boolean }>`
  border-radius: 50%;
  width: 30px;
  aspect-ratio: 1;
  color: ${(props) => (props.isActive ? "white" : "black")};
  background-color: #32c2b9;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: #aeaeae;
  }
`;
export const RangePickerStyle = styled(RangePicker)`
  border: 1px solid #acebe7;
  border-radius: 10px;
`;
export const ErrorDiv = styled.div`
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

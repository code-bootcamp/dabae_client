import theme from "@/styles/theme";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  ${theme.flex.row._};
  @media screen and (max-width: ${theme.deviceSizes.laptop}) {
    ${theme.flex.column}
  }
`;

export const Wrapper1 = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #d9d9d9;
`;

export const Wrapper2 = styled.div`
  width: 100%;
  padding: 10px;
  @media screen and (max-width: ${theme.deviceSizes.laptop}) {
    background-color: #d9d9d9;
  }
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

  option {
    position: absolute;
    left: 0;
  }
`;
export const BorderDiv = styled.div`
  width: 100%;
  outline: solid ${theme.backgroundColors.border} 1px;
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
  outline: solid ${theme.backgroundColors.border} 1px;
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
const fadeOutAnimation = keyframes`
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
`;
export const MainContent = styled.div`
  ${theme.flex.column.between};
  padding-bottom: 60px;
  animation: ${fadeOutAnimation} 1s linear;

  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
  }
`;

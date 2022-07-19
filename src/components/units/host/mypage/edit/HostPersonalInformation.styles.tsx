// import theme from "@/styles/theme";
import theme from "@/styles/theme";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

  @media (max-width: 768px) {
    padding: 0px;
    font-size: 12px;
  }
`;
export const BorderDiv = styled.div`
  width: 100%;
  outline: solid ${theme.backgroundColors.border} 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;

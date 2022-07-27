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
  label,
  input,
  select {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const BorderDiv = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
`;
export const GenderBox = styled.div`
  width: 50%;
  padding-right: 10px;
  :nth-last-child() {
    padding-right: 0;
    padding-left: 10px;
  }
`;
export const GenderLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
  color: #32c2b9;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #32c2b9;
    background-color: #32c2b9;
    color: #fff;
  }
  color: ${(props: { active: boolean }) => (props.active ? "#fff" : "#32c2b9")};
  background-color: ${(props: { active: boolean }) =>
    props.active ? "#32c2b9" : "#fff"};
`;
export const ErrorDiv = styled.div`
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

import { css, keyframes } from "@emotion/react";
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
  background-color: #eceef2;
  height: 100%;

  label,
  input,
  select {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`;
export const Container1 = styled.section`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #fff;
`;
const ItemDiv = css`
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  max-width: 180px;
  aspect-ratio: 1;
  display: flex;
  flex-flow: nowrap column;
  color: #333;
`;
export const ItemDiv1 = styled.div`
  ${ItemDiv};
  background-color: #e9e3fd;
`;
export const ItemDiv2 = styled.div`
  ${ItemDiv};
  background-color: #fff5eb;
`;
export const ItemDiv3 = styled.div`
  ${ItemDiv};
  background-color: #e8fbea;
`;
export const ItemDiv4 = styled.div`
  ${ItemDiv};
  background-color: #c6d9ff;
`;

export const Container2 = styled.section``;
export const Container3 = styled.section``;

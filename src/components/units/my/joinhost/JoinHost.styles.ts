import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  background-image: url("/images/host_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const Inner = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HostTitle = styled.h2`
  margin: 0;
  ${theme.fontSizes.mainTitle};
  font-weight: bolder;
  line-height: 1.3;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const HostButton = styled.button`
  background-color: #32c2b9;
  border: 0;
  color: #fff;
  ${theme.fontSizes.base};
  font-weight: bolder;
  padding: 20px;
  border-radius: 15px;
`;

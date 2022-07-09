import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.footer`
  margin: auto;
  width: 100%;
  border-top: 2px solid #32c2b9;
  background-color: #ffffff;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding-bottom: 100px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(221, 221, 221);
  margin: 30px 0;
`;

export const Title = styled.h2`
  ${theme.fontSizes.subTitle};
  font-weight: bold;
  color: rgb(51, 51, 51);
  margin-bottom: 20px;
`;

export const InfoText = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: rgb(102, 102, 102);
  ${theme.fontSizes.base};
  font-weight: 500;
  :last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    ${theme.fontSizes.small};
  }
`;

export const CompanyText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(153, 153, 153);
  ${theme.fontSizes.small};
  font-weight: 500;
  :last-child {
    margin-bottom: 0;
  }
`;

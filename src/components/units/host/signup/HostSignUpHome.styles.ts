import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 350px;
  margin: 0px auto;
  padding: 200px 0 200px 0;

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  color: #32c2b9;
  outline: 0;
  border: 2px solid #acebe7;
  border-radius: 10px;
  ${theme.fontSizes.base}
  font-weight: bolder;
  font-size: 16px;
  :hover {
    background-color: #32c2b9;
    color: #ffffff;
  }
`;

export const Question = styled.div`
  font-size: 14px;
  color: #999;
`;

export const Login = styled.div`
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  color: #999;
  text-decoration: underline;
`;

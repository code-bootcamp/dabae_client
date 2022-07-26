import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding: 40px 0 300px 0;

  @media (max-width: 768px) {
    padding: 20px 0 80px 0;
  }
`;

export const Title = styled.div`
  font-size: 28px;
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

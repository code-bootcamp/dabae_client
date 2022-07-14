import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding: 40px 0;
`;

export const Title = styled.div`
  font-size: 28px;
`;

export const Img = styled.img`
  width: 40px;
  aspect-ratio: 1;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

export const Button01 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 10px;
  /* box-shadow: 0px 1px 1px 1px #e4e4e4; */
  background-color: #fee500;
  position: relative;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
`;

export const Button02 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  border-radius: 10px;
  background-color: #03c75a;
  color: #fff;
  position: relative;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
`;

export const Button03 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  position: relative;
  font-size: 16px;
  ${theme.fontSizes.base}
  font-weight: 400;
`;

export const Button04 = styled.button`
  width: 100%;
  padding: 8px 20px;
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
  color: #333;
`;

export const Login = styled.div`
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  text-decoration: underline;
`;

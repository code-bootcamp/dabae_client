import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 24px;
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
  border-radius: 15px;
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
  border-radius: 15px;
  background-color: #03c75a;
  position: relative;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
`;

export const Button03 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 15px;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  position: relative; // 앱솔루트는 부모요소 신경 안 쓰고 화면 전체에서 잡아주는 것, 릴레이티브는 부모요소에 맞춰 줄어드는 것
  font-size: 16px;
  ${theme.fontSizes.base}
  font-weight: 400;
`;

export const Button04 = styled.button`
  width: 100%;
  padding: 8px 20px;
  color: #32c2b9;
  /* color: #000; */
  outline: 0;
  border: 2px solid #acebe7;
  border-radius: 15px;
  ${theme.fontSizes.base}
  font-weight: bolder;
  font-size: 16px;
  :hover {
    background-color: #32c2b9;
    color: #ffffff;
  }
`;

export const Button05 = styled.button`
  width: 100%;
  padding: 8px 20px;
  outline: 0;
  color: #000;
  border: 1px solid #acebe7;
  border-radius: 15px;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
  :hover {
    background-color: #32c2b9;
    color: #ffffff;
  }
`;

export const Question = styled.div`
  font-size: 16px;
  color: #6e6a6a;
`;

export const Login = styled.div`
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  color: #6e6a6a;
  text-decoration: underline;
`;

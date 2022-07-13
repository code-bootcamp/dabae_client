import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Body = styled.div`
  border: 1px solid #9bd491;
  border-radius: 10px;
  background-color: #fbfff5;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 600px;
  margin: 0px auto;
`;

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
`;

export const Title = styled.div`
  font-size: 32px;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const PasswordFind = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: -12px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  background-color: #32c2b9;
  color: #fff;
  border: 1px solid #acebe7;
  border-radius: 15px;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;

  :disabled {
    cursor: default;
    background-color: #fff;
    color: #000;
  }
`;

export const Button2 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 15px;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  background-color: #03c75a;
  position: relative;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
`;

export const Button3 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  border-radius: 15px;
  background-color: #fee500;
  position: relative;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
`;

export const Button4 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 15px;
  position: relative; // 앱솔루트는 부모요소 신경 안 쓰고 화면 전체에서 잡아주는 것, 릴레이티브는 부모요소에 맞춰 줄어드는 것
  font-size: 16px;
  ${theme.fontSizes.base}
  font-weight: 400;
  /* box-shadow: 2px 2px 5px #bab7c0; */
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  /* border: 1px solid #e4e4e4; */
`;

export const Question = styled.div`
  font-size: 14px;
`;
export const SignUp = styled.div`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 40px;
  aspect-ratio: 1;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  background-color: #fff;
  border: 1px solid #acebe7;
  border-radius: 15px;
  color: #000;
  ${theme.fontSizes.base}
  font-weight: 400;
  ::placeholder {
    color: #000;
    ${theme.fontSizes.base}
    font-weight: 400;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

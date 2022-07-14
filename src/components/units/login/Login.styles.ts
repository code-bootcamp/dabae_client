import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  padding: 40px 0;
  max-width: 400px;
  margin: 0px auto;
`;

export const Title = styled.div`
  font-size: 26px;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const PasswordFind = styled.div`
  font-size: 14px;
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
  border-radius: 10px;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;

  :disabled {
    cursor: default;
    background-color: #fff;
    color: #333;
  }
`;

export const Button2 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  background-color: #03c75a;
  color: #fff;
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
  border-radius: 10px;
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
  border-radius: 10px;
  position: relative;
  font-size: 16px;
  ${theme.fontSizes.base}
  font-weight: 400;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  /* box-shadow: 2px 2px 5px #bab7c0; */
  /* border: 1px solid #e4e4e4; */
`;

export const Question = styled.div`
  font-size: 14px;
`;
export const SignUp = styled.div`
  font-size: 14px;
  text-decoration: underline;
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
  border-radius: 10px;
  color: #333;
  ${theme.fontSizes.base}
  font-weight: 400;
  ::placeholder {
    color: #333;
    ${theme.fontSizes.base}
    font-weight: 400;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

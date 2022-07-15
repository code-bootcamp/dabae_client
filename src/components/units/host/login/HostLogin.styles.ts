import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  padding: 20px 0;
`;

export const ImgWrap = styled.div`
  width: 600px;
  height: 100%;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LoginWrap = styled.div`
  background-color: #fff;
  max-width: 450px;
  width: 100%;
  height: 100%;
  padding: 150px 20px;
  position: absolute;
  right: 300px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 150px 20px;
    position: static;
    margin: auto;
  }
`;
export const Title = styled.div`
  font-size: 28px;
  text-align: center;
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

export const HostSignUp = styled.div`
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

export const Question = styled.div`
  font-size: 14px;
`;

export const SignUp = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
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

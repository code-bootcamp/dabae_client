import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
  height: 600px;
`;
export const Title = styled.div`
  font-size: 28px;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 3px;
`;
export const Message = styled.div`
  font-size: 14px;
  margin-top: 3px;
  padding-left: 10px;
`;

export const Button01 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  background-color: #32c2b9;
  color: #fff;
  border: 1px solid #acebe7;
  border-radius: 15px;
  ${theme.fontSizes.base}
  font-weight: 400;
  cursor: pointer;

  :disabled {
    cursor: default;
    background-color: #fff;
    color: #000;
  }
`;

export const Button02 = styled.button`
  width: 200px;
  padding: 10px 20px;
  outline: 0;
  background-color: #32c2b9;
  color: #fff;
  border: 1px solid #acebe7;
  border-radius: 15px;
  ${theme.fontSizes.base}
  font-weight: 400;

  :disabled {
    cursor: default;
    background-color: #fff;
    color: #000;
  }
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

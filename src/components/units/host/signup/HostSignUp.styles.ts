import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding-top: 60px;
  padding-bottom: 40px;
`;
export const Error = styled.div`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-top: 3px;
`;

export const Title = styled.div`
  font-size: 32px;
  padding-bottom: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
`;

export const Button01 = styled.button`
  width: 200px;
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
    color: #000;
    background-color: #fff;
    cursor: default;
  }
`;

export const Button02 = styled.button`
  width: 100%;
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

export const Text = styled.div``;

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

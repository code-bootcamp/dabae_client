import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  max-width: 600px;
  margin: 0px auto;
  padding: 40px 0 300px 0;

  @media (max-width: 768px) {
    padding: 20px 0 80px 0;
  }
`;
export const Error = styled.div`
  color: #de1c22;
  font-size: 12px;
  text-align: left;
  margin-top: 3px;
`;

export const Title = styled.div`
  font-size: 28px;
  padding-bottom: 40px;
`;

export const Button01 = styled.button`
  width: 200px;
  padding: 10px 20px;
  outline: 0;
  background-color: #32c2b9;
  color: #fff;
  border: 1px solid #acebe7;
  border-radius: 10px;
  ${theme.fontSizes.base}
  font-weight: 400;

  :disabled {
    cursor: default;
    background-color: #fff;
    color: #333;
  }
`;

export const Button02 = styled.button`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  background-color: #32c2b9;
  color: #fff;
  border: 1px solid #acebe7;
  border-radius: 10px;
  ${theme.fontSizes.base}
  font-weight: 400;
  cursor: pointer;

  :disabled {
    cursor: default;
    background-color: #fff;
    color: #333;
  }
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
    color: #c0c0c0;
    ${theme.fontSizes.base}
    font-weight: 400;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Timer = styled.div`
  position: absolute;
  right: 20px;
  ${theme.fontSizes.base}
  font-weight: 400;
  color: #de1c22;
`;

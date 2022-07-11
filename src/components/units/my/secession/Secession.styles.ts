import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  cursor: pointer;
  margin-right: 10px;
  transform: rotate(180deg);
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const TextBox = styled.div`
  margin-bottom: 60px;
`;

export const Text = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  ${theme.fontSizes.base};
  ::placeholder {
    transition: all 0.3s ease-in-out;
    ${theme.fontSizes.base};
    color: #999999;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const CheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const CheckInput = styled.input`
  cursor: pointer;
`;

export const CheckLabel = styled.label`
  cursor: pointer;
  margin-left: 10px;
  ${theme.fontSizes.base};
  font-weight: 700;
  color: #000;

  @media (max-width: 768px) {
    ${theme.fontSizes.small};
  }
`;

export const CheckLabelB = styled.b`
  font-weight: bold;
  color: #ff5360;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  ${theme.fontSizes.base};
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  outline: 0;
  background-color: #32c2b9;
`;

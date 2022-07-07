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

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  padding-left: 10px;
  color: rgb(17, 17, 17);
  ${theme.fontSizes.small}
  font-weight: 400;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 15px;
  color: rgb(17, 17, 17);
  ${theme.fontSizes.base}
  font-weight: 400;
`;

export const PasswordInner = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const PasswordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PasswordInputBox = styled.div`
  width: 80%;
  padding-right: 10px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 15px;
  color: rgb(17, 17, 17);
  ${theme.fontSizes.base}
  font-weight: 400;
`;

export const PasswordButton = styled.button`
  cursor: pointer;
  border: 1px solid #999999;
  background-color: #fff;
  color: #999999;
  border-radius: 15px;
  text-align: center;
  padding: 10px 0;
  width: 20%;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #87dbff;
    background-color: #87dbff;
    color: #fff;
  }
`;

export const GenderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const GenderBox = styled.div`
  width: 50%;
  padding-right: 10px;
  :last-child {
    padding-right: 0;
    padding-left: 10px;
  }
`;

export const GenderButton = styled.button`
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
  color: #999999;
  font-weight: bold;
  ${theme.fontSizes.base};
`;

export const ActiveGenderButton = styled.button`
  width: 100%;
  border: 1px solid #87dbff;
  border-radius: 10px;
  background-color: #87dbff;
  text-align: center;
  padding: 15px 0;
  color: #fff;
  font-weight: bold;
  ${theme.fontSizes.base};
`;

// modal password

export const ModalInner = styled.div`
  margin-top: 30px;
`;

export const ModalButton = styled.div`
  cursor: pointer;
  border: 1px solid #999999;
  background-color: #fff;
  color: #999999;
  border-radius: 15px;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #87dbff;
    background-color: #87dbff;
    color: #fff;
  }
`;

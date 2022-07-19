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

export const ProfileInput = styled.input`
  display: none;
`;

export const ProfileInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProfileBox = styled.div`
  cursor: pointer;
  position: relative;
`;

export const ProfileTitleImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProfileImgBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #000;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
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
  background-color: #acebe7;
  border: 1px solid #acebe7;
  border-radius: 15px;
  color: #fff;
  ${theme.fontSizes.base}
  font-weight: 400;
`;

export const NameInput = styled.input`
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
  border: 1px solid #32c2b9;
  background-color: #fff;
  color: #32c2b9;
  border-radius: 15px;
  text-align: center;
  padding: 10px 0;
  width: 20%;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #32c2b9;
    background-color: #32c2b9;
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

export const GenderInput = styled.input`
  display: none;
`;

export const GenderButton = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
  color: #32c2b9;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #32c2b9;
    background-color: #32c2b9;
    color: #fff;
  }
  color: ${(props: { active: boolean }) => (props.active ? "#fff" : "#32c2b9")};
  background-color: ${(props: { active: boolean }) =>
    props.active ? "#32c2b9" : "#fff"};
`;

export const ActiveGenderButton = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #32c2b9;
  background-color: #32c2b9;
  text-align: center;
  padding: 15px 0;
  color: #fff;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
`;

export const ChangeButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
  color: #32c2b9;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #32c2b9;
    color: #fff;
  }
`;

// modal password

export const ModalInner = styled.div`
  margin: 30px 0;
`;

export const ModalInputBox = styled.div`
  margin-bottom: 30px;
  position: relative;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const ModalInput = styled.input`
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

export const ErrorText = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.31;
  letter-spacing: normal;
  color: #ff5360;
  position: absolute;
  left: 10px;
`;

export const ModalButton = styled.div`
  cursor: pointer;
  border: 1px solid #32c2b9;
  background-color: #fff;
  color: #32c2b9;
  border-radius: 15px;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #32c2b9;
    background-color: #32c2b9;
    color: #fff;
  }
`;

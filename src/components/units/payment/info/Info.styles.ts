import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
`;

export const TitleBox = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  /* font-weight: bold; */
`;

export const SubTitleBox = styled.div`
  padding: 0 20px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #32c2b9;
`;

export const SubTitle = styled.div`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const ClassInner = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const ClassImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ClassTitleInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClassTitleBox = styled.div`
  margin-bottom: 15px;
`;

export const ClassTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 700;
`;

export const RatesBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Rates = styled(Rate)`
  color: red;
  ${theme.fontSizes.small};
`;

export const Review = styled.p`
  margin: 0;
  margin-left: 10px;
  ${theme.fontSizes.small};
  font-weight: 500;
`;

export const PaymentWayInner = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const PaymentInput = styled.input`
  cursor: pointer;
`;

export const PaymentInputLabel = styled.label`
  cursor: pointer;
  margin-left: 10px;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const EnergyInner = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const Energy = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const EnergyB = styled.b`
  color: #32c2b9;
`;

export const EnergyLine = styled.div`
  width: 1px;
  height: 12px;
  background-color: #32c2b9;
  margin: 0 10px;
`;

export const EnergyInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const EnergyInput = styled.input`
  outline: none;
  padding: 10px 15px;
  border: 1px solid #999999;
  border-radius: 10px;
  ${theme.fontSizes.small};
  font-weight: 500;
  color: #999999;
  text-align: right;
  ::placeholder {
    ${theme.fontSizes.small};
    font-weight: 500;
    color: #999999;
    text-align: right;
  }
`;

export const EnergyButton = styled.button`
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  padding: 8px 15px;
  border: 1px solid #000;
  border-radius: 10px;
  ${theme.fontSizes.base};
  color: #333;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:active {
    background-color: #000;
    color: #fff;
  }
`;

export const PointInner = styled.div`
  margin-top: 15px;
  border: 1px solid #e9e9e9;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
`;

export const PointText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  color: #999999;
`;

export const TotalPaymentInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TotalPayment = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  color: #333;
  /* font-weight: bold; */
`;

export const AgreementInner = styled.div`
  padding: 10px;
  border: 1px solid #e9e9e9;
`;

export const AgreementTextBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  :last-child {
    margin-bottom: 0;
  }
`;

export const AgreementText = styled.p`
  cursor: pointer;
  margin: 0;
  ${theme.fontSizes.small};
  color: #333;
  padding-right: 20px;
`;

export const AgreementTextButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 0;
  ${theme.fontSizes.small};
  color: #333;
`;

export const ModalInner = styled.div`
  padding: 20px;
`;

export const ModalContentHeader = styled.p`
  ${theme.fontSizes.base};
  color: #333;
  /* font-weight: bold; */
`;

export const ModalContentBox = styled.div`
  height: 500px;
  overflow-y: scroll;
`;

export const ModalContent = styled.p`
  ${theme.fontSizes.small};
  color: #333;
`;

export const PaymentBox = styled.div`
  padding: 0 15px;
`;

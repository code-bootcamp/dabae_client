import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const PaymentButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  ${theme.fontSizes.base};
  color: #32c2b9;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #32c2b9;
    color: #fff;
  }

  &:active {
    background-color: #32c2b9;
    color: #fff;
  }
`;

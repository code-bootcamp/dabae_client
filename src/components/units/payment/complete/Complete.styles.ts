import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleBox = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const PayContentInner = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
`;

export const Img = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Payment = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.p`
  ${theme.fontSizes.base};
  font-weight: bold;
`;

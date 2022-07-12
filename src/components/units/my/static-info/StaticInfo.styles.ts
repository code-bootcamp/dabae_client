import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const StaticInfoBox = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #32c2b9;
`;

export const StaticInfoTitleBox = styled.div`
  cursor: pointer;
  display: flex;
`;

export const Img = styled.img`
  cursor: pointer;
  margin-right: 10px;
  transform: rotate(180deg);
`;

export const StaticInfoTitle = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const StaticInfoContentInner = styled.div`
  padding-top: 40px;
`;

export const StaticInfoContentBox = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #e9e9e9;
`;

export const StaticInfoLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  margin-bottom: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #32c2b9;
    color: #fff;
  }
`;

export const StaticInfoText = styled.p`
  margin: 0;
`;

export const StaticInfoImg = styled.img``;

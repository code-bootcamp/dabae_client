import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const SliderInner = styled.div`
  margin-bottom: 40px;
`;

export const EmptyBox = styled.div``;

export const MainSlideImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const Link = styled.a``;

export const SubImg = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const LinkText = styled.p`
  margin: 0;
  font-weight: 500;
  cursor: pointer;
  ${theme.fontSizes.small};
  line-height: 16px;
  text-align: center;
  margin-top: 5px;
  color: rgb(170, 170, 170);
`;

export const Inner = styled.div`
  width: 100%;
  margin: 40px 0;
`;

export const InnerHeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InnerHeaderTitle = styled.h2`
  font-weight: bold;
  ${theme.fontSizes.subTitle};
`;

export const InnerHeaderLink = styled.a`
  margin: 0;
  ${theme.fontSizes.base};
`;

export const InnerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SubBanner = styled.img`
  width: 100%;
  height: 100px;
`;

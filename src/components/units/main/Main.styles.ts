import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const SliderInner = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: -20px;
  }
`;

export const SlideHeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const SlideCountBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  border-radius: 20px;
`;

export const SlideCount = styled.p`
  margin: 0;
  color: #fff;
  ${theme.fontSizes.small};
`;

export const EmptyBox = styled.div``;

export const MainSlideImg = styled.img`
  width: 100%;
  height: auto;
`;

export const SubContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

export const SubCatagoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  ${theme.fontSizes.subTitle};
  margin: 0;
  /* font-weight: bold; */

  @media (max-width: 768px) {
    ${theme.fontSizes.base};
  }
`;

export const InnerHeaderLink = styled.a`
  margin: 0;
  ${theme.fontSizes.base};
  transition: all 0.3s ease-in-out;

  :hover {
    color: #32c2b9;
  }

  @media (max-width: 768px) {
    ${theme.fontSizes.small};
  }
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

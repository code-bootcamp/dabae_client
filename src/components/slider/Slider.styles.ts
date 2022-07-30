import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const SliderInner = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: -20px;
  }
`;

export const EmptyBox = styled.div``;

export const MainSlideImg = styled.img`
  width: 100%;
  height: auto;
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

export const SubBanner = styled.img`
  width: 100%;
  height: 100px;
`;

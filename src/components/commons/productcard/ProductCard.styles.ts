import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const CardItem = styled.div`
  cursor: pointer;
  width: 180px;

  @media (max-width: 768px) {
    width: 50%;
    :nth-child(even) {
      padding-left: 10px;
    }
    :nth-child(odd) {
      padding-right: 10px;
    }
  }
`;

export const ImgBox = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const LikeBox = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const LikeImg = styled.img``;

export const ActiveLikeImg = styled.img``;

export const ContentBox = styled.div`
  padding: 10px;
`;

export const AddressText = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  color: rgb(119, 119, 119);
  margin-bottom: 10px;
`;

export const TextBox = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TextTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.lg};
  font-weight: bold;
  color: #000000;

  @media (max-width: 768px) {
    ${theme.fontSizes.base};
  }
`;

export const RateText = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  color: rgb(51, 51, 51);
  margin-left: 10px;
`;

export const PriceBox = styled.div`
  padding-top: 10px;
  border-top: 1px solid rgb(238, 238, 238);
`;

export const Price = styled.p`
  margin: 0;
  font-weight: bold;
  ${theme.fontSizes.base};
`;

export const PriceB = styled.b`
  margin: 0;
  ${theme.fontSizes.small};
  margin-left: 5px;
`;

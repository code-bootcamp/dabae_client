import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const CardItem = styled.div`
  cursor: pointer;
  width: 180px;
  position: relative;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
`;

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
  white-space: normal;
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

export const LikeBox = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 140px;
`;

export const LikeImg = styled.img``;

export const ActiveLikeImg = styled.img``;

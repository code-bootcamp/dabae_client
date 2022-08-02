import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const CardInner = styled.div`
  position: relative;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  width: 23.6%;
  border-radius: 10px;
  margin-right: 0.9em;
  margin-bottom: 20px;
  :nth-of-type(4n) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 48%;
    :nth-of-type(even) {
      margin-left: 5px;
    }
    :nth-of-type(odd) {
      margin-right: 5px;
    }
  }
`;

export const CardItem = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const ImgBox = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 768px) {
    width: 100%;
    /* height: auto; */
  }
`;

export const LikeBox = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

export const LikeImg = styled.img``;

export const ActiveLikeImg = styled.img``;

export const ContentBox = styled.div`
  padding: 10px;
`;

export const AddressBox = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

export const AddressText = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  color: #fff;
`;

export const TextBox = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TextTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  /* font-weight: bold; */
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
    /* font-weight: 700; */
  }
`;

export const SubTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryText = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  color: #999999;
`;

export const RateText = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  color: rgb(51, 51, 51);
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Rates = styled(Rate)`
  color: red;
  ${theme.fontSizes.small};
`;

export const PriceBox = styled.div`
  padding-top: 10px;
  border-top: 1px solid rgb(238, 238, 238);
`;

export const CurrentPriceBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentPrice = styled.p`
  margin: 0;
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const DiscountInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DiscountRateBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscountBox = styled.div`
  margin-left: 10px;
`;

export const Discount = styled.p`
  margin: 0;
  font-weight: bold;
  ${theme.fontSizes.base};
  color: red;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Price = styled.p`
  margin: 0;
  font-weight: bold;
  ${theme.fontSizes.base};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceB = styled.b`
  margin: 0;
  ${theme.fontSizes.small};
  margin-left: 5px;
`;

export const EmptyBox = styled.div``;

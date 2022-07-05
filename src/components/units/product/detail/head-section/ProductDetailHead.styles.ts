import styled from "@emotion/styled";

export const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
`;

export const Carousel = styled.div`
  width: 375px;
  height: 375px;
  border-radius: 5px;
`;

export const ProductImage = styled.img`
  width: 375px;
  height: 375px;
  border-radius: 5px;
`;

export const InfoSection = styled.div`
  width: 369px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 20px;
  letter-spacing: -0.6px;
  line-height: 28px;
  color: #333;
  width: 320px;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 12px;
`;

export const DiscountRate = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
  line-height: 36px;
  color: #ff3f33;
  margin-right: 12px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
  line-height: 36px;
  color: #333;
  margin-right: 6px;
`;

export const PriceUnit = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.42px;
  line-height: 22px;
  color: #333;
`;

export const FakedPrice = styled.div`
  font-size: 16px;
  letter-spacing: -0.48px;
  line-height: 22px;
  text-decoration: line-through solid rgb(204, 204, 204);
  color: #ccc;
`;

export const HostProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 24px 12px 0 0;
`;

export const HostProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const HostName = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.54px;
  line-height: 26px;
  color: #333;
  cursor: pointer;
`;

export const ProfileStat = styled.span`
  font-size: 12px;
  letter-spacing: -0.36px;
  line-height: 16px;
  color: #aaa;
  margin-top: 2px;
`;

export const StatUnit = styled.span`
  font-size: 10px;
  letter-spacing: -0.36px;
  line-height: 16px;
  vertical-align: top;
  color: #ddd;
`;

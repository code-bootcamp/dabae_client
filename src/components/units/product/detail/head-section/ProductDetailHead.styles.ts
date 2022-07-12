import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 475px;
  max-height: 475px;
  border-radius: 5px;

  @media (max-width: 767px) {
    max-width: 767px;
    max-height: 767px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  max-width: 475px;
  max-height: 475px;
  border-radius: 5px;

  @media (max-width: 767px) {
    max-width: 767px;
    max-height: 767px;
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

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;

  @media (max-width: 767px) {
    padding: 20px 0 0 0;
  }
`;

export const Title = styled.div`
  ${theme.fontSizes.subTitle};
  /* width: 100%; */
  letter-spacing: -0.6px;
  line-height: 28px;
  color: #333;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
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

// export const FakedPrice = styled.div`
//   font-size: 16px;
//   letter-spacing: -0.48px;
//   line-height: 22px;
//   text-decoration: line-through solid rgb(204, 204, 204);
//   color: #ccc;
// `;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin: 20px 0 20px 0;
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #333;
  padding: 18px 0 10px 0;
`;

export const LabelUnit = styled.div`
  padding: 6px 11px;
  margin: 0 9px 12px 0;
  font-size: 14px;
  line-height: 21px;
  background-color: #fbfff5;
  color: #004518;
  border: 1px solid #9bd491;
  border-radius: 20px;
`;

export const HostProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 12px 0 0;
  margin-top: 20px;
`;

export const HostProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const HostName = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.54px;
  line-height: 26px;
  color: #333;
  cursor: pointer;
`;

// export const ProfileStat = styled.span`
//   font-size: 12px;
//   letter-spacing: -0.36px;
//   line-height: 16px;
//   color: #aaa;
//   margin-top: 2px;
// `;

// export const StatUnit = styled.span`
//   font-size: 10px;
//   letter-spacing: -0.36px;
//   line-height: 16px;
//   vertical-align: top;
//   color: #ddd;
// `;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 92px;
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.08) 0px -10px 30px -10px;
  }
`;

export const MobileJoinButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  background-color: #32c2b9;
  color: #fff;
  width: 100%;
  height: 56px;
  border-radius: 10px;
`;

export const JoinButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  background-color: #32c2b9;
  color: #fff;
  width: 100%;
  height: 56px;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

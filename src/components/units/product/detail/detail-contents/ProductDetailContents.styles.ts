import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid #eee;
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const MiniLabel = styled.span`
  font-size: 14px;
  line-height: 21px;
  width: 76px;
  color: #999;
`;

export const Info = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: #333;
`;

export const IntroImage = styled.img`
  width: 100%;
`;

export const Contents = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 40px 0;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  color: #333;

  img {
    width: 100%;
  }
`;

export const LocationTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  margin-top: 20px;
  color: #333;
`;

export const ProductCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

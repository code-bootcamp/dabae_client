import styled from "@emotion/styled";

export const ReviewSummary = styled.div`
  padding: 57px 0 24px 0;
  display: flex;
  flex-direction: column;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const ReviewRateNumber = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding-left: 12px;
  /* padding-top: 10px; */
  color: #000;
`;

export const ReviewCount = styled.span`
  font-size: 14px;
  letter-spacing: -0.42px;
  line-height: 22px;
  color: #777;
  padding-left: 12px;
`;

export const ReviewSection = styled.div`
  width: 100%;
  height: 566px;
  overflow-x: auto;
  margin-bottom: 12px;
  padding: 24px 18px 0px 18px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fafafa;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    max-width: 767px;
    max-height: 767px;
  }
`;

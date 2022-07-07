import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

export default function StaticInfoContainer() {
  return (
    <Wrapper>
      <StaticInfoBox>
        <StaticInfoTitle>약관 및 정책</StaticInfoTitle>
      </StaticInfoBox>
      <StaticInfoContentInner>
        <StaticInfoContentBox>
          <StaticInfoLink href="/static-info/agreement">
            <StaticInfoText>이용약관</StaticInfoText>
            <StaticInfoImg
              src="/images/agreementArrow.svg"
              alt="agreementArrow"
            />
          </StaticInfoLink>
        </StaticInfoContentBox>
        <StaticInfoContentBox>
          <StaticInfoLink href="/static-info/privacy">
            <StaticInfoText>개인정보 처리방침</StaticInfoText>
            <StaticInfoImg
              src="/images/agreementArrow.svg"
              alt="agreementArrow"
            />
          </StaticInfoLink>
        </StaticInfoContentBox>
      </StaticInfoContentInner>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const StaticInfoBox = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e9e9e9;
`;

export const StaticInfoTitle = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const StaticInfoContentInner = styled.div`
  padding-top: 40px;
`;

export const StaticInfoContentBox = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #e9e9e9;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #e9e9e9;
  }
`;

export const StaticInfoLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const StaticInfoText = styled.p`
  padding: 15px 0;
  margin: 0;
  font-size: 14px;
  color: rgb(51, 51, 51);
`;

export const StaticInfoImg = styled.img``;

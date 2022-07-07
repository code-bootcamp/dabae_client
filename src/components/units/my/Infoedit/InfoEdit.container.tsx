import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

export default function InfoEditContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  return (
    <Wrapper>
      <Inner>
        <TitleBox>
          <Img onClick={BackMyMove} src="/images/myArrow.svg" />
          <Title>내 정보 수정</Title>
        </TitleBox>
      </Inner>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  cursor: pointer;
  margin-right: 10px;
  transform: rotate(180deg);
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

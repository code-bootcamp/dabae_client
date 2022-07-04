import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";
import { listData } from "../../common/mockup/data";
import ListProductCardContainer from "../../commons/listproductcard/ListProductCard.container";

export default function ListContainer() {
  // 페이지 네이션 미 구현

  return (
    <Wrapper>
      <ListTitleBox>
        {/* 제목 미정... 해야함 */}
        <ListTitle>리스트입니다.</ListTitle>
        <ListCount>{listData.length}</ListCount>
      </ListTitleBox>
      <ListWrapper>
        <ListProductCardContainer />
      </ListWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const ListTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const ListTitle = styled.h2`
  font-weight: bold;
  ${theme.fontSizes.subTitle};
`;

export const ListCount = styled.p`
  margin: 0;
  margin-left: 10px;
  font-weight: 300;
  ${theme.fontSizes.subTitle};
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

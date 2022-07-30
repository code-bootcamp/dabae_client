import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";
import ProductCardContainer from "../../commons/productcard/ProductCard.container";
import { v4 as uuidv4 } from "uuid";
import { SEARCH_LIST } from "@/src/layout/header/Header.queries";
import { useQuery } from "@apollo/client";
import { searchCourseList } from "@/src/commons/store";
import { useRecoilState } from "recoil";

export interface IListContainer {
  searchList: any;
}

export default function ListContainer(props: IListContainer) {
  const [listSearch] = useRecoilState(searchCourseList);
  const { data: searchList } = useQuery(SEARCH_LIST, {
    variables: {
      search: listSearch,
    },
  });

  console.log("searchList ", searchList);

  return (
    <Wrapper>
      <ListTitleBox>
        <ListTitle>리스트입니다.</ListTitle>
      </ListTitleBox>
      <ListWrapper>
        {searchList?.fetchCoursesSortByPick.map((el: any) => (
          <ProductCardContainer key={uuidv4()} el={el} />
        ))}
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
  margin-bottom: 20px;
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

export const MapInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const MapBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MapText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: bold;
`;

export const Img = styled.img``;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

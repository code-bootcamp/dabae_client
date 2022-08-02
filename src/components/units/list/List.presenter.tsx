import ProductCardContainer from "../../commons/productcard/ProductCard.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./List.style";
import { IListPresenter } from "./List.types";
import ListPagination from "../../commons/pagination/ListPagination";

export default function ListPresenter(props: IListPresenter) {
  return (
    <S.Wrapper>
      {/* <S.ListTitleBox>
        <S.ListTitle>리스트입니다.</S.ListTitle>
      </S.ListTitleBox> */}
      <S.SelectBox onChange={props.onChangeSelect}>
        <S.SelectOption value="createdAt">젠체보기</S.SelectOption>
        <S.SelectOption value="pick">인기순</S.SelectOption>
        <S.SelectOption value="discount">할인순</S.SelectOption>
        <S.SelectOption value="createdAt">신규순</S.SelectOption>
      </S.SelectBox>
      <S.ListWrapper>
        {props.searchList?.fetchCoursesSortByOption.map((el: any) => (
          <ProductCardContainer
            pickList={props.pickList}
            key={uuidv4()}
            el={el}
          />
        ))}
        {/* <EmptyContent>
          <EmptyTitle>검색 결과가 없어요.</EmptyTitle>
          <EmptyText>다른 검색어로 검색해 주세요!</EmptyText>
        </EmptyContent> */}
      </S.ListWrapper>
      <ListPagination searchList={props.searchList} refetch={props.refetch} />
    </S.Wrapper>
  );
}

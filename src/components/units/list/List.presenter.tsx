import ProductCardContainer from "../../commons/productcard/ProductCard.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./List.style";
import { IListPresenter } from "./List.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ListPresenter(props: IListPresenter) {
  return (
    <S.Wrapper>
      <S.SelectBox onChange={props.onChangeSelect}>
        <S.SelectOption value="createdAt">전체보기</S.SelectOption>
        <S.SelectOption value="pick">인기순</S.SelectOption>
        <S.SelectOption value="discount">할인순</S.SelectOption>
        <S.SelectOption value="createdAt">신규순</S.SelectOption>
      </S.SelectBox>
      <S.InfiniteScrollBox>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.ListWrapper>
            {props.searchList?.fetchCoursesSortByOption.map((el) => (
              <ProductCardContainer
                pickList={props.pickList}
                key={uuidv4()}
                el={el}
              />
            ))}
          </S.ListWrapper>
        </InfiniteScroll>
      </S.InfiniteScrollBox>
    </S.Wrapper>
  );
}

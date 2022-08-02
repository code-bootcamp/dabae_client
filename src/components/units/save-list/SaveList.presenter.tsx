import ProductCardContainer from "../../commons/productcard/ProductCard.container";
import * as S from "./SaveList.styles";
import { ISaveListPresenter } from "./SaveList.types";
import { v4 as uuidv4 } from "uuid";

export default function SaveListPresenter(props: ISaveListPresenter) {
  const saveListMap = props.saveList?.fetchCoursesSortByOption.map((el: any) =>
    props.pickList?.fetchPicksByUser.map(
      (i: any) =>
        el.id === i && (
          <ProductCardContainer
            pickList={props.pickList}
            key={uuidv4()}
            el={el}
          />
        )
    )
  );

  return (
    <S.Wrapper>
      <S.TitleInner>
        <S.TitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.Title>다배</S.Title>
        </S.TitleBox>
      </S.TitleInner>
      <S.InnerContent>
        <>
          {props.pickList?.fetchPicksByUser.length ? (
            saveListMap
          ) : (
            <S.EmptyContent>
              <S.EmptyTitle>아직 저장한 다배가 없어요.</S.EmptyTitle>
              <S.EmptyText>관심있는 다배를 저장해 보세요!</S.EmptyText>
            </S.EmptyContent>
          )}
        </>
      </S.InnerContent>
    </S.Wrapper>
  );
}

import ProductCardContainer from "../../commons/productcard/ProductCard.container";
import * as S from "./SaveList.styles";
import { ISaveListPresenter } from "./SaveList.types";
import { v4 as uuidv4 } from "uuid";

export default function SaveListPresenter(props: ISaveListPresenter) {
  return (
    <S.Wrapper>
      <S.TitleInner>
        <S.TitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.Title>다배</S.Title>
        </S.TitleBox>
      </S.TitleInner>
      <S.InnerContent>
        {props.saveList?.fetchCoursesSortByPick.pick > 1 ? (
          <>
            {props.saveList?.fetchCoursesSortByPick.map((el: any) => (
              <ProductCardContainer key={uuidv4()} el={el} />
            ))}
          </>
        ) : (
          <S.EmptyContent>
            <S.EmptyTitle>아직 저장한 다배가 없어요.</S.EmptyTitle>
            <S.EmptyText>관심있는 다배를 저장해 보세요!</S.EmptyText>
          </S.EmptyContent>
        )}
      </S.InnerContent>
    </S.Wrapper>
  );
}

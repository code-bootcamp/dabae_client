import KakaoMapDetail from "@/src/components/commons/kakao-map";
import ProductCardContainer from "@/src/components/commons/productcard/ProductCard.container";
import { CF } from "@/styles/commonComponentStyle";
import DOMPurify from "dompurify";
import * as S from "./ProductDetailContents.styles";
import { IProductDetailContentsUIProps } from "./ProductDetailContents.types";
import { v4 as uuidv4 } from "uuid";

export default function ProductDetailContentsUI(
  props: IProductDetailContentsUIProps
) {
  return (
    <CF.ColumnDiv>
      <S.SectionWrapper>
        <S.Label>다배 정보</S.Label>
        <CF.RowDiv>
          <S.MiniLabel>난이도</S.MiniLabel>
          <S.Info>{props.data?.difficulty}</S.Info>
        </CF.RowDiv>
        <CF.RowDiv>
          <S.MiniLabel>사용기간</S.MiniLabel>
          <S.Info>구매일로부터 90일</S.Info>
        </CF.RowDiv>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Label>다배 소개</S.Label>
        <S.IntroImage src="/images/product_detail/intro_1.webp" />
        {typeof window !== "undefined" ? (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(String(props.data?.contents)),
            }}
          />
        ) : (
          <></>
        )}
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Label>진행 장소</S.Label>
        <KakaoMapDetail address={props.data?.address} />
        <S.LocationTitle>
          {props.data?.address} {props.data?.addressDetail}
        </S.LocationTitle>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Label>이런 다배 어때요?</S.Label>
        <S.ProductCardWrapper>
          {props.hotCourses?.hotCourses.map((el: any) => (
            <ProductCardContainer
              key={uuidv4()}
              el={el}
              pickList={props.pickList}
            />
          ))}
        </S.ProductCardWrapper>
      </S.SectionWrapper>
    </CF.ColumnDiv>
  );
}

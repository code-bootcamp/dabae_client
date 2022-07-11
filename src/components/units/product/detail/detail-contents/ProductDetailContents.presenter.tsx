import KakaoMapDetail from "@/src/components/commons/kakao-map";
import ProductCardContainer from "@/src/components/commons/productcard/ProductCard.container";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./ProductDetailContents.styles";

export default function ProductDetailContentsUI() {
  return (
    <CF.ColumnDiv>
      <S.SectionWrapper>
        <S.Label>다배 정보</S.Label>
        <CF.RowDiv>
          <S.MiniLabel>난이도</S.MiniLabel>
          <S.Info>보통</S.Info>
        </CF.RowDiv>
        <CF.RowDiv>
          <S.MiniLabel>사용기간</S.MiniLabel>
          <S.Info>구매일로부터 90일</S.Info>
        </CF.RowDiv>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Label>다배 소개</S.Label>
        <S.IntroImage src="/images/product_detail/intro_1.webp" />
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Label>진행 장소</S.Label>
        <KakaoMapDetail address="서울 영등포구 여의동로 지하 343" />
        <S.LocationTitle>
          서울시 용산구 이태원로 242, 트렌드바이미 (한강직연 3번출구 5분 직진)
        </S.LocationTitle>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Label>이런 다배 어때요?</S.Label>
        <S.ProductCardWrapper style={{ justifyContent: "space-between" }}>
          <ProductCardContainer />
        </S.ProductCardWrapper>
      </S.SectionWrapper>
    </CF.ColumnDiv>
  );
}

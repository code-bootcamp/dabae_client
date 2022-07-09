import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from "@/src/components/commons/mockup/data";
import ProductCardContainer from "@/src/components/commons/productcard/ProductCard.container";
import * as S from "./Main.styles";
import { IMainPresenter } from "./Main.types";

export default function MainPresenter(props: IMainPresenter) {
  return (
    <S.Wrapper>
      <S.SliderInner>
        <Slider {...props.mainSettings}>
          {props.mainSlides.map((el: any, i: any) => (
            <S.EmptyBox key={i}>{el.slide}</S.EmptyBox>
          ))}
        </Slider>
        <S.SlideCountBox>
          <S.SlideCount>{`${props.currentSlide + 1} / ${
            props.mainSlides.length
          }`}</S.SlideCount>
        </S.SlideCountBox>
      </S.SliderInner>
      <S.SubContentBox>
        {category.map((el, i) => (
          <S.SubCatagoryBox key={i}>
            <S.Link href="/">
              <S.SubImg src={el.img} />
              <S.LinkText>{el.title}</S.LinkText>
            </S.Link>
          </S.SubCatagoryBox>
        ))}
      </S.SubContentBox>
      <S.Inner>
        <S.InnerHeaderBox>
          {/* 나중에 바꿔야함 타이틀 명 */}
          <S.InnerHeaderTitle>인기 급상승 프립</S.InnerHeaderTitle>
          <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
        </S.InnerHeaderBox>
        <S.InnerContent>
          <ProductCardContainer />
        </S.InnerContent>
      </S.Inner>
      <S.SliderInner>
        <Slider {...props.settings}>
          {props.subBanner.map((el: any, i: any) => (
            <S.EmptyBox key={i}>{el.banner}</S.EmptyBox>
          ))}
        </Slider>
      </S.SliderInner>
      <S.Inner>
        <S.InnerHeaderBox>
          {/* 나중에 바꿔야함 타이틀 명 */}
          <S.InnerHeaderTitle>기간한정 특가</S.InnerHeaderTitle>
          <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
        </S.InnerHeaderBox>
        <S.InnerContent>
          <ProductCardContainer />
        </S.InnerContent>
      </S.Inner>
      <S.SliderInner>
        <S.SlideHeaderBox>
          {/* 나중에 바꿔야함 타이틀 명 */}
          <S.InnerHeaderTitle>기획전</S.InnerHeaderTitle>
          <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
        </S.SlideHeaderBox>
        <Slider {...props.settings}>
          {props.banner.map((el: any, i: any) => (
            <S.EmptyBox key={i}>{el.banner}</S.EmptyBox>
          ))}
        </Slider>
      </S.SliderInner>
      <S.Inner>
        <S.InnerHeaderBox>
          {/* 나중에 바꿔야함 타이틀 명 */}
          <S.InnerHeaderTitle>신규프립 추천</S.InnerHeaderTitle>
          <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
        </S.InnerHeaderBox>
        <S.InnerContent>
          <ProductCardContainer />
        </S.InnerContent>
      </S.Inner>
    </S.Wrapper>
  );
}
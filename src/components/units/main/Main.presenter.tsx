import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from "@/src/components/commons/mockup/data";
import ProductCardContainer from "@/src/components/commons/productcard/ProductCard.container";
import * as S from "./Main.styles";
import { IMainPresenter } from "./Main.types";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import SliderContainer from "../../slider/Slider.container";

export default function MainPresenter(props: IMainPresenter) {
  return (
    <S.Wrapper>
      <S.SliderInner>
        <SliderContainer optionSlide={"mainBanner"}></SliderContainer>
      </S.SliderInner>
      <S.SubContentBox>
        {category.map((el: { img: string; title: string }, i: number) => (
          <S.SubCatagoryBox key={i}>
            <S.SubImg src={el.img} />
            <S.LinkText>{el.title}</S.LinkText>
          </S.SubCatagoryBox>
        ))}
      </S.SubContentBox>
      <S.Inner>
        <S.InnerHeaderBox>
          <S.InnerHeaderTitle>인기 급상승 다배</S.InnerHeaderTitle>
          <Link href="/list">
            <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
          </Link>
        </S.InnerHeaderBox>
        <S.InnerContent>
          {props.hotCourses?.hotCourses.map((el) => (
            <ProductCardContainer
              pickList={props.pickList}
              key={uuidv4()}
              el={el}
            />
          ))}
        </S.InnerContent>
      </S.Inner>
      <SliderContainer optionSlide={"subBanner"} />
      <S.Inner>
        <S.InnerHeaderBox>
          <S.InnerHeaderTitle>기간한정 특가</S.InnerHeaderTitle>
          <Link href="/list">
            <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
          </Link>
        </S.InnerHeaderBox>
        <S.InnerContent>
          {props.cheapCourses?.cheapCourses.map((el) => (
            <ProductCardContainer
              pickList={props.pickList}
              key={uuidv4()}
              el={el}
            />
          ))}
        </S.InnerContent>
      </S.Inner>
      <S.SliderInner>
        <S.SlideHeaderBox>
          <S.InnerHeaderTitle>기획전</S.InnerHeaderTitle>
        </S.SlideHeaderBox>
        <SliderContainer optionSlide={"planBanner"} />
      </S.SliderInner>
      <S.Inner>
        <S.InnerHeaderBox>
          <S.InnerHeaderTitle>신규 다배</S.InnerHeaderTitle>
          <Link href="/list">
            <S.InnerHeaderLink>전체보기</S.InnerHeaderLink>
          </Link>
        </S.InnerHeaderBox>
        <S.InnerContent>
          {props.newCourses?.newCourses.map((el) => (
            <ProductCardContainer
              pickList={props.pickList}
              key={uuidv4()}
              el={el}
            />
          ))}
        </S.InnerContent>
      </S.Inner>
    </S.Wrapper>
  );
}

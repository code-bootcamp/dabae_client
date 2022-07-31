import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Slider.styles";

export default function SliderContainer(props: any) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainSettings = {
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide);
    },
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  // 메인 슬라이더
  const mainSlides = [
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="/images/slider/mainBanner1.png" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768_d013cc39c9f8916acd094d6c3f554f749a81dcd70171cf1ea3834df4ced24b3e" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="/images/slider/mainBanner2.png" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768%20(2)_570efa809cb542e0aba8802936894f9bafa5d919280a64febba50374bb4a948a" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="/images/slider/mainBanner5.png" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_1920x768_ad24932723227408f723b37f1a99b2937b05dbde0c533bd614bcf59e39e594c4" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="/images/slider/mainBanner7.png" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_1920x768_0cf82c40d49f3bed801b840add81b2435affe4be0bed9effedc8af3d1ef317da" />
        </S.EmptyBox>
      ),
    },
  ];

  // 기획전 배너
  const banner = [
    {
      banner: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%AB_1920x768_357a411a3c921b25bb1d2703fa7089df1531e2c7367effbe51ff9ffe778c467e" />
        </S.EmptyBox>
      ),
    },
    {
      banner: (
        <S.EmptyBox>
          <S.MainSlideImg src="/images/slider/banner.png" />
        </S.EmptyBox>
      ),
    },
    {
      banner: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EA%B8%B0%ED%9A%8D%EC%A0%84_1920x768%20(9)_25e83576752f646b350a1679a520aa347a23a878f864fcdf012f296b6fd8e80e" />
        </S.EmptyBox>
      ),
    },
    {
      banner: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EA%B8%B0%ED%9A%8D%EC%A0%84_1860x744_1630485331344" />
        </S.EmptyBox>
      ),
    },
  ];

  // 서브 배너
  const subBanner = [
    {
      banner: (
        <S.EmptyBox>
          <S.SubBanner src="/images/slider/subBanner1.png" />
        </S.EmptyBox>
      ),
    },
    {
      banner: (
        <S.EmptyBox>
          <S.SubBanner src="https://res.cloudinary.com/frientrip/image/upload/ar_31:4,c_fill,dpr_2,f_auto,q_auto,w_930/Web_1860x240_730519d59204eceb63b69d65ecf916d9decc65b8b935b293c320bc098c839019" />
        </S.EmptyBox>
      ),
    },
    {
      banner: (
        <S.EmptyBox>
          <S.SubBanner src="/images/slider/subBanner3.png" />
        </S.EmptyBox>
      ),
    },
  ];

  return (
    <>
      {props.optionSlide === "mainBanner" && (
        <>
          <Slider {...mainSettings}>
            {mainSlides.map((el: any, i: any) => (
              <S.EmptyBox key={i}>{el.slide}</S.EmptyBox>
            ))}
          </Slider>
          <S.SlideCountBox>
            <S.SlideCount>{`${currentSlide + 1} / ${
              mainSlides.length
            }`}</S.SlideCount>
          </S.SlideCountBox>
        </>
      )}
      {props.optionSlide === "subBanner" && (
        <Slider {...settings}>
          {subBanner.map((el: any, i: any) => (
            <S.EmptyBox key={i}>{el.banner}</S.EmptyBox>
          ))}
        </Slider>
      )}
      {props.optionSlide === "planBanner" && (
        <Slider {...settings}>
          {banner.map((el: any, i: any) => (
            <S.EmptyBox key={i}>{el.banner}</S.EmptyBox>
          ))}
        </Slider>
      )}
    </>
  );
}

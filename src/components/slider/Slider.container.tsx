import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Slider.styles";

export default function SliderContainer(props: { optionSlide: string }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
    "/images/slider/mainBanner1.png",
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768_d013cc39c9f8916acd094d6c3f554f749a81dcd70171cf1ea3834df4ced24b3e",
    "/images/slider/mainBanner2.png",
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768%20(2)_570efa809cb542e0aba8802936894f9bafa5d919280a64febba50374bb4a948a",
    "/images/slider/mainBanner5.png",
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_1920x768_ad24932723227408f723b37f1a99b2937b05dbde0c533bd614bcf59e39e594c4",
    "/images/slider/mainBanner7.png",
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_1920x768_0cf82c40d49f3bed801b840add81b2435affe4be0bed9effedc8af3d1ef317da",
  ];

  // 기획전 배너
  const planBanner = [
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%AB_1920x768_357a411a3c921b25bb1d2703fa7089df1531e2c7367effbe51ff9ffe778c467e",
    "/images/slider/banner.png",
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EA%B8%B0%ED%9A%8D%EC%A0%84_1920x768%20(9)_25e83576752f646b350a1679a520aa347a23a878f864fcdf012f296b6fd8e80e",
    "https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EA%B8%B0%ED%9A%8D%EC%A0%84_1860x744_1630485331344",
  ];

  // 서브 배너
  const subBanner = [
    "/images/slider/subBanner1.png",
    "https://res.cloudinary.com/frientrip/image/upload/ar_31:4,c_fill,dpr_2,f_auto,q_auto,w_930/Web_1860x240_730519d59204eceb63b69d65ecf916d9decc65b8b935b293c320bc098c839019",
    "/images/slider/subBanner3.png",
  ];

  return (
    <>
      {props.optionSlide === "mainBanner" && (
        <>
          <Slider {...mainSettings}>
            {mainSlides.map((mainSlides, i: number) => {
              return (
                <S.EmptyBox key={i}>
                  <S.MainSlideImg src={mainSlides} />
                </S.EmptyBox>
              );
            })}
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
          {subBanner.map((subBanner, i: number) => (
            <S.EmptyBox key={i}>
              <S.MainSlideImg src={subBanner} />
            </S.EmptyBox>
          ))}
        </Slider>
      )}
      {props.optionSlide === "planBanner" && (
        <Slider {...settings}>
          {planBanner.map((planBanner, i: number) => (
            <S.EmptyBox key={i}>
              <S.MainSlideImg src={planBanner} />
            </S.EmptyBox>
          ))}
        </Slider>
      )}
    </>
  );
}

import { useState } from "react";
import MainPresenter from "./Main.presenter";
import * as S from "./Main.styles";

export default function MainContainer() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide + 1);
    },
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
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768_037ea5aaaffaa4d2a827d76016ec24e285e5cf108b313817e9393a0679899158" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768%20(9)_d8727dfa373bdba06ddf607ff40372ebb932daaca910e8aaba515d0c6674518a" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_1920x768_406f148765337b13508052108c22533a2bbc62d26e5026e600804efef27e9c15" />
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
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768_921668267406d556a1823d6f5959d661cc64d9c9c6f0c4e0225052950d1b9e72" />
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
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768%20(1)_d0f317f4c4711b5c0c6c7dc0d383685e0301dc7d7256854edb4917b20503eca6" />
        </S.EmptyBox>
      ),
    },
    {
      slide: (
        <S.EmptyBox>
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1920x768_0d1fecf6be198f9769181caddd91a773d69900945b273d5bafb9a2cb5beec3f4" />
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
          <S.MainSlideImg src="https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,q_auto,w_930/Web_%EA%B8%B0%ED%9A%8D%EC%A0%84_1920x768%20(7)_3f50aaaf36af527186c56e6bf8fb82cf9fb570159bd955b560943cc400aa3de6" />
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
          <S.SubBanner src="https://res.cloudinary.com/frientrip/image/upload/ar_31:4,c_fill,dpr_2,f_auto,q_auto,w_930/Web_1860x240_83cb8ace8c1fe3757f604c7fea814ddd530d48fe7ad07fc255d0cde261a4a17f" />
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
          <S.SubBanner src="https://res.cloudinary.com/frientrip/image/upload/ar_31:4,c_fill,dpr_2,f_auto,q_auto,w_930/Web_1860x240%20(5)_1be0a758a39c802c8a553316b07066a413d814b7540fe17da8e3682d789b7300" />
        </S.EmptyBox>
      ),
    },
  ];

  return (
    <MainPresenter
      settings={settings}
      mainSlides={mainSlides}
      banner={banner}
      subBanner={subBanner}
      currentSlide={currentSlide}
    />
  );
}

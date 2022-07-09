/*
 * Author : Seongpyo Hong
 * FileName: ProductDetailHead.container.tsx
 * Date: 2022-07-02 21:14:58
 * Description : 상품 상세 페이지 헤드 섹션
 */

import { useState } from "react";
import ProductDetailHeadUI from "./ProductDetailHead.presenter";

export default function ProductDetailHead() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide);
    },
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <ProductDetailHeadUI
      sliderSettings={sliderSettings}
      currentSlide={currentSlide}
    />
  );
}

/*
 * Author : Seongpyo Hong
 * FileName: ProductDetailHead.container.tsx
 * Date: 2022-07-02 21:14:58
 * Description : 상품 상세 페이지 헤드 섹션
 */

import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailHeadUI from "./ProductDetailHead.presenter";
import { IProductDetailHeadProps } from "./ProductDetailHead.types";

export default function ProductDetailHead(props: IProductDetailHeadProps) {
  const router = useRouter();
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

  const onClickMoveToPayOptions = () => {
    router.push(`/products/${router.query.courseId}/options`);
  };

  return (
    <ProductDetailHeadUI
      data={props.data}
      sliderSettings={sliderSettings}
      currentSlide={currentSlide}
      onClickMoveToPayOptions={onClickMoveToPayOptions}
    />
  );
}

/*
 * Author : Seongpyo Hong
 * FileName: ProductDetailReview.container.tsx
 * Date: 2022-07-04 17:03:31
 * Description :
 */

import { useState } from "react";
import ProductDetailReviewUI from "./ProductDetailReview.presenter";

export default function ProductDetailReview() {
  const [rating, setRating] = useState(0);

  const onChangeRating = (value: number) => {
    setRating(value);
  };
  return (
    <ProductDetailReviewUI rating={rating} onChangeRating={onChangeRating} />
  );
}

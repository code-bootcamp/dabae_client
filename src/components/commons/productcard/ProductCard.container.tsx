import ProductCardPresenter from "./ProductCard.presenter";
import { useState } from "react";
import { FETCH_COURSES } from "./ProductCard.queries";
import { useQuery } from "@apollo/client";

export default function ProductCardContainer() {
  const [isActive, setIsActive] = useState(false);

  const { data } = useQuery(FETCH_COURSES);

  const onClickLike = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <ProductCardPresenter
      data={data}
      isActive={isActive}
      onClickLike={onClickLike}
    />
  );
}

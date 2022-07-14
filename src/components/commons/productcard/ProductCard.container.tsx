import ProductCardPresenter from "./ProductCard.presenter";
import { useState } from "react";

export default function ProductCardContainer() {
  const [isActive, setIsActive] = useState(false);

  const onClickLike = () => {
    setIsActive((prev) => !prev);
  };

  return <ProductCardPresenter isActive={isActive} onClickLike={onClickLike} />;
}

import ProductCardPresenter from "./ProductCard.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { IProductCardContainer } from "./ProductCard.types";

export default function ProductCardContainer(props: IProductCardContainer) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const onClickLike = () => {
    setIsActive((prev) => !prev);
  };

  const onClickMoveToDetail = (event: any) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <>
      {props.el?.id && (
        <ProductCardPresenter
          el={props.el}
          isActive={isActive}
          onClickLike={onClickLike}
          onClickMoveToDetail={onClickMoveToDetail}
        />
      )}
    </>
  );
}

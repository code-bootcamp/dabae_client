import ProductCardPresenter from "./ProductCard.presenter";
import { useState } from "react";
import { FETCH_COURSES } from "./ProductCard.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductCardContainer() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const { data } = useQuery(FETCH_COURSES);

  const onClickLike = () => {
    setIsActive((prev) => !prev);
  };

  const onClickMoveToDetail = (event: any) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <ProductCardPresenter
      data={data}
      isActive={isActive}
      onClickLike={onClickLike}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}

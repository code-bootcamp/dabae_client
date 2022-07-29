import ProductCardPresenter from "./ProductCard.presenter";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import { IProductCardContainer } from "./ProductCard.types";
import { useMutation } from "@apollo/client";
import { TOGGLE_PICK } from "./ProductCard.queries";

export default function ProductCardContainer(props: IProductCardContainer) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [pick] = useMutation(TOGGLE_PICK);

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  const onTogglePick = async (e: MouseEvent<HTMLImageElement>) => {
    try {
      await pick({
        variables: {
          courseId: e.currentTarget.id,
        },
      });
      setIsActive((prev) => !prev);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      {props.el?.id && (
        <ProductCardPresenter
          el={props.el}
          isActive={isActive}
          onClickMoveToDetail={onClickMoveToDetail}
          onTogglePick={onTogglePick}
        />
      )}
    </>
  );
}

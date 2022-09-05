import ProductCardPresenter from "./ProductCard.presenter";
import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IProductCardContainer } from "./ProductCard.types";
import { useMutation } from "@apollo/client";
import { TOGGLE_PICK } from "./ProductCard.queries";

export default function ProductCardContainer(props: IProductCardContainer) {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const [pick] = useMutation(TOGGLE_PICK);

  useEffect(() => {
    props.pickList?.fetchPicksByUser.forEach((el: any) => {
      if (el.id === props.el.id) {
        return setIsActive(true);
      }
    });
  }, [props.pickList?.fetchPicksByUser]);

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  const onTogglePick = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      const result = await pick({
        variables: {
          courseId: e.currentTarget.id,
        },
      });
      setIsActive(result.data?.togglePick);
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

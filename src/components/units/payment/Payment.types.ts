import { Dispatch, SetStateAction } from "react";

export interface IPaymentPresenter {
  toggle: boolean;
  personCount: number;
  setToggle: Dispatch<SetStateAction<boolean>>;
  decreaseCount: () => void;
  increaseCount: () => void;
  onClickPaymentMove: () => void;
}

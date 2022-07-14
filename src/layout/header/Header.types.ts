import { ChangeEvent } from "react";

export interface IHeaderPresenter {
  open: boolean;
  my: boolean;
  setOpen: any;
  setMy: any;
  search: string;
  SignupMove: () => void;
  LoginMove: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

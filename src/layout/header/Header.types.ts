import { ChangeEvent } from "react";

export interface IHeaderPresenter {
  open: boolean;
  my: boolean;
  setOpen: any;
  setMy: any;
  search: string;
  data: any;
  SignupMove: () => void;
  LoginMove: () => void;
  logout: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

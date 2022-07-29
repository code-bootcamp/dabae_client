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
  hostSignMove: () => void;
  logout: () => void;
  saveMove: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

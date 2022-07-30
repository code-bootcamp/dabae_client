import { ChangeEvent } from "react";

// container
export interface IHeaderContanier {
  search: string;
  onClickSearch: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickKeyPress: (e: any) => void;
}

// presenter
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
  onClickSearch: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickKeyPress: (e: any) => void;
}

import { ChangeEvent } from "react";

// container
export interface IHeaderContanier {
  search: any;
  searchList: any;
  onClickSearch: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

// presenter
export interface IHeaderPresenter {
  open: boolean;
  my: boolean;
  setOpen: any;
  setMy: any;
  search: string;
  data: any;
  searchList: any;
  SignupMove: () => void;
  LoginMove: () => void;
  hostSignMove: () => void;
  logout: () => void;
  saveMove: () => void;
  onClickSearch: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

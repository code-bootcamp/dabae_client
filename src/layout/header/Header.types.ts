import { ChangeEvent, KeyboardEvent } from "react";

// container
export interface IHeaderContanier {
  search: string;
  onClickSearch: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

// presenter
export interface IHeaderPresenter {
  open: boolean;
  my: boolean;
  setOpen: (open: boolean) => void;
  setMy: (my: boolean) => void;
  search: string;
  data: {
    fetchLoginUser: {
      id: string;
      email: string;
      nickname: string;
      isHost: boolean;
    };
  };
  SignupMove: () => void;
  LoginMove: () => void;
  hostSignMove: () => void;
  logout: () => void;
  saveMove: () => void;
  onClickSearch: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

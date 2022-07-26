import { ChangeEvent } from "react";

export interface ISeceesionPresenter {
  password: string;
  isChecked: boolean;
  BackMyMove: () => void;
  onDelteUser: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

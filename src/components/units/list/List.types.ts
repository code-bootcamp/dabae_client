import { ChangeEvent } from "react";

// container
export interface IListContainer {
  searchList: any;
  pickList: any;
}

// presenter
export interface IListPresenter {
  searchList: any;
  pickList: any;
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

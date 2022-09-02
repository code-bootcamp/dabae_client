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
  refetch: any;
  onLoadMore: () => void;
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

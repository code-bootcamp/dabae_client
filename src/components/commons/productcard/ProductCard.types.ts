import { MouseEvent } from "react";

// Container Interface
export interface IProductCardContainer {
  el: any;
}

// Presenter Interface
export interface IProductCardPresenter {
  isActive: boolean;
  el: any;
  onClickMoveToDetail: (event: any) => void;
  onTogglePick: (e: MouseEvent<HTMLDivElement>) => void;
}

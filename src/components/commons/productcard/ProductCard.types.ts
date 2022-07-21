// Container Interface
export interface IProductCardContainer {
  el: any;
}

// Presenter Interface
export interface IProductCardPresenter {
  isActive: boolean;
  el: any;
  onClickLike: () => void;
  onClickMoveToDetail: (event: any) => void;
}

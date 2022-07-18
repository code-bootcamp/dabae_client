export interface IProductCardPresenter {
  isActive: boolean;
  data: any;
  onClickLike: () => void;
  onClickMoveToDetail: (event: any) => void;
}

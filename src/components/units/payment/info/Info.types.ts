export interface IInfoContainer {
  data: any;
  setPage: any;
  courseTime: any;
  currentPrice: number;
}

export interface IInfoPresenter {
  data: any;
  courseTime: any;
  currentPrice: number;
  isModalVisible: {
    service: boolean;
    agree: boolean;
  };
  onAgreeModal: () => void;
  onServiceModal: () => void;
  onClickPaymentMove: () => void;
}

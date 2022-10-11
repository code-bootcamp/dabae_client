export interface IInfoContainer {
  data: any;
  userData: any;
  setPage: any;
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
  setPaymentId: any;
}

export interface IInfoPresenter {
  data: any;
  userData: any;
  setPage: any;
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
  setPaymentId: any;
  point: number;
  onChangePoint: any;
  onClickUseAllPoints: any;
  isModalVisible: {
    service: boolean;
    agree: boolean;
  };
  onAgreeModal: () => void;
  onServiceModal: () => void;
}

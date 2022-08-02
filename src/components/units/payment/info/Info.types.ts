export interface IInfoContainer {
  data: any;
  userData: any;
  setPage: any;
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
}

export interface IInfoPresenter {
  data: any;
  userData: any;
  setPage: any;
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
  isModalVisible: {
    service: boolean;
    agree: boolean;
  };
  onAgreeModal: () => void;
  onServiceModal: () => void;
}

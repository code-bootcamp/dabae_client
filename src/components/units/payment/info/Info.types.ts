export interface IInfoPresenter {
  isModalVisible: {
    service: boolean;
    agree: boolean;
  };
  onAgreeModal: () => void;
  onServiceModal: () => void;
  onClickPaymentMove: () => void;
}

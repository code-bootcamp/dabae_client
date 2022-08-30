export interface IMyPresenter {
  login: any;
  logout: () => void;
  onToggleModal: any;
  modalVisible: boolean;
  onChangePrice: any;
  requestPay: any;
}

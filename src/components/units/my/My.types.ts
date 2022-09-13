export interface IMyPresenter {
  login: {
    fetchLoginUser: {
      id: string;
      email: string;
      nickname: string;
      phone: string;
      gender: boolean;
      birth: Date;
      isHost: boolean;
      profileImageURL: string;
      point: number;
    };
  };
  logout: () => void;
  onToggleModal: any;
  modalVisible: boolean;
  onChangePrice: any;
  requestPay: any;
}

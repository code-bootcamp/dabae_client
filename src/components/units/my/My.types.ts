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
    };
  };
  logout: () => void;
}

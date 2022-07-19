import { ChangeEvent, RefObject } from "react";

export interface IInfoEditPresenter {
  data: any;
  isModalVisible: boolean;
  passwordNewMessage: string;
  passwordConfirmNewMessage: string;
  isNewPassword: boolean;
  isNewPasswordConfirm: boolean;
  profileRef: RefObject<HTMLInputElement>;
  gender: boolean;
  onChageNewPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChageNewPasswordConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  changeNewPassword: () => void;
  currentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  BackMyMove: () => void;
  onToggleModal: () => void;
  ProfileUpload: () => void;
  changeNewUser: () => void;
  changeNickname: (e: ChangeEvent<HTMLInputElement>) => void;
  clickChagneGender: (gender: boolean) => void;
}

export interface IUserVariables {
  email: string;
  updateUserInput: {
    nickname?: string;
    gender?: boolean;
  };
}

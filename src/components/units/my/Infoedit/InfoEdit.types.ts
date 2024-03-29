import { ChangeEvent, RefObject } from "react";

export interface IInfoEditPresenter {
  data: {
    fetchLoginUser: {
      id: string;
      email: string;
      nickname: string;
      phone: string;
      gender: boolean;
      birth: string;
      profileImageURL: string;
    };
  };
  isModalVisible: boolean;
  passwordNewMessage: string;
  passwordConfirmNewMessage: string;
  isNewPassword: boolean;
  isNewPasswordConfirm: boolean;
  profileRef: RefObject<HTMLInputElement>;
  gender: boolean;
  profileImageURL: string;
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
  onChangeProfileImg: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IUserVariables {
  email: string;
  updateUserInput: {
    nickname?: string;
    gender?: boolean;
    profileImageURL?: string;
  };
}

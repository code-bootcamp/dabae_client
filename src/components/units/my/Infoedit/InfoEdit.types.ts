import { ChangeEvent, RefObject } from "react";

export interface IInfoEditPresenter {
  isModalVisible: boolean;
  passwordNewMessage: string;
  passwordConfirmNewMessage: string;
  isNewPassword: boolean;
  isNewPasswordConfirm: boolean;
  profileRef: RefObject<HTMLInputElement>;
  onChageNewPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChageNewPasswordConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  changeNewPassword: () => void;
  currentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  BackMyMove: () => void;
  onToggleModal: () => void;
  ProfileUpload: () => void;
}

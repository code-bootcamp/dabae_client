import { RefObject } from "react";

export interface IInfoEditPresenter {
  isModalVisible: boolean;
  profileRef: RefObject<HTMLInputElement>;
  BackMyMove: () => void;
  onToggleModal: () => void;
  ProfileUpload: () => void;
}

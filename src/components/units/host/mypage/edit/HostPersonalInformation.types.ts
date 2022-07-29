import { ChangeEvent } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export type fetchHostUserDataType = {
  email: string;
  nickname: string;
  profileImageURL: string;
  phone: string;
  businessName: string;
  businessNumber: string;
  account: string;
  bank: string;
  gender: boolean;
};

export interface IHostPersonalInformationUIProps {
  getValues?: (payload?: string | string[]) => Object;
  methods: UseFormReturn<FieldValues, object>;
  fetchHostUserData: fetchHostUserDataType;
  isOpenDeleteModal: boolean;
  isOpenNewPasswordModal: boolean;
  changeDeleteToggle: () => void;
  changePasswordToggle: () => void;
  deleteHost: () => void;
  updateNewPassword: () => void;
  updateHostInformation: () => void;
  handleChangeGender: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNicknameDuplicateCheck: () => void;
  handleChangeNickName: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type updateUserInputType = {
  nickname?: string;
  profileImageURL?: string;
  businessName?: string;
  businessNumber?: string;
  account?: string;
  bank?: string;
  gender?: boolean;
  birth?: Date;
  ProfileImageURL?: string;
};

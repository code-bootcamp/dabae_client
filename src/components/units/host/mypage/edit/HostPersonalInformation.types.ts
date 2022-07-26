import { FieldValues, UseFormReturn } from "react-hook-form";

export type fetchHostUserDataType = {
  email: string;
  nickname: string;
  profileImageURL: string;
  phone: string;
  businessName: string;
  businessNumber: string;
  account: string;
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
  UpdateHostInformation: () => void;
}

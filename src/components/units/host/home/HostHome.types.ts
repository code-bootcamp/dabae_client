export interface IHostHomeProps {
  fetchHostUserData: any;
  refetchHostUser: any;
}

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

export interface IHostHomeUIProps {
  onClickMenu: (menu: string, submenu: string) => () => void;
  activeMenu?: string | string[] | undefined;
  activeSubMenu?: string | string[] | undefined;
  menuObject: any;
  router: any;
  fetchHostUserData: fetchHostUserDataType;
  refetchHostUser: any;
}

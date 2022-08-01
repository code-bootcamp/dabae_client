export interface IHostSideUIProps {
  isHideMenu: boolean;
  onClickHideMenu: () => void;
  onClickMenu: (menu: string, submenu: string) => () => void | undefined;
  activeMenu: string;
  activeSubMenu: string;
  fetchHostUserData: {
    email: string;
    nickname: string;
    profileImageURL: string;
  };
  onClickActiveMenu: (activeMenu: string) => () => void;
  activeClickMenu: string;
}

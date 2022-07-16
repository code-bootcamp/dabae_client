import { useState } from "react";
import HostSideUI from "./HostSide.presenter";

/**
 * Author : Sukyung Lee
 * FileName: HostSide.container.tsx
 * Date: 2022-07-06 20:54:36
 * Description : 호스트 좌측 메뉴 사이드 바 컨테이너
 * ParentComponent : HostHome.container.tsx
 */
const HostSide = (props: any) => {
  const [isHideMenu, setIsHideMenu] = useState(false);

  const onClickHideMenu = () => {
    setIsHideMenu((prev) => !prev);
  };

  return (
    <HostSideUI
      {...props}
      isHideMenu={isHideMenu}
      onClickHideMenu={onClickHideMenu}
    />
  );
};
export default HostSide;

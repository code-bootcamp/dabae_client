/**
 * Author : Sukyung Lee
 * FileName: HostHome.container.tsx
 * Date: 2022-07-06 03:08:48
 * Description :
 */

import { useRouter } from "next/router";
import { useState } from "react";
import HostHomeUI from "./HostHome.presenter";

export default function HostHome() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(router.query?.menu);
  const [activeSubMenu, setActiveSubMenu] = useState(router.query?.submenu);

  const onClickMenu = (menu: string, submenu: string) => () => {
    setActiveMenu(menu);
    setActiveSubMenu(submenu);
    router.push("/host/[menu]/[submenu]", `/host/${menu}/${submenu}`, {
      shallow: true,
    });
  };

  const menuObject = {
    home: "대시보드 홈",
    class: "수업 관리",
    client: "고객 관리",
    money: "정산 관리",
    mypage: "호스트 관리",
    setting: "설정",
  };

  return (
    <>
      {typeof window === "undefined" ? (
        <> </>
      ) : (
        <HostHomeUI
          onClickMenu={onClickMenu}
          activeMenu={activeMenu || router.query.menu}
          activeSubMenu={activeSubMenu || router.query.submenu}
          router={router}
          menuObject={menuObject}
        />
      )}
    </>
  );
}

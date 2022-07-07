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
    dashboard: {
      home: "대시보드 홈",
      setting: "설정",
    },
    class: {
      create: "수업 등록",
      now: "현재 수업 관리",
      all: "전체 수업 관리",
    },
    client: {
      comment: "유저 후기조회",
      analysis: "유저 분석",
    },
    money: {
      current_calculate: "이번달 정산내역",
      all_calculate: "전체 정산내역",
    },
    mypage: {
      policy: "약관 및 정책",
      update: "호스트 정보 수정",
      delete: "호스트 탈퇴",
    },
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

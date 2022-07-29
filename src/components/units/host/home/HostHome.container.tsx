import { useRouter } from "next/router";
import { useState } from "react";
import HostHomeUI from "./HostHome.presenter";
import { IHostHomeProps } from "./HostHome.types";

/**
 * Author : Sukyung Lee
 * FileName: HostHome.container.tsx
 * Date: 2022-07-06 03:08:48
 * Description :
 */

const menuObject = {
  dashboard: {
    home: "대시보드 홈",
    setting: "설정",
  },
  class: {
    create: "수업 등록",
    all: "수업 조회",
  },
  client: {
    comment: "유저 후기조회",
    analysis: "유저 분석",
  },
  transaction: {
    clientPaymentHistory: "고객 결제 내역",
    allTransactionHistory: "전체 정산 내역",
  },
  mypage: {
    policy: "약관 및 정책",
    edit: "개인 정보 수정",
  },
};

export default function HostHome(props: IHostHomeProps) {
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
          fetchHostUserData={props.fetchHostUserData}
          refetchHostUser={props.refetchHostUser}
        />
      )}
    </>
  );
}

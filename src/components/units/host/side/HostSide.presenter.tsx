import { CF } from "@/styles/commonComponentStyle";
import HamburgerMenu from "../../../commons/button/HamburgerMenu";
import * as S from "./HostSide.styles";
import { IHostSideUIProps } from "./HostSide.types";
import { useRouter } from "next/router";

/**
 * Author : Sukyung Lee
 * FileName: HostSide.presenter.tsx
 * Date: 2022-07-06 20:57:57
 * Description : 호스트 좌측 메뉴 사이드 바 프레젠터
 */

const HostSideUI = (props: IHostSideUIProps) => {
  const router = useRouter();
  return (
    <S.Container isHideMenu={props.isHideMenu}>
      <HamburgerMenu
        isHideMenu={props.isHideMenu}
        onClickHideMenu={props.onClickHideMenu}
      />
      <S.LogoDiv>
        <a href="/">
          <S.LogoImage src="/images/logo.svg" />
        </a>
      </S.LogoDiv>
      <CF.ColumnCenterDiv>
        <S.ProfileImgDiv>
          {
            // <img src="/images/host/3d_man_brown_hat.svg" />
            props.fetchHostUserData?.profileImageURL ? (
              <S.HostProfileImg
                src={`https://storage.googleapis.com/${props.fetchHostUserData?.profileImageURL}`}
              />
            ) : (
              <S.HostProfileImg src="/images/host/3d_man_brown_hat.svg" />
            )
          }
        </S.ProfileImgDiv>
        <S.ProfileNickNameDiv>
          {props.fetchHostUserData?.nickname}
        </S.ProfileNickNameDiv>
      </CF.ColumnCenterDiv>
      <CF.ColumnCenterDiv>
        <S.HostMenuItemDiv>
          <S.MenuButton
            onClick={() => router.push("/host/dashboard/home")}
            active={
              router.query.menu === "dashboard" &&
              router.query.submenu === "home"
            }
          >
            <img src="/images/host/home_icon.svg" />
            <CF.RowBetweenDiv>
              대시보드 홈<div> </div>
            </CF.RowBetweenDiv>
          </S.MenuButton>
        </S.HostMenuItemDiv>
        <S.HostMenuItemDiv>
          <S.MenuButton
            onClick={props.onClickActiveMenu("class")}
            active={props.activeMenu === "class"}
          >
            <img src="/images/host/calender_icon.svg" />
            <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
              수업 관리
              <img src="/images/host/under_arrow_icon.svg" />
            </CF.RowBetweenDiv>
          </S.MenuButton>
        </S.HostMenuItemDiv>
        {props.activeClickMenu === "class" && (
          <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
            <S.SubMenuButton
              onClick={() => router.push("/host/class/create")}
              active={router.query.submenu === "create"}
            >
              수업 등록
            </S.SubMenuButton>
            <S.SubMenuButton
              onClick={() => router.push("/host/class/list")}
              active={router.query.submenu === "list"}
            >
              수업 조회
            </S.SubMenuButton>
            <div> </div>
          </CF.ColumnLeftDiv>
        )}
        <S.HostMenuItemDiv>
          <S.MenuButton
            onClick={props.onClickActiveMenu("client")}
            active={props.activeMenu === "client"}
          >
            <img src="/images/host/audit_icon.svg" />
            <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
              고객 관리
              <img src="/images/host/under_arrow_icon.svg" />
            </CF.RowBetweenDiv>
          </S.MenuButton>
        </S.HostMenuItemDiv>
        {props.activeClickMenu === "client" && (
          <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
            <S.SubMenuButton
              onClick={() => router.push("/host/client/comment")}
              active={router.query.submenu === "comment"}
            >
              후기 조회
            </S.SubMenuButton>
            <S.SubMenuButton
              onClick={() => router.push("/host/client/analysis")}
              active={router.query.submenu === "analysis"}
            >
              유저 분석
            </S.SubMenuButton>
            <div> </div>
          </CF.ColumnLeftDiv>
        )}
        <S.HostMenuItemDiv>
          <S.MenuButton
            onClick={props.onClickActiveMenu("transaction")}
            active={props.activeMenu === "transaction"}
          >
            <img src="/images/host/dollar_icon.svg" />
            <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
              정산 관리
              <img src="/images/host/under_arrow_icon.svg" />
            </CF.RowBetweenDiv>
          </S.MenuButton>
        </S.HostMenuItemDiv>
        {props.activeClickMenu === "transaction" && (
          <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
            <S.SubMenuButton
              onClick={() =>
                router.push("/host/transaction/clientPaymentHistory")
              }
              active={router.query.submenu === "clientPaymentHistory"}
            >
              고객 결제 내역
            </S.SubMenuButton>
            <S.SubMenuButton
              onClick={() =>
                router.push("/host/transaction/allTransactionHistory")
              }
              active={router.query.submenu === "allTransactionHistory"}
            >
              전체 정산 내역
            </S.SubMenuButton>
            <div> </div>
          </CF.ColumnLeftDiv>
        )}
        <S.HostMenuItemDiv>
          <S.MenuButton
            onClick={props.onClickActiveMenu("mypage")}
            active={props.activeMenu === "mypage"}
          >
            <img src="/images/host/user_icon.svg" />
            <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
              프로필 관리
              <img src="/images/host/under_arrow_icon.svg" />
            </CF.RowBetweenDiv>
          </S.MenuButton>
        </S.HostMenuItemDiv>
        {props.activeClickMenu === "mypage" && (
          <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
            <S.SubMenuButton
              onClick={() => router.push("/host/mypage/policy")}
              active={router.query.submenu === "policy"}
            >
              약관 및 정책
            </S.SubMenuButton>
            <S.SubMenuButton
              onClick={() => router.push("/host/mypage/edit")}
              active={router.query.submenu === "edit"}
            >
              개인 정보 수정
            </S.SubMenuButton>
            <div> </div>
          </CF.ColumnLeftDiv>
        )}
        <S.HostMenuItemDiv>
          <S.MenuButton
            onClick={() => router.push("/host/dashboard/setting")}
            active={router.query.menu === "setting"}
          >
            <img src="/images/host/setting_icon.svg" />
            <CF.RowBetweenDiv>
              설정 <div> </div>
            </CF.RowBetweenDiv>
          </S.MenuButton>
        </S.HostMenuItemDiv>
      </CF.ColumnCenterDiv>
    </S.Container>
  );
};
export default HostSideUI;

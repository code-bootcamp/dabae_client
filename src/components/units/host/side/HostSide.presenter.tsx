import { CF } from "@/styles/commonComponentStyle";
import HamburgerMenu from "../../../commons/button/HamburgerMenu";
import * as S from "./HostSide.styles";

/**
 * Author : Sukyung Lee
 * FileName: HostSide.presenter.tsx
 * Date: 2022-07-06 20:57:57
 * Description : 호스트 좌측 메뉴 사이드 바 프레젠터
 */

interface IHostSideUIProps {
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
}

const HostSideUI = (props: IHostSideUIProps) => {
  console.log(props.fetchHostUserData);
  return (
    <>
      <HamburgerMenu
        isHideMenu={props.isHideMenu}
        onClickHideMenu={props.onClickHideMenu}
      />
      <S.Container isHideMenu={props.isHideMenu}>
        <S.LogoDiv>
          <a href="/">
            <S.Logo>다배</S.Logo>
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
              onClick={props.onClickMenu("dashboard", "home")}
              active={
                props.activeMenu === "dashboard" &&
                props.activeSubMenu === "home"
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
              onClick={props.onClickMenu("class", "create")}
              active={props.activeMenu === "class"}
            >
              <img src="/images/host/calender_icon.svg" />
              <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
                수업 관리
                <img src="/images/host/under_arrow_icon.svg" />
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
          {props.activeMenu === "class" && (
            <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
              <S.SubMenuButton
                onClick={props.onClickMenu("class", "create")}
                active={props.activeSubMenu === "create"}
              >
                수업 등록
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("class", "all")}
                active={props.activeSubMenu === "all"}
              >
                수업 조회
              </S.SubMenuButton>
              <div> </div>
            </CF.ColumnLeftDiv>
          )}
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("client", "comment")}
              active={props.activeMenu === "client"}
            >
              <img src="/images/host/audit_icon.svg" />
              <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
                고객 관리
                <img src="/images/host/under_arrow_icon.svg" />
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
          {props.activeMenu === "client" && (
            <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
              <S.SubMenuButton
                onClick={props.onClickMenu("client", "comment")}
                active={props.activeSubMenu === "comment"}
              >
                후기 조회
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("client", "analysis")}
                active={props.activeSubMenu === "analysis"}
              >
                유저 분석
              </S.SubMenuButton>
              <div> </div>
            </CF.ColumnLeftDiv>
          )}
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("transaction", "clientPaymentHistory")}
              active={props.activeMenu === "transaction"}
            >
              <img src="/images/host/dollar_icon.svg" />
              <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
                정산 관리
                <img src="/images/host/under_arrow_icon.svg" />
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
          {props.activeMenu === "transaction" && (
            <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
              <S.SubMenuButton
                onClick={props.onClickMenu(
                  "transaction",
                  "clientPaymentHistory"
                )}
                active={props.activeSubMenu === "clientPaymentHistory"}
              >
                고객 결제 내역
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu(
                  "transaction",
                  "allTransactionHistory"
                )}
                active={props.activeSubMenu === "allTransactionHistory"}
              >
                전체 정산 내역
              </S.SubMenuButton>
              <div> </div>
            </CF.ColumnLeftDiv>
          )}
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("mypage", "policy")}
              active={props.activeMenu === "mypage"}
            >
              <img src="/images/host/user_icon.svg" />
              <CF.RowBetweenDiv padding={"0px 10px 0px 0px"}>
                프로필 관리
                <img src="/images/host/under_arrow_icon.svg" />
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
          {props.activeMenu === "mypage" && (
            <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
              <S.SubMenuButton
                onClick={props.onClickMenu("mypage", "policy")}
                active={props.activeSubMenu === "policy"}
              >
                약관 및 정책
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("mypage", "edit")}
                active={props.activeSubMenu === "edit"}
              >
                개인 정보 수정
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("mypage", "delete")}
                active={props.activeSubMenu === "delete"}
              >
                호스트 탈퇴
              </S.SubMenuButton>
              <div> </div>
            </CF.ColumnLeftDiv>
          )}
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("dashboard", "setting")}
              active={props.activeMenu === "setting"}
            >
              <img src="/images/host/setting_icon.svg" />
              <CF.RowBetweenDiv>
                설정 <div> </div>
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
        </CF.ColumnCenterDiv>
      </S.Container>
    </>
  );
};
export default HostSideUI;

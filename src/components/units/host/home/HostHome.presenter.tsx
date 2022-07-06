import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostHome.styles";

/**
 * Author : Sukyung Lee
 * FileName: HostHome.presenter.tsx
 * Date: 2022-07-06 03:09:26
 * Description :
 */
const HostHomeUI = (props: any) => {
  return (
    <CF.RowDiv>
      <S.ColumnDiv>
        <S.LogoDiv>
          <img src="/images/host/3d_man_brown_hat.svg" alt="" />
        </S.LogoDiv>
        <CF.ColumnCenterDiv height={"160px"}>
          <S.ProfileImgDiv>
            <img src="/images/host/3d_man_brown_hat.svg" alt="" />
          </S.ProfileImgDiv>
          <S.ProfileNickNameDiv> 홍길동 </S.ProfileNickNameDiv>
        </CF.ColumnCenterDiv>
        <CF.ColumnCenterDiv padding={"0px 20px"}>
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("dashboard", "home")}
              active={
                props.activeMenu === "dashboard" &&
                props.activeSubMenu === "home"
              }
            >
              <img src="/images/host/home_icon.svg" alt="" />
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
              <img src="/images/host/calender_icon.svg" alt="" />
              <CF.RowBetweenDiv>
                수업 관리
                <img src="/images/host/under_arrow_icon.svg" alt="" />
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
          {props.activeMenu === "class" && (
            <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
              <S.SubMenuButton
                onClick={props.onClickMenu("class", "create")}
                active={props.activeSubMenu === "create"}
              >
                수업등록
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("class", "now")}
                active={props.activeSubMenu === "now"}
              >
                현재수업관리
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("class", "all")}
                active={props.activeSubMenu === "all"}
              >
                전체수업관리
              </S.SubMenuButton>
              <div> </div>
            </CF.ColumnLeftDiv>
          )}
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("client", "comment")}
              active={props.activeMenu === "client"}
            >
              <img src="/images/host/audit_icon.svg" alt="" />
              <CF.RowBetweenDiv>
                고객 관리
                <img src="/images/host/under_arrow_icon.svg" alt="" />
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
              onClick={props.onClickMenu("money", "current_calculate")}
              active={props.activeMenu === "money"}
            >
              <img src="/images/host/dollar_icon.svg" alt="" />
              <CF.RowBetweenDiv>
                정산 관리
                <img src="/images/host/under_arrow_icon.svg" alt="" />
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
          {props.activeMenu === "money" && (
            <CF.ColumnLeftDiv padding={"0px 0px 0px 20px"} gap={10}>
              <S.SubMenuButton
                onClick={props.onClickMenu("money", "current_calculate")}
                active={props.activeSubMenu === "current_calculate"}
              >
                이번달 정산내역
              </S.SubMenuButton>
              <S.SubMenuButton
                onClick={props.onClickMenu("money", "all_calculate")}
                active={props.activeSubMenu === "all_calculate"}
              >
                전체 정산내역
              </S.SubMenuButton>
              <div> </div>
            </CF.ColumnLeftDiv>
          )}
          <S.HostMenuItemDiv>
            <S.MenuButton
              onClick={props.onClickMenu("mypage", "policy")}
              active={props.activeMenu === "mypage"}
            >
              <img src="/images/host/user_icon.svg" alt="" />
              <CF.RowBetweenDiv>
                프로필 관리
                <img src="/images/host/under_arrow_icon.svg" alt="" />
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
                onClick={props.onClickMenu("mypage", "update")}
                active={props.activeSubMenu === "update"}
              >
                호스트 정보 수정
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
              <img src="/images/host/setting_icon.svg" alt="" />
              <CF.RowBetweenDiv>
                설정 <div> </div>
              </CF.RowBetweenDiv>
            </S.MenuButton>
          </S.HostMenuItemDiv>
        </CF.ColumnCenterDiv>
      </S.ColumnDiv>
      <S.ColumnDiv2>
        <S.TitleDiv> {props.menuObject[props.router.query.menu]} </S.TitleDiv>
        <div> 메인 내용 </div>
      </S.ColumnDiv2>
    </CF.RowDiv>
  );
};
export default HostHomeUI;

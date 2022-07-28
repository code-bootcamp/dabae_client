import HostClassCreate from "../class/create/HostClassCreate.container";
import HostClassManage from "../class/manage/HostClassManage.container";
import HostDashboard from "../dashboard/HostDashboard.container";
import HostPersonalInformation from "../mypage/edit/HostPersonalInformation.container";
import HostSide from "../side/HostSide.container";
import HostAllTransactionHistory from "../transaction/allTransactionHistory/HostAllTransactionHistory.container";
import HostClientPaymentHistory from "../transaction/clientPaymentHistory/HostClientPaymentHistory.container";
import * as S from "./HostHome.styles";
import { IHostHomeUIProps } from "./HostHome.types";

/**
 * Author : Sukyung Lee
 * FileName: HostHome.presenter.tsx
 * Date: 2022-07-06 03:09:26
 * Description :
 */

const HostHomeUI = (props: IHostHomeUIProps) => {
  return (
    <S.Container>
      <HostSide {...props} />
      <S.ColumnDiv1>
        <S.TitleDiv>
          {props.router.query.menu &&
            props.menuObject[props.router.query.menu][
              props.router.query.submenu
            ]}
        </S.TitleDiv>
        {props.activeMenu === "dashboard" && props.activeSubMenu === "home" && (
          <HostDashboard />
        )}
        {props.activeMenu === "class" && props.activeSubMenu === "create" && (
          <HostClassCreate onClickMenu={props.onClickMenu} />
        )}
        {props.activeMenu === "class" && props.activeSubMenu === "all" && (
          <HostClassManage fetchHostUserData={props.fetchHostUserData} />
        )}
        {props.activeMenu === "transaction" &&
          props.activeSubMenu === "clientPaymentHistory" && (
            <HostClientPaymentHistory />
          )}
        {props.activeMenu === "transaction" &&
          props.activeSubMenu === "allTransactionHistory" && (
            <HostAllTransactionHistory />
          )}
        {props.activeMenu === "mypage" && props.activeSubMenu === "edit" && (
          <HostPersonalInformation
            fetchHostUserData={props.fetchHostUserData}
            refetchHostUser={props.refetchHostUser}
          />
        )}
      </S.ColumnDiv1>
    </S.Container>
  );
};
export default HostHomeUI;

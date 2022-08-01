import HostClassCreate from "../class/create/HostClassCreate.container";
import HostClassList from "../class/list/HostClassList.container";
import HostClassUpdate from "../class/update/HostClassUpdate.container";
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
        {props.router.query.menu === "dashboard" &&
          props.router.query.submenu === "home" && <HostDashboard />}
        {props.router.query.menu === "class" &&
          props.router.query.submenu === "create" && (
            <HostClassCreate onClickMenu={props.onClickMenu} />
          )}
        {props.router.query.menu === "class" &&
          props.router.query.submenu === "update" && (
            <HostClassUpdate onClickMenu={props.onClickMenu} />
          )}
        {props.router.query.menu === "class" &&
          props.router.query.submenu === "list" && (
            <>
              {props.fetchHostUserData?.id ? (
                <HostClassList
                  fetchHostUserData={props.fetchHostUserData}
                  onClickMenu={props.onClickMenu}
                />
              ) : (
                <></>
              )}
            </>
          )}
        {props.router.query.menu === "transaction" &&
          props.router.query.submenu === "clientPaymentHistory" && (
            <HostClientPaymentHistory />
          )}
        {props.router.query.menu === "transaction" &&
          props.router.query.submenu === "allTransactionHistory" && (
            <HostAllTransactionHistory />
          )}
        {props.router.query.menu === "mypage" &&
          props.router.query.submenu === "edit" && (
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

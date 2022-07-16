import HostClassCreate from "../class/create/HostClassCreate.container";
import HostClassManage from "../class/manage/HostClassManage.container";
import HostPersonalInformation from "../mypage/edit/HostPersonalInformation.container";
import HostSide from "../side/HostSide.container";
import HostAllTransactionHistory from "../transaction/allTransactionHistory/HostAllTransactionHistory.container";
import HostClientPaymentHistory from "../transaction/clientPaymentHistory/HostClientPaymentHistory.container";
import * as S from "./HostHome.styles";

/**
 * Author : Sukyung Lee
 * FileName: HostHome.presenter.tsx
 * Date: 2022-07-06 03:09:26
 * Description :
 */
const HostHomeUI = (props: any) => {
  return (
    <S.Container>
      <HostSide {...props} />
      <S.ColumnDiv2>
        <S.TitleDiv>
          {
            props.menuObject[props.router.query.menu][
              props.router.query.submenu
            ]
          }
        </S.TitleDiv>
        {props.activeMenu === "class" && props.activeSubMenu === "create" && (
          <HostClassCreate />
        )}
        {props.activeMenu === "class" && props.activeSubMenu === "all" && (
          <HostClassManage />
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
          <HostPersonalInformation />
        )}
      </S.ColumnDiv2>
    </S.Container>
  );
};
export default HostHomeUI;

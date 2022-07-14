import HostClassCreate from "../class/create/HostClassCreate.container";
import HostClassManage from "../class/manage/HostClassManage.container";
import HostSide from "../side/HostSide.container";
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
        {props.activeMenu === "class" &&
          ((props.activeSubMenu === "create" && <HostClassCreate />) ||
            (props.activeSubMenu === "all" && <HostClassManage />))}
      </S.ColumnDiv2>
    </S.Container>
  );
};
export default HostHomeUI;

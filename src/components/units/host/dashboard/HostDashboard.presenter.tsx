import * as S from "./HostDashboard.styles";
import RatingChart from "./RatingChart";
import ClientCountChart from "./ClientCountChart";
import TransactionChart from "./TransactionChart";
import { CF } from "@/styles/commonComponentStyle";

/**
 * Author : Sukyung Lee
 * FileName: HostDashboard.presenter.tsx
 * Date: 2022-07-17 21:22:56
 * Description : 호스트 대시 보드
 */

interface IHostDashboardUIProps {
  renderState: boolean;
  transactionData: number[];
  ratingData: number[];
  clientCountData: number[];
}

const HostDashboardUI = (props: IHostDashboardUIProps) => {
  return (
    <div>
      {props.renderState && (
        <S.Container>
          <S.Container1>
            <S.ItemDiv1>
              <span> 저번달 수입 </span>
              <span> 123 </span>
            </S.ItemDiv1>
            <S.ItemDiv2>
              <span> 전체 수입 </span>
              <span> 123 </span>
            </S.ItemDiv2>
            <S.ItemDiv3>
              <span> 후기 갯수 </span>
              <span> 123 </span>
            </S.ItemDiv3>
            <S.ItemDiv4>
              <span> 전체 수강생 수 </span>
              <span> 123 </span>
            </S.ItemDiv4>
          </S.Container1>
          <S.Container2>
            <CF.RowDiv gap={10} height={"100%"} width={"100%"}>
              <RatingChart ratingData={props.ratingData} />
              <ClientCountChart clientCountData={props.clientCountData} />
            </CF.RowDiv>
          </S.Container2>
          <S.Container3>
            <CF.RowDiv gap={10} height={"100%"} width={"100%"}>
              <TransactionChart />
            </CF.RowDiv>
          </S.Container3>
          {/* <div> 평점, 후기 </div>
            <div> 결제 </div>
      <div> 금액 </div>
      <div> 진행중인 강좌 </div>
      <div> 6개월 수입 </div>
      <div> 일정 </div> */}
        </S.Container>
      )}
    </div>
  );
};
export default HostDashboardUI;

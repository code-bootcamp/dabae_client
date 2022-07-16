import * as S from "./HostClientPaymentHistory.styles";
import Input from "@/src/components/commons/input/Input";
import { CF } from "@/styles/commonComponentStyle";
import moment from "moment";
import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";
import Button from "@/src/components/commons/button/Button";
import Pagination from "@/src/components/commons/pagination/Pagination";

/*
 * Author : Sukyung Lee
 * FileName: HostClientPaymentHistory.presenter.tsx
 * Date: 2022-07-13 19:03:13
 * Description : 고객 결제 내역 UI
 */
const HostClientPaymentHistoryUI = (props: any) => {
  return (
    <S.Container>
      <S.SearchHeader>
        <CF.RowDiv height="30px" gap={10}>
          <S.SearchSelect defaultValue="courseName">
            <option value="courseName">클래스명</option>
            <option value="userName"> 유저명 </option>
          </S.SearchSelect>
          <Input
            placeholder="클래스 이름을 입력해주세요"
            register={props.register("searchData")}
            type="search"
            height="30px"
          />
          <Button height="40px" width="60px">
            검색
          </Button>
        </CF.RowDiv>
        <CF.RowDiv gap={10}>
          <S.RangePickerStyle
            onChange={props.onChangeSearchDate}
            format="YYYY/MM/DD"
            value={[
              moment(
                props.getValues("searchDate")[0] ||
                  dateFormat4y2m2d(new Date()),
                "YYYY-MM-DD"
              ),
              moment(
                props.getValues("searchDate")[1] ||
                  dateFormat4y2m2d(new Date()),
                "YYYY-MM-DD"
              ),
            ]}
          />
        </CF.RowDiv>
        <CF.RowDiv gap={10}>
          <S.SearchDateButton onClick={props.onClickSearchDate(["day", 0])}>
            오늘
          </S.SearchDateButton>
          <S.SearchDateButton onClick={props.onClickSearchDate(["month", 1])}>
            1개월
          </S.SearchDateButton>
          <S.SearchDateButton onClick={props.onClickSearchDate(["month", 6])}>
            6개월
          </S.SearchDateButton>
          <S.SearchDateButton onClick={props.onClickSearchDate(["year", 1])}>
            1년
          </S.SearchDateButton>
          <S.SearchDateButton onClick={props.onClickSearchDate(["year", 5])}>
            5년
          </S.SearchDateButton>
          <S.SearchDateButton onClick={props.onClickSearchDate(["all", 0])}>
            전체
          </S.SearchDateButton>
        </CF.RowDiv>
      </S.SearchHeader>
      <S.TransactionHeaderDiv>
        <S.RowCenterHeaderDiv1> 번호 </S.RowCenterHeaderDiv1>
        <S.RowCenterHeaderDiv2> 정보 </S.RowCenterHeaderDiv2>
        <S.RowCenterHeaderDiv3> 유저명 </S.RowCenterHeaderDiv3>
        <S.RowCenterHeaderDiv4> 상태 </S.RowCenterHeaderDiv4>
      </S.TransactionHeaderDiv>
      {Array(10)
        .fill(1)
        .map((i, index) => (
          <S.TransactionBodyDiv key={index}>
            <S.RowCenterBodyDiv1> {index + 1} </S.RowCenterBodyDiv1>
            <S.ResponsiveDiv>
              <S.RowCenterBodyDiv2>
                도비의 수업111111111111111
              </S.RowCenterBodyDiv2>
              <S.RowCenterBodyDiv3> 2022.07.16 12:00:44 </S.RowCenterBodyDiv3>
              <S.RowCenterBodyDiv4> 결제금액: 100,000 </S.RowCenterBodyDiv4>
            </S.ResponsiveDiv>
            <S.ResponsiveDiv>
              <S.RowCenterBodyDiv5>유저명1111</S.RowCenterBodyDiv5>
            </S.ResponsiveDiv>
            <S.RowCenterBodyDiv6>
              <S.Status> 활성 </S.Status>
              <S.Button type="button" status="blue">
                <span> 상세보기 </span>
              </S.Button>
            </S.RowCenterBodyDiv6>
          </S.TransactionBodyDiv>
        ))}
      <S.PaginationDiv>
        <Pagination
          refetch={""}
          // endPage={Math.ceil(boardsCountGQL?.fetchBoardsCount / 10)}
          endPage={Math.ceil(12)}
        />
      </S.PaginationDiv>
    </S.Container>
  );
};
export default HostClientPaymentHistoryUI;

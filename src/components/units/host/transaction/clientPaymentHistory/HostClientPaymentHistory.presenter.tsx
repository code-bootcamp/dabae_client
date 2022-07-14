import * as S from "./HostClientPaymentHistory.styles";
import Input from "@/src/components/commons/input/Input";
import { CF } from "@/styles/commonComponentStyle";
import moment from "moment";
import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";
import Button from "@/src/components/commons/button/Button";

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
          <CF.RowDiv width="70px"> 클래스명 : </CF.RowDiv>
          <Input
            placeholder="클래스 이름을 입력해주세요"
            register={props.register("searchData")}
            type="search"
            height="30px"
          />
          <Button height="40px" width="120px">
            검색
          </Button>
        </CF.RowDiv>
        <CF.RowDiv gap={10}>
          <S.SearchSelect defaultValue="classCreateDate">
            <option value="classCreateDate">상품등록일</option>
            <option value="classStartDate"> 판매시작일 </option>
            <option value="classEndDate"> 판매종료일 </option>
          </S.SearchSelect>
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
        <CF.RowDiv gap={10}>
          <input
            type="radio"
            name="classStatus"
            value="all"
            id="all"
            onChange={props.onChangeClassStatus}
            defaultChecked
          />
          <label htmlFor="all"> 모두 </label>
          <input
            type="radio"
            name="classStatus"
            value="working"
            id="working"
            onChange={props.onChangeClassStatus}
          />
          <label htmlFor="working"> 클래스 운영 중 </label>
          <input
            type="radio"
            name="classStatus"
            value="stop"
            id="stop"
            onChange={props.onChangeClassStatus}
          />
          <label htmlFor="stop"> 클래스 운영 종료 </label>
        </CF.RowDiv>
      </S.SearchHeader>
      <S.BorderDiv>
        <S.ManageHeaderDiv>
          <S.RowCenterNumberDiv> 번호 </S.RowCenterNumberDiv>
          <S.RowCenterDiv> 클래스 명 </S.RowCenterDiv>
          <S.RowCenterDiv> 결제 날짜 </S.RowCenterDiv>
          <S.RowCenterProgressStatusDiv>
            결제 금액(포인트사용)
          </S.RowCenterProgressStatusDiv>
          <S.RowCenterProgressStatusDiv>
            결제 유저명
          </S.RowCenterProgressStatusDiv>
          <S.RowCenterProgressStatusDiv> 상태 </S.RowCenterProgressStatusDiv>
          <S.RowCenterProgressStatusDiv>상세정보</S.RowCenterProgressStatusDiv>
          <S.RowCenterButtonDiv> </S.RowCenterButtonDiv>
        </S.ManageHeaderDiv>
      </S.BorderDiv>
      {/* {Array(10)
        .fill(1)
        .map((i, index) => (
          <S.BorderDiv key={index}>
            <S.ManageBodyDiv>
              <S.RowCenterNumberDiv> {index + 1} </S.RowCenterNumberDiv>
              <S.RowCenterDiv>잠자면서 들으면 아주 좋은 수업</S.RowCenterDiv>
              <S.RowCenterDiv>
                <S.OperatingDate>
                  <div> 2022-07-16 </div>
                  <div> ~ </div>
                  <div> 2022-07-17 </div>
                </S.OperatingDate>
              </S.RowCenterDiv>
              <S.RowCenterProgressStatusDiv>활성</S.RowCenterProgressStatusDiv>
              <S.RowCenterButtonDiv>
                <S.Button type="button">
                  <span> 상세 </span> <span> 보기 </span>
                </S.Button>
              </S.RowCenterButtonDiv>
            </S.ManageBodyDiv>
          </S.BorderDiv>
        ))} */}
    </S.Container>
  );
};
export default HostClientPaymentHistoryUI;

import Input from "@/src/components/commons/input/Input";
import { CF } from "@/styles/commonComponentStyle";
import { DatePicker } from "antd";
import * as S from "./HostClassManage.styles";
import moment from "moment";
import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";

/**
 * Author : Sukyung Lee
 * FileName: HostClassManage.presenter.tsx
 * Date: 2022-07-12 17:35:06
 * Description :
 */
const HostClassManageUI = (props: any) => {
  const { RangePicker } = DatePicker;

  return (
    <S.Container>
      <S.SearchHeader>
        <CF.RowDiv height="30px" gap={10}>
          <CF.RowDiv width="80px"> 클래스명 : </CF.RowDiv>
          <Input
            placeholder="클래스 이름을 입력해주세요"
            type="search"
            height="30px"
          />
        </CF.RowDiv>
        <CF.RowDiv gap={10}>
          <S.SearchSelect>
            <option value="classCreateDate"> 상품등록일 </option>
            <option value="classStartDate"> 판매시작일 </option>
            <option value="classEndDate"> 판매종료일 </option>
          </S.SearchSelect>
          <RangePicker
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
          <input type="checkbox" /> 판매중
          <input type="checkbox" /> 판매종료
        </CF.RowDiv>
      </S.SearchHeader>
      <S.BorderDiv>
        <S.ManageHeaderDiv>
          <S.RowCenterNumberDiv> 번호 </S.RowCenterNumberDiv>
          <S.RowCenterDiv> 클래스 명 </S.RowCenterDiv>
          <S.RowCenterDiv> 진행 기간 </S.RowCenterDiv>
          <S.RowCenterProgressStatusDiv> 상태</S.RowCenterProgressStatusDiv>
          <S.RowCenterButtonDiv> </S.RowCenterButtonDiv>
        </S.ManageHeaderDiv>
      </S.BorderDiv>
      {Array(10)
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
        ))}
    </S.Container>
  );
};
export default HostClassManageUI;

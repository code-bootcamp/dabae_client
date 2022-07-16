import Input from "@/src/components/commons/input/Input";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostClassManage.styles";
import moment from "moment";
import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";
import Button from "@/src/components/commons/button/Button";
import Pagination from "@/src/components/commons/pagination/Pagination";

/**
 * Author : Sukyung Lee
 * FileName: HostClassManage.presenter.tsx
 * Date: 2022-07-12 17:35:06
 * Description : 호스트 수업 관리 - 수업 조회
 */
const HostClassManageUI = (props: any) => {
  return (
    <S.Container>
      <S.SearchHeader>
        <CF.RowDiv height="30px" gap={10}>
          <S.InputClassTitle>클래스명 :</S.InputClassTitle>
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
      <S.ManageHeaderDiv>
        {/* 360-20 || 40, 140,100,60  */}
        <S.RowCenterHeaderDiv1> 번호 </S.RowCenterHeaderDiv1>
        <S.RowCenterHeaderDiv2> 클래스 명 </S.RowCenterHeaderDiv2>
        <S.RowCenterHeaderDiv3> 운영 기간 </S.RowCenterHeaderDiv3>
        <S.RowCenterHeaderDiv4> 상태</S.RowCenterHeaderDiv4>
      </S.ManageHeaderDiv>
      {Array(10)
        .fill(1)
        .map((i, index) => (
          <S.ManageBodyDiv key={index}>
            <S.RowCenterBodyDiv1>
              <div> {index + 1} </div>
            </S.RowCenterBodyDiv1>
            <S.RowCenterBodyDiv2>
              잠자면서 들으면 아주 좋은 수업
            </S.RowCenterBodyDiv2>
            <S.RowCenterBodyDiv3>
              <div> 2022-07-16 </div>
              <div> ~ </div>
              <div> 2022-07-17 </div>
            </S.RowCenterBodyDiv3>
            <S.RowCenterBodyDiv4>
              <S.Status> 활성 </S.Status>
              <S.Button type="button" status="blue">
                <span> 상세보기 </span>
              </S.Button>
            </S.RowCenterBodyDiv4>
          </S.ManageBodyDiv>
        ))}
      <S.PaginationDiv>
        <Pagination
          refetch={""}
          // endPage={Math.ceil(boardsCountGQL?.fetchBoardsCount / 10)}
          endPage={Math.ceil(119)}
        />
      </S.PaginationDiv>
    </S.Container>
  );
};
export default HostClassManageUI;

import Input from "@/src/components/commons/input/Input";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostClassList.styles";
import moment from "moment";
import { dateFormat4y2m2d } from "@/src/function/date/format/dateFormat";
import Button from "@/src/components/commons/button/Button";
import Pagination from "@/src/components/commons/pagination/Pagination";
import { IHostClassListUIProps } from "./HostClassList.types";
import HostClassListItem from "./HostClassListItem";

/**
 * Author : Sukyung Lee
 * FileName: HostClassList.presenter.tsx
 * Date: 2022-07-12 17:35:06
 * Description : 호스트 수업 관리 - 수업 조회
 */

const decideSearchDate = [
  { option: "day", value: 1, dateString: "1일" },
  { option: "week", value: 1, dateString: "1주" },
  { option: "month", value: 1, dateString: "1개월" },
  { option: "month", value: 6, dateString: "6개월" },
  { option: "year", value: 1, dateString: "1년" },
  { option: "year", value: 5, dateString: "5년" },
  { option: "all", value: 0, dateString: "전체" },
];

const HostClassListUI = (props: IHostClassListUIProps) => {
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
          <Button
            height="30px"
            width="80px"
            onClick={props.onClickSubmitSearch}
          >
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
          {decideSearchDate.map((el: any, index: number) => (
            <S.SearchDateButton
              key={index}
              onClick={props.onClickSearchDate([el.option, el.value])}
            >
              {el.dateString}
            </S.SearchDateButton>
          ))}
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
      {/* props.fetchCoursesByHostData */}
      {props.coursesByHost?.fetchCoursesByHostId.map(
        (el: any, index: number) => (
          <HostClassListItem key={index} element={el} index={index} />
        )
      )}
      <S.PaginationDiv>
        {props.courseCount && (
          <Pagination
            refetch={props.refetchCoursesByHost}
            endPage={Math.ceil(props.courseCount / 10)}
          />
        )}
      </S.PaginationDiv>
    </S.Container>
  );
};
export default HostClassListUI;

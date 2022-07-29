import * as S from "./Payment.styles";
import Calendar from "react-calendar";
import { IPaymentPresenter } from "./Payment.types";
import moment from "moment";
import { CF } from "@/styles/commonComponentStyle";
import {
  getDateKorean,
  getDateTime,
  TimeAmPm,
  TimeJustDigit,
} from "@/src/commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

export default function PaymentPresenter(props: IPaymentPresenter) {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>결제</S.Title>
      </S.TitleBox>
      <S.ContentInner>
        <S.SubTitleBox>
          <S.SubTitle>클래스 날짜 선택</S.SubTitle>
        </S.SubTitleBox>
        <S.ContentBox>
          <S.CalendarBox>
            <Calendar
              onChange={props.onChangeCalendar}
              value={props.date}
              formatDay={(_, date) => moment(date).format("DD")}
              minDetail="month"
              maxDetail="month"
              showNeighboringMonth={false}
              tileContent={({ date }) => {
                return props.calendarMark?.find(
                  (el) => el === moment(date).format("YYYY.MM.DD")
                ) ? (
                  <CF.RowCenterDiv>
                    <S.CalendarDot />
                  </CF.RowCenterDiv>
                ) : (
                  <></>
                );
              }}
            />
          </S.CalendarBox>
          <S.RightBox>
            <S.SelectDateBox>
              <S.SelectDate>{getDateKorean(String(props.date))}</S.SelectDate>
            </S.SelectDateBox>
            <S.SelectTimeBox>
              <S.SelectDate>시간 선택</S.SelectDate>
            </S.SelectTimeBox>
            <S.ToggleInner>
              {props.courseTimes.map((el: any) => (
                <S.ToggleBox
                  key={uuidv4()}
                  onClick={props.onClickPaymentDetail(el)}
                  active={el.id === props.courseTime.id}
                >
                  <S.ToggleTime>
                    {`${TimeAmPm(el.courseStartTime)} ~ ${TimeJustDigit(
                      el.courseEndTime
                    )}`}
                  </S.ToggleTime>
                  <S.TogglePaymentBox>
                    <S.TogglePayment>
                      {props.data?.fetchCourse.maxPrice -
                        ((props.data?.fetchCourse.maxPrice -
                          props.data?.fetchCourse.minPrice) /
                          el.maxUsers) *
                          el.currentUsers}
                    </S.TogglePayment>
                    <S.TogglePerson>{`${el.currentUsers} / ${el.maxUsers}`}</S.TogglePerson>
                  </S.TogglePaymentBox>
                </S.ToggleBox>
              ))}
            </S.ToggleInner>
            <S.PersonInner>
              <S.PersonNumber>인원</S.PersonNumber>
              <S.CountInner>
                <S.MinusBtton onClick={props.decreaseCount}>-</S.MinusBtton>
                <S.CounterBox>
                  <S.Counter>{props.personCount}</S.Counter>
                </S.CounterBox>
                <S.PlusBtton onClick={props.increaseCount}>+</S.PlusBtton>
              </S.CountInner>
            </S.PersonInner>
            <S.SumInner>
              <S.SumBox>
                <S.SumText>합계</S.SumText>
                <S.SumPayment>{`${(
                  props.currentPrice * props.personCount
                ).toLocaleString()} 원`}</S.SumPayment>
              </S.SumBox>
            </S.SumInner>
            <S.TotalBox>
              {props.courseTime.courseStartTime && (
                <S.Total>
                  {getDateTime(props.courseTime?.courseStartTime)}/{" "}
                  {props.personCount}명
                </S.Total>
              )}
            </S.TotalBox>
            <S.PaymentBox>
              <S.PaymentButton onClick={props.onClickPaymentMove}>
                결제하기
              </S.PaymentButton>
            </S.PaymentBox>
          </S.RightBox>
        </S.ContentBox>
      </S.ContentInner>
    </S.Wrapper>
  );
}

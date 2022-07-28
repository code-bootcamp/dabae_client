import * as S from "./Payment.styles";
import Calendar from "react-calendar";
import { IPaymentPresenter } from "./Payment.types";
import moment from "moment";
import { CF } from "@/styles/commonComponentStyle";

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
                if (
                  props.calendarMark?.find(
                    (el) => el === moment(date).format("YYYY.MM.DD")
                  )
                ) {
                  return (
                    <CF.RowCenterDiv>
                      <S.CalendarDot />
                    </CF.RowCenterDiv>
                  );
                } else
                  return (
                    <CF.RowCenterDiv>
                      <S.CalendarDot />
                    </CF.RowCenterDiv>
                  );
              }}
            />
          </S.CalendarBox>
          <S.RightBox>
            <S.SelectDateBox>
              <S.SelectDate>2022년 08월 01일</S.SelectDate>
            </S.SelectDateBox>
            <S.SelectTimeBox onClick={() => props.setToggle(!props.toggle)}>
              <S.SelectDate>시간 선택</S.SelectDate>
              <S.ArrowImg toggle={props.toggle} src="/images/myArrow.svg" />
            </S.SelectTimeBox>
            {props.toggle ? (
              <S.ToggleInner>
                <S.ToggleBox>
                  <S.ToggleTime>오후 2:00 ~ 오후 4:00</S.ToggleTime>
                  <S.TogglePaymentBox>
                    <S.TogglePayment>30,000원</S.TogglePayment>
                    <S.TogglePerson>{`${props.personCount}/ 3`}</S.TogglePerson>
                  </S.TogglePaymentBox>
                </S.ToggleBox>
              </S.ToggleInner>
            ) : (
              <></>
            )}
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
                <S.SumPayment>30,000원</S.SumPayment>
              </S.SumBox>
            </S.SumInner>
            <S.TotalBox>
              <S.Total>
                2022년 8월 6일 (토) 오후 2:00/ {props.personCount}명
              </S.Total>
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

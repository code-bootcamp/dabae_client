import { dateFormat4y2m2d2h2m } from "@/src/function/date/format/dateFormat";
import * as S from "./PaymentHistory.styles";
import { IPaymentHistoryresenter } from "./PaymentHistory.types";

export default function PaymentHistoryPresenter(
  props: IPaymentHistoryresenter
) {
  return (
    <S.Wrapper>
      <S.TitleBox onClick={props.BackMyMove}>
        <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
        <S.Title>결제 내역</S.Title>
      </S.TitleBox>
      <S.TableInner>
        <S.ItemTitleInner>
          <S.DateItemTitleBox>
            <S.ItemTitle>결제일자</S.ItemTitle>
          </S.DateItemTitleBox>
          <S.LectureItemTitleBox>
            <S.ItemTitle>클래스명</S.ItemTitle>
          </S.LectureItemTitleBox>
          <S.PaymentItemTitleBox>
            <S.ItemTitle>결제금액</S.ItemTitle>
          </S.PaymentItemTitleBox>
          <S.PaymentCancle>
            <S.ItemTitle>결제 취소</S.ItemTitle>
          </S.PaymentCancle>
        </S.ItemTitleInner>
        {props.payment?.fetchPaymentsByUser.map((el) => (
          <S.ItemInner key={el.id}>
            <S.DateItemBox>
              <S.MobileItem>결제 일자</S.MobileItem>
              <S.DateItem>{dateFormat4y2m2d2h2m(el.createdAt)}</S.DateItem>
            </S.DateItemBox>
            <S.LectureItemBox>
              <S.MobileItem>클레스명</S.MobileItem>
              <S.LectureItem>{el.course.name}</S.LectureItem>
            </S.LectureItemBox>
            <S.PaymentItemBox>
              <S.MobileItem>결제 금액</S.MobileItem>
              <S.PaymentItem>{`${el.price.toLocaleString()}원`}</S.PaymentItem>
            </S.PaymentItemBox>
            <S.PaymentCencleBox onClick={props.onClickCancel(el.id)}>
              <S.MobilePaymentItem>결제 취소</S.MobilePaymentItem>
              <S.PaymentCencle>결제 취소</S.PaymentCencle>
            </S.PaymentCencleBox>
          </S.ItemInner>
        ))}
      </S.TableInner>
    </S.Wrapper>
  );
}

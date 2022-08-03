import { getDateKorean, TimeAmPm } from "@/src/commons/libraries/utils";
import * as S from "./Complete.styles";
import { ICompletePresenter } from "./Complete.types";

export default function CompletePresenter(props: ICompletePresenter) {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>결제 정보</S.Title>
      </S.TitleBox>
      <S.PayContentInner>
        {/* <S.Img
          src={props.data?.fetchPayment.course.imageURLs?.imageURLs}
          alt="원데이 클래스 이미지"
        /> */}
        <S.Payment>
          클래스 명 : {props.data?.fetchPayment.course.name}
        </S.Payment>
        <S.Payment>
          결제 금액 : {props.data?.fetchPayment.amount.toLocaleString()} 원
        </S.Payment>
        <S.Payment>
          {`클래스 수업 날짜 :${getDateKorean(
            props.data?.fetchPayment.courseTime.courseStartTime
          )} ${TimeAmPm(
            props.data?.fetchPayment.courseTime.courseStartTime
          )} / ${props.data?.fetchPayment.quantity}명`}
        </S.Payment>
      </S.PayContentInner>
      <S.ContentBox>
        <S.Content>결제가 완료 되었습니다.</S.Content>
      </S.ContentBox>
    </S.Wrapper>
  );
}

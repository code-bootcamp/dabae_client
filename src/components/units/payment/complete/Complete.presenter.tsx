import { paymentData } from "@/src/components/commons/mockup/data";
import * as S from "./Complete.styles";

export default function CompletePresenter() {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>결제 정보</S.Title>
      </S.TitleBox>
      <S.PayContentInner>
        <S.Img src={paymentData.img} alt="원데이 클래스 이미지" />
        <S.Payment>클래스 명 : {paymentData.title}</S.Payment>
        <S.Payment>
          결제 금액 : {paymentData.price.toLocaleString()} 원
        </S.Payment>
        <S.Payment>
          클래스 수업 날짜 : 2022년 8월 6일 (토) 오후 2:00/ 1명
        </S.Payment>
      </S.PayContentInner>
      <S.ContentBox>
        <S.Content>결제가 완료 되었습니다.</S.Content>
      </S.ContentBox>
    </S.Wrapper>
  );
}

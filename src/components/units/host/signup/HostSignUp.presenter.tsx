import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostSignUp.styles";

export default function HostSignUpContainerPageUI(props: any) {
  return (
    <S.Wrapper>
      <CF.ColumnLeftDiv>
        <S.Title>누구나</S.Title>
        <S.Title>다배의 호스트가</S.Title>
        <S.Title>될 수 있어요!</S.Title>
      </CF.ColumnLeftDiv>
      <CF.ColumnCenterDiv gap={10}>
        <S.Button03>
          <S.Img src="/images/login/naver.svg" /> 네이버로 시작하기
        </S.Button03>
        <S.Button02>
          <S.Img src="/images/login/kakao.svg" />
          카카오로 시작하기
        </S.Button02>
        <S.Button04>
          <S.Img src="/images/login/google.svg" />
          구글로 시작하기
        </S.Button04>
        <S.Button01 onClick={props.onClickSignUp}>이메일로 가입하기</S.Button01>
        <CF.RowCenterDiv gap={10}>
          <S.Question>이미 가입하셨다면</S.Question>
          <S.Login onClick={props.onClickLogin}>호스트 로그인</S.Login>
        </CF.RowCenterDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}

import { CF } from "@/styles/commonComponentStyle";
import * as S from "./SignUp.styles";

export default function SignUpContainerPageUI(props: any) {
  return (
    <S.Wrapper>
      <CF.ColumnCenterDiv gap={20}>
        <S.Title>간편 회원가입</S.Title>
        <CF.ColumnCenterDiv gap={10}>
          <S.Button02>
            <S.Img src="/images/login/naver.svg" /> 네이버로 가입하기
          </S.Button02>
          <S.Button01>
            <S.Img src="/images/login/kakao.svg" />
            카카오로 가입하기
          </S.Button01>
          <S.Button03>
            <S.Img src="/images/login/google.svg" />
            구글로 가입하기
          </S.Button03>
          <S.Button04 onClick={props.onClickSignUp}>
            이메일로 가입하기
          </S.Button04>
        </CF.ColumnCenterDiv>
        <CF.RowCenterDiv gap={5}>
          <S.Question>이미 가입하셨다면</S.Question>
          <S.Login onClick={props.onClickLogin}>바로 로그인하기</S.Login>
        </CF.RowCenterDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}

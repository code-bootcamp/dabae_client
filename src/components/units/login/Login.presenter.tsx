import { CF } from "@/styles/commonComponentStyle";
import * as S from "./Login.styles";

export default function LoginPageUI(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <CF.ColumnCenterDiv gap={20}>
        <S.Title>로그인</S.Title>
        <CF.ColumnCenterDiv gap={20}>
          <CF.ColumnLeftDiv>
            <S.Input
              type="text"
              {...props.register("email")}
              placeholder="이메일을 입력해주세요."
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <S.Input
              type="password"
              {...props.register("password")}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </CF.ColumnLeftDiv>
        </CF.ColumnCenterDiv>
        <CF.RowRightDiv>
          <S.PasswordFind onClick={props.onClickPasswordFind}>
            비밀번호 찾기
          </S.PasswordFind>
        </CF.RowRightDiv>
        <S.Button disabled={!props.formState.isValid}>로그인</S.Button>
        <S.Button2>
          <S.Img src="images/login/naver.svg" /> 네이버로 로그인
        </S.Button2>
        <S.Button3>
          <S.Img src="images/login/kakao.svg" />
          카카오로 로그인
        </S.Button3>
        <S.Button4>
          <S.Img src="images/login/google.svg" />
          구글로 로그인
        </S.Button4>
        <CF.RowCenterDiv gap={10}>
          <S.Question>아직 계정이 없으신가요?</S.Question>
          <S.SignUp onClick={props.onClickSignUp}>회원가입</S.SignUp>
        </CF.RowCenterDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}

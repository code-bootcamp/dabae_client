import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostLogin.styles";

export default function HostLoginPageUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.ImgWrap>
          <S.Img2 src="/images/host/baking.jpg" />
          {/* <S.Img2 src="/images/host/board.jpg" />
            <S.Img2 src="/images/host/craft.jpg" /> */}
        </S.ImgWrap>
        <S.LoginWrap>
          <CF.ColumnDiv gap={20}>
            <S.Title>로그인</S.Title>
            <CF.ColumnDiv gap={20}>
              <CF.ColumnDiv>
                <S.Input
                  type="text"
                  {...props.register("email")}
                  placeholder="이메일을 입력해주세요."
                />
                <S.Error>{props.formState.errors.email?.message}</S.Error>
              </CF.ColumnDiv>
              <CF.ColumnDiv>
                <S.Input
                  type="password"
                  {...props.register("password")}
                  placeholder="비밀번호를 입력해주세요."
                />
                <S.Error>{props.formState.errors.password?.message}</S.Error>
              </CF.ColumnDiv>
            </CF.ColumnDiv>
            <CF.RowRightDiv gap={20}>
              <S.PasswordFind onClick={props.onClickPasswordFind}>
                비밀번호 찾기
              </S.PasswordFind>
            </CF.RowRightDiv>
            <S.Button disabled={!props.formState.isValid}>로그인</S.Button>
            <S.Button2>
              <S.Img src="/images/login/naver.svg" /> 네이버로 로그인
            </S.Button2>
            <S.Button3>
              <S.Img src="/images/login/kakao.svg" />
              카카오로 로그인
            </S.Button3>
            <S.Button4>
              <S.Img src="/images/login/google.svg" />
              구글로 로그인
            </S.Button4>
            <CF.RowCenterDiv gap={10}>
              <S.Question>아직 호스트 계정이 없다면?</S.Question>
              <S.SignUp onClick={props.onClickSignUp}>호스트 회원가입</S.SignUp>
            </CF.RowCenterDiv>
          </CF.ColumnDiv>
        </S.LoginWrap>
      </S.Wrapper>
    </form>
  );
}

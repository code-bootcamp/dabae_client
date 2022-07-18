import SocialButton from "@/src/components/commons/button/SocialButton";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostLogin.styles";

export default function HostLoginPageUI(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.ImgWrap>
        <S.Img src="/images/host/baking.jpg" />
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
                placeholder="이메일"
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
            </CF.ColumnDiv>
            <CF.ColumnDiv>
              <S.Input
                type="password"
                {...props.register("password")}
                placeholder="비밀번호"
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
          <SocialButton
            imgsrc="/images/login/naver.svg"
            title="네이버로 로그인"
            backColor="#03c75a"
            fontColor="#fff"
          />
          <SocialButton
            imgsrc="/images/login/kakao.svg"
            title="카카오로 로그인"
            backColor="#fee500"
          />
          <SocialButton
            imgsrc="/images/login/google.svg"
            title="구글로 로그인"
          />
          <CF.RowCenterDiv gap={10}>
            <S.Question>아직 호스트 계정이 없다면?</S.Question>
            <S.SignUp onClick={props.onClickSignUp}>호스트 회원가입</S.SignUp>
          </CF.RowCenterDiv>
        </CF.ColumnDiv>
      </S.LoginWrap>
    </S.Wrapper>
  );
}

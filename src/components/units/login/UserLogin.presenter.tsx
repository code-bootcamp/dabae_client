import { CF } from "@/styles/commonComponentStyle";
import SocialButton from "../../commons/button/SocialButton";
import * as S from "./UserLogin.styles";
import { IUserLoginPageUIProps } from "./UserLogin.types";
import { NAVER_AUTH_URL } from "../../../commons/social/oauth/naver";

export default function UserLoginPageUI(props: IUserLoginPageUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <CF.ColumnCenterDiv gap={20}>
        <S.Title>로그인</S.Title>
        <CF.ColumnCenterDiv gap={10}>
          <CF.ColumnLeftDiv>
            <S.Input
              type="text"
              {...props.register("email")}
              placeholder="이메일"
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <S.Input
              type="password"
              {...props.register("password")}
              placeholder="비밀번호"
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </CF.ColumnLeftDiv>
        </CF.ColumnCenterDiv>
        <CF.RowRightDiv>
          <S.PasswordFind onClick={props.onClickPasswordFind}>
            비밀번호 찾기
          </S.PasswordFind>
        </CF.RowRightDiv>
        <S.LoginButton disabled={!props.formState.isValid}>
          로그인
        </S.LoginButton>
        <SocialButton
          href={NAVER_AUTH_URL}
          imgsrc="/images/login/naver.svg"
          title="네이버로 로그인"
          backColor="#03c75a"
          fontColor="#fff"
        />
        <SocialButton
          // href={KAKAO_AUTH_URL}
          onClick={props.onClickKakaoLogin}
          imgsrc="/images/login/kakao.svg"
          title="카카오로 로그인"
          backColor="#fee500"
        />
        <SocialButton
          // href={GOOGLE_AUTH_URL}
          onClick={props.onClickGoogleLogin}
          imgsrc="/images/login/google.svg"
          title="구글로 로그인"
        />
        <CF.RowCenterDiv gap={10}>
          <S.Question>아직 계정이 없으신가요?</S.Question>
          <S.SignUp onClick={props.onClickSignUp}>회원가입</S.SignUp>
        </CF.RowCenterDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}

import SocialButton from "@/src/components/commons/button/SocialButton";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostSignUpHome.styles";
import { IHostSignUpHomePageUIProps } from "./HostSignUpHome.types";

export default function HostSignUpHomePageUI(
  props: IHostSignUpHomePageUIProps
) {
  return (
    <S.Wrapper>
      <CF.ColumnLeftDiv>
        <S.Title>
          반갑습니다
          <br />
          다배의 호스트가
          <br />
          되어보세요!
        </S.Title>
      </CF.ColumnLeftDiv>
      <CF.ColumnDiv gap={50}>
        <CF.ColumnCenterDiv gap={10}>
          <SocialButton
            href="https://nabia.shop/login/naver"
            imgsrc="/images/login/naver.svg"
            title="네이버로 시작하기"
            backColor="#03c75a"
            fontColor="#fff"
          />
          <SocialButton
            href="https://nabia.shop/login/kakao"
            imgsrc="/images/login/kakao.svg"
            title="카카오로 시작하기"
            backColor="#fee500"
          />
          <SocialButton
            href="https://nabia.shop/login/google"
            imgsrc="/images/login/google.svg"
            title="구글로 시작하기"
          />
          {props.data?.fetchLoginUser ? (
            <S.Button onClick={props.onClickUserToHost}>
              이메일로 가입하기
            </S.Button>
          ) : (
            <S.Button onClick={props.onClickSignUp}>이메일로 가입하기</S.Button>
          )}
          <CF.RowCenterDiv gap={10}>
            <S.Question>이미 가입하셨다면</S.Question>
            <S.Login onClick={props.onClickLogin}>호스트 로그인</S.Login>
          </CF.RowCenterDiv>
        </CF.ColumnCenterDiv>
      </CF.ColumnDiv>
    </S.Wrapper>
  );
}

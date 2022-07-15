import SocialButton from "@/src/components/commons/button/SocialButton";
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
        <SocialButton
          imgsrc="/images/login/naver.svg"
          title="네이버로 가입하기"
          backColor="#03c75a"
          fontColor="#fff"
        />
        <SocialButton
          imgsrc="/images/login/kakao.svg"
          title="카카오로 가입하기"
          backColor="#fee500"
        />
        <SocialButton
          imgsrc="/images/login/google.svg"
          title="구글로 가입하기"
        />
        <S.Button onClick={props.onClickSignUp}>이메일로 가입하기</S.Button>
        <CF.RowCenterDiv gap={10}>
          <S.Question>이미 가입하셨다면</S.Question>
          <S.Login onClick={props.onClickLogin}>호스트 로그인</S.Login>
        </CF.RowCenterDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}

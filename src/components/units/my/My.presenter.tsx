import React from "react";
import * as S from "./My.styles";

export default function MyPresenter() {
  return (
    <S.Wrapper>
      <S.ProFileInner>
        <S.ProfileImg src="/images/profile.png" alt="프로필" />
        <S.ProfileBox>
          <S.ProfileTitle>아이디 대원</S.ProfileTitle>
          <S.ProfileText>이메일 계정</S.ProfileText>
        </S.ProfileBox>
      </S.ProFileInner>
      <S.ProfileContentInner>
        <S.ProfileContentBox href="/">
          <S.ProfileContentTitle>결제내역</S.ProfileContentTitle>
        </S.ProfileContentBox>
        <S.ProfileContentBox href="/joinhost">
          <S.ProfileContentTitle>호스트지원</S.ProfileContentTitle>
        </S.ProfileContentBox>
        <S.ProfileContentBox href="/">
          <S.ProfileContentTitle>내 정보 수정</S.ProfileContentTitle>
        </S.ProfileContentBox>
        <S.ProfileContentBox href="/">
          <S.ProfileContentTitle>회원 탈퇴</S.ProfileContentTitle>
        </S.ProfileContentBox>
        <S.ProfileContentBox href="/static-info">
          <S.ProfileContentTitle>이용 및 약관</S.ProfileContentTitle>
        </S.ProfileContentBox>
      </S.ProfileContentInner>
    </S.Wrapper>
  );
}

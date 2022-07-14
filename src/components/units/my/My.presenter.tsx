import Link from "next/link";
import React from "react";
import { isLogIn } from "../../commons/mockup/data";
import * as S from "./My.styles";

export default function MyPresenter() {
  return (
    <S.Wrapper>
      {isLogIn ? (
        <S.ProFileInner>
          <S.ProfileImg src={isLogIn.profilePicture} alt="프로필" />
          <S.ProfileBox>
            <S.ProfileTitle>{`${isLogIn.nickName} 대원`}</S.ProfileTitle>
            <S.ProfileText>{isLogIn.email}</S.ProfileText>
          </S.ProfileBox>
        </S.ProFileInner>
      ) : (
        <S.ProFileInner>
          <S.ProfileImg src="/images/profile.png" alt="프로필" />
          <S.ProfileBox>
            <S.ProfileTitle>이름 대원</S.ProfileTitle>
            <S.ProfileText>이메일 계정</S.ProfileText>
          </S.ProfileBox>
        </S.ProFileInner>
      )}
      <S.ProfileContentInner>
        <Link href="/my/paymenthistory">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>결제내역</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
        <Link href="/joinhost">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>호스트지원</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
        <Link href="/my/Infoedit">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>내 정보 수정</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
        <Link href="/my/secession">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>회원 탈퇴</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
        <Link href="/static-info">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>이용 및 약관</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
      </S.ProfileContentInner>
    </S.Wrapper>
  );
}

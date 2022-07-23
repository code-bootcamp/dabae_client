import Link from "next/link";
import React from "react";
import * as S from "./My.styles";
import { IMyPresenter } from "./My.types";

export default function MyPresenter(props: IMyPresenter) {
  return (
    <S.Wrapper>
      <S.ProFileInner>
        {props.login?.fetchLoginUser.profile ? (
          <S.ProfileImg
            src={props.login?.fetchLoginUser.profile}
            alt="프로필"
          />
        ) : (
          <S.ProfileImg src="/images/profile.png" alt="프로필" />
        )}
        <S.ProfileBox>
          <S.ProfileTitle>
            {props.login?.fetchLoginUser.nickname}
          </S.ProfileTitle>
          <S.ProfileText>{props.login?.fetchLoginUser.email}</S.ProfileText>
        </S.ProfileBox>
      </S.ProFileInner>
      <S.ProfileContentInner>
        <Link href="/my/paymenthistory">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>결제내역</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
        {props.login?.fetchLoginUser.isHost === false && (
          <Link href="/joinhost">
            <S.ProfileContentBox>
              <S.ProfileContentTitle>호스트지원</S.ProfileContentTitle>
              <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
            </S.ProfileContentBox>
          </Link>
        )}
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
        <Link href="/my/study-review">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>참여 수업 목록</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
        <Link href="my/static-info">
          <S.ProfileContentBox>
            <S.ProfileContentTitle>이용 및 약관</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.ProfileContentBox>
        </Link>
      </S.ProfileContentInner>
    </S.Wrapper>
  );
}

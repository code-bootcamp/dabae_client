import Link from "next/link";
import React from "react";
import { Modal } from "antd";
import * as S from "./My.styles";
import { IMyPresenter } from "./My.types";
import Head from "next/head";

export default function MyPresenter(props: IMyPresenter) {
  return (
    <S.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        />
      </Head>
      {props.modalVisible && (
        <Modal
          visible={true}
          onOk={props.requestPay}
          onCancel={props.onToggleModal}
        >
          <S.ModalWrapper>
            <S.ModalTitle>충전하실 금액을 선택해주세요!</S.ModalTitle>
            <S.PointSelect onChange={props.onChangePrice}>
              <option defaultValue="0">포인트 선택</option>
              <option value="100">100</option>
              <option value="1000">1,000</option>
              <option value="5000">5,000</option>
              <option value="10000">10,000</option>
              <option value="50000">50,000</option>
            </S.PointSelect>
          </S.ModalWrapper>
        </Modal>
      )}
      <S.ProFileInner>
        <S.MobileProFileInner>
          {props.login?.fetchLoginUser.profileImageURL ? (
            <S.ProfileImg
              src={`https://storage.googleapis.com/${props.login?.fetchLoginUser.profileImageURL}`}
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
        </S.MobileProFileInner>
        <S.EmptyBox onClick={props.logout}>
          <S.Link>
            <S.MyListItem>로그아웃</S.MyListItem>
          </S.Link>
        </S.EmptyBox>
      </S.ProFileInner>
      <S.ProfileContentInner>
        <S.ProfileContentBox onClick={props.onToggleModal}>
          <S.ProfileContentTitle>
            {`보유 포인트 : ${props.login?.fetchLoginUser.point}`}
          </S.ProfileContentTitle>
          <S.FlexBox>
            <S.ProfileContentTitle>충전</S.ProfileContentTitle>
            <S.ProfileLisImg src="/images/myArrow.svg" alt="화살표" />
          </S.FlexBox>
        </S.ProfileContentBox>
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

import React from "react";
import * as S from "./JoinHost.styles";
import { IJoinHostPresenter } from "./JoinHost.types";

export default function JoinHostPresenter(props: IJoinHostPresenter) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.HostTitle>
          다 함께 취미를 배우고 다양한 취미를 배울 수 있는 다배에 오신것을
          환영합니다.
        </S.HostTitle>
        <S.HostButton onClick={props.onClickHostMove}>
          5분만에 호스트 시작하기
        </S.HostButton>
      </S.Inner>
    </S.Wrapper>
  );
}

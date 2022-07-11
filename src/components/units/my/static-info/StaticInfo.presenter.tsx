import { IStaticInfoPresenter } from "./privacy/StaticInfo.types";
import * as S from "./StaticInfo.styles";

export default function StaticInfoPresenter(props: IStaticInfoPresenter) {
  return (
    <S.Wrapper>
      <S.StaticInfoBox>
        <S.StaticInfoTitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.StaticInfoTitle>약관 및 정책</S.StaticInfoTitle>
        </S.StaticInfoTitleBox>
      </S.StaticInfoBox>
      <S.StaticInfoContentInner>
        <S.StaticInfoLink href="/static-info/agreement">
          <S.StaticInfoText>이용약관</S.StaticInfoText>
          <S.StaticInfoImg src="/images/myArrow.svg" alt="agreementArrow" />
        </S.StaticInfoLink>
        <S.StaticInfoLink href="/static-info/privacy">
          <S.StaticInfoText>개인정보 처리방침</S.StaticInfoText>
          <S.StaticInfoImg src="/images/myArrow.svg" alt="agreementArrow" />
        </S.StaticInfoLink>
      </S.StaticInfoContentInner>
    </S.Wrapper>
  );
}

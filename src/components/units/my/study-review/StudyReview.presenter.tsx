import Link from "next/link";
import * as S from "./StudyReview.styles";

export interface IStudyReviewPresenter {
  BackMyMove: () => void;
}

export default function StudyReviewPresenter(props: IStudyReviewPresenter) {
  return (
    <S.Wrapper>
      <S.StaticInfoBox>
        <S.StaticInfoTitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.StaticInfoTitle>수강 및 리뷰</S.StaticInfoTitle>
        </S.StaticInfoTitleBox>
      </S.StaticInfoBox>
      <S.StaticInfoContentInner>
        <Link href="/my/study-review/study">
          <S.StaticInfoLink>
            <S.StaticInfoText>수강 리스트</S.StaticInfoText>
            <S.StaticInfoImg src="/images/myArrow.svg" alt="agreementArrow" />
          </S.StaticInfoLink>
        </Link>
        <Link href="/my/study-review/review">
          <S.StaticInfoLink>
            <S.StaticInfoText>작성 리뷰 리스트</S.StaticInfoText>
            <S.StaticInfoImg src="/images/myArrow.svg" alt="agreementArrow" />
          </S.StaticInfoLink>
        </Link>
      </S.StaticInfoContentInner>
    </S.Wrapper>
  );
}

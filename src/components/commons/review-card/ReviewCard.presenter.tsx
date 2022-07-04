import * as S from "./ReviewCard.styles";

export default function ReviewCardUI() {
  return (
    <S.Wrapper>
      <S.ReviewImage src="/images/product_detail/review_1.webp" />
      <S.UserProfile>
        <S.UserProfileimage src="/images/product_detail/review_profile_1.png" />
        <S.UserName>김효진</S.UserName>
      </S.UserProfile>
      <S.ReviewContents>
        생애 첫 꽃수업이었습니다! 제가 손재주도 없고 감도 없어서 수업하면서
        어려워 했었는데 선생님께서 계속 짜란다짜란다 해...
      </S.ReviewContents>
    </S.Wrapper>
  );
}

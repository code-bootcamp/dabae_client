import * as S from "./Study.styles";
import { IStudyPresneter } from "./Study.types";

export default function StudyPresneter(props: IStudyPresneter) {
  return (
    <S.Wrapper>
      <S.TitleInner>
        <S.TitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.Title>수강 리스트</S.Title>
        </S.TitleBox>
      </S.TitleInner>
      <S.TableWrapper>
        <S.TableInner>
          <S.TableBox>
            <S.TableImgBox>
              <S.TableImg src="" alt="코스 이미지" />
            </S.TableImgBox>
            <S.CourseTitleBox>
              <S.CourseTitle>코스 이름</S.CourseTitle>
              <S.Rates value={4} />
            </S.CourseTitleBox>
            <S.DateInner>
              <S.Date>시작일자</S.Date>
              <S.Date>종료일자</S.Date>
            </S.DateInner>
          </S.TableBox>
          <S.ReviewButtonBox onClick={props.reviewMove}>
            <S.ReviewButton>리뷰 작성</S.ReviewButton>
          </S.ReviewButtonBox>
        </S.TableInner>
      </S.TableWrapper>
    </S.Wrapper>
  );
}

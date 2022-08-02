import UploadTemplate from "@/src/components/commons/upload/UploadOrganism";
import { FormProvider } from "react-hook-form";
import * as S from "./WriteReview.styles";
import { IWriteReviewUIProps } from "./WriteReview.types";

export default function WriteReviewUI(props: IWriteReviewUIProps) {
  return (
    <FormProvider {...props.methods}>
      <S.Wrapper onSubmit={props.handleSubmit(props.reviewSubmit)}>
        <S.TitleInner>
          <S.TitleBox onClick={props.BackMyMove}>
            <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
            <S.Title>리뷰 작성</S.Title>
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
              {/* <S.DateInner>
                <S.Date>시작일자:</S.Date>
                <div>2022.08.03</div>
                <S.Date>종료일자</S.Date>
              </S.DateInner> */}
            </S.TableBox>
            <S.ReviewContents
              {...props.register("contents")}
              placeholder="내용을 작성해주세요."
            />
            <S.ImageWrapper>
              <UploadTemplate />
            </S.ImageWrapper>
            <S.ReviewButtonBox>
              <S.ReviewButton>리뷰 등록</S.ReviewButton>
            </S.ReviewButtonBox>
          </S.TableInner>
        </S.TableWrapper>
      </S.Wrapper>
    </FormProvider>
  );
}

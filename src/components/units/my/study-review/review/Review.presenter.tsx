import React from "react";
import * as S from "./Review.styles";
import { IReviewPresenter } from "./Review.types";

export default function ReviewPresenter(props: IReviewPresenter) {
  return (
    <S.Wrapper>
      <S.TitleInner>
        <S.TitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" alt="뒤로가기" />
          <S.Title>리뷰 리스트</S.Title>
        </S.TitleBox>
      </S.TitleInner>
      <S.TableWrapper>
        {/* {props.reviews?.fetchCourseReviews.map((el) => ( */}
        <S.TableInner>
          <S.TableBox>
            <S.TableImgBox>
              <S.TableImg
                // src={`https://storage.googleapis.com/${el.imageURLs[0]?.imageURLs}`}
                src="/images/profile.png"
                alt="review_img"
              />
            </S.TableImgBox>
            <S.CourseTitleBox>
              <S.CourseTitle>
                열심히하고싶다.
                {/* {el.course.name} */}
              </S.CourseTitle>
              <S.Rates
                disabled
                // value={el.rate}
                value={4}
              />
            </S.CourseTitleBox>
            <S.ContentInner>
              <S.ContentTitle>후기</S.ContentTitle>
              <S.ContentBox>
                <S.Content>
                  asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa asdsa asdsa
                  asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa asdsa asdsa
                  asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa asdsa
                  asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa asdsa
                  asdsa
                </S.Content>
              </S.ContentBox>
            </S.ContentInner>
          </S.TableBox>
          <S.DeleteButtonBox onClick={props.onClickDeleteReview}>
            <S.DeleteButton>삭제하기</S.DeleteButton>
          </S.DeleteButtonBox>
        </S.TableInner>
        {/* ))} */}
      </S.TableWrapper>
    </S.Wrapper>
  );
}

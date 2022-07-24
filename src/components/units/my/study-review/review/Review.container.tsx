import theme from "@/styles/theme";
import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Rate } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { DELETE_REVIEWS, FETCH_REVIEWS } from "./Review.queries";

export default function ReviewContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my/study-review");
  };

  // 리뷰 리스트
  const { data: reviews } = useQuery(FETCH_REVIEWS);

  console.log("reviews ", reviews);

  // 리뷰 삭제
  const [deleteReview] = useMutation(DELETE_REVIEWS);

  const onClickDeleteReview = async () => {
    try {
      await deleteReview();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <TitleInner>
        <TitleBox onClick={BackMyMove}>
          <Img src="/images/myArrow.svg" alt="뒤로가기" />
          <Title>리뷰 리스트</Title>
        </TitleBox>
      </TitleInner>
      <TableWrapper>
        {/* {reviews?.fetchCourseReviews.map((el: any) => ( */}
        <TableInner>
          <TableBox>
            <TableImgBox>
              <TableImg
                // src={`https://storage.googleapis.com/${el.imageURLs[0]?.imageURLs}`}
                src="/images/profile.png"
                alt="review_img"
              />
            </TableImgBox>
            <CourseTitleBox>
              <CourseTitle>
                열심히하고싶다.
                {/* {el.course.name} */}
              </CourseTitle>
              <Rates
                disabled
                // value={el.rate}
                value={4}
              />
            </CourseTitleBox>
            <ContentInner>
              <ContentTitle>후기</ContentTitle>
              <ContentBox>
                <Content>
                  asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa asdsa asdsa
                </Content>
              </ContentBox>
            </ContentInner>
          </TableBox>
          <DeleteButtonBox onClick={onClickDeleteReview}>
            <DeleteButton>삭제하기</DeleteButton>
          </DeleteButtonBox>
        </TableInner>
        {/* ))} */}
      </TableWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleInner = styled.div`
  padding: 40px 0 50px;
`;

export const TitleBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  transform: rotate(180deg);
  margin-right: 10px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const TableWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #32c2b9;
  border-radius: 10px;
`;

export const TableInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const TableBox = styled.div`
  display: flex;
`;

export const TableImgBox = styled.div`
  margin-right: 10px;
`;

export const TableImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CourseTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;

export const CourseTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
`;

export const Rates = styled(Rate)`
  color: red;
  ${theme.fontSizes.small};
`;

export const ContentInner = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
`;

export const ContentBox = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Content = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
`;

export const DeleteButtonBox = styled.div``;

export const DeleteButton = styled.button`
  cursor: pointer;
  outline: 0;
  border: 1px solid #32c2b9;
  background-color: transparent;
  ${theme.fontSizes.small};
  padding: 5px;
  transition: all 0.3s ease-in-out;
  color: #32c2b9;
  :hover {
    background-color: #32c2b9;
    color: #fff;
  }
`;

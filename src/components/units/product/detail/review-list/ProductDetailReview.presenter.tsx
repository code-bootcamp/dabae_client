/*
 * Author : Seongpyo Hong
 * FileName: ProductDetailReview.presenter.tsx
 * Date: 2022-07-04 17:03:36
 * Description :
 */

import ReviewCard from "@/src/components/commons/review-card/ReviewCard.container";
import { CF } from "@/styles/commonComponentStyle";
import { Rate } from "antd";
import * as S from "./ProductDetailReview.styles";
import { IProductDetailReviewUIProps } from "./ProductDetailReview.types";

export default function ProductDetailReviewUI(
  props: IProductDetailReviewUIProps
) {
  return (
    <CF.ColumnDiv>
      <S.ReviewSummary>
        <S.InfoSection>
          <Rate
            style={{ color: "red" }}
            onChange={props.onChangeRating}
            value={props.rating}
          />
          {props.rating ? (
            <S.ReviewRateNumber>
              {["1", "2", "3", "4", "5"][props.rating - 1]}
            </S.ReviewRateNumber>
          ) : (
            <S.ReviewRateNumber>0</S.ReviewRateNumber>
          )}
          <S.ReviewCount>282개 후기</S.ReviewCount>
        </S.InfoSection>
      </S.ReviewSummary>
      <S.ReviewSection>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </S.ReviewSection>
    </CF.ColumnDiv>
  );
}

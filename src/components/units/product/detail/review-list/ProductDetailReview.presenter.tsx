/*
 * Author : Seongpyo Hong
 * FileName: ProductDetailReview.presenter.tsx
 * Date: 2022-07-04 17:03:36
 * Description :
 */

import ReviewCard from "@/src/components/commons/review-card/ReviewCard.container";
import { CF } from "@/styles/commonComponentStyle";
import { Rate } from "antd";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductDetailReview.styles";

export default function ProductDetailReviewUI() {
  return (
    <CF.ColumnDiv>
      <S.ReviewSummary>
        <S.InfoSection>
          <Rate disabled style={{ color: "red" }} value={5} />
          <S.ReviewRateNumber>
            {["1", "2", "3", "4", "5"][5 - 1]}
          </S.ReviewRateNumber>
          <S.ReviewCount>282개 후기</S.ReviewCount>
        </S.InfoSection>
      </S.ReviewSummary>
      <S.ReviewSection>
        {new Array(1).fill(1).map((_: any) => (
          <ReviewCard key={uuidv4()} />
        ))}
      </S.ReviewSection>
    </CF.ColumnDiv>
  );
}

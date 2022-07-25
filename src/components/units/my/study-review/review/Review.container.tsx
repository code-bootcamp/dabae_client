import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import ReviewPresenter from "./Review.presenter";
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
    <ReviewPresenter
      reviews={reviews}
      BackMyMove={BackMyMove}
      onClickDeleteReview={onClickDeleteReview}
    />
  );
}

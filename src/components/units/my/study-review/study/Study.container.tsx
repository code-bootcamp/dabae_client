import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import StudyPresneter from "./Study.presneter";
import { FETCH_STUDY_LIST } from "./Study.queries";

export default function StudyContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my/study-review");
  };

  const reviewMove = () => {
    router.push("/my/study-review/reivew/write");
  };

  const { data: studyList } = useQuery(FETCH_STUDY_LIST);

  console.log("studyList ", studyList);

  return (
    <StudyPresneter
      studyList={studyList}
      BackMyMove={BackMyMove}
      reviewMove={reviewMove}
    />
  );
}

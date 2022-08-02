import { useRouter } from "next/router";
import React from "react";
import StudyPresneter from "./Study.presneter";

export default function StudyContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my/study-review");
  };

  const reviewMove = () => {
    router.push("/my/study-review/study/write-review");
  };

  return <StudyPresneter BackMyMove={BackMyMove} reviewMove={reviewMove} />;
}

import { useRouter } from "next/router";
import StudyReviewPresenter from "./StudyReview.presenter";

export default function StudyReviewContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  return <StudyReviewPresenter BackMyMove={BackMyMove} />;
}

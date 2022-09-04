import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import WriteReviewUI from "./WriteReview.presenter";
import { CREATE_COURSE_REVIEW } from "./WriteReview.queries";
import * as yup from "yup";

const schema = yup.object({});

export default function WriteReview() {
  const router = useRouter();
  const methods = useForm<any>();
  const [createCourseReview] = useMutation(CREATE_COURSE_REVIEW);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const BackMyMove = () => {
    router.push("/my/study-review/study");
  };

  const reviewSubmit = async (data: any) => {
    try {
      await createCourseReview({
        variables: {
          createReviewInput: {
            courseId: "",
            rate: 3,
            contents: data.contents,
            imageURLs: "",
          },
        },
      });
      Modal.success({ content: "리뷰 등록이 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <WriteReviewUI
      BackMyMove={BackMyMove}
      reviewSubmit={reviewSubmit}
      methods={methods}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER, USER_TO_HOST } from "./UserToHostSignUp.queries";
import UserToHostSignUpPageUI from "./UserToHostSignUp.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
    ),
  businessName: yup.string().required("사업자명은 필수 입력입니다."),
  businessNumber: yup
    .string()
    .required("사업자번호는 필수 입력입니다.")
    .matches(/^\d{10}$/, "사업자번호를 -없이 입력해주세요."),
});

export default function UserToHostSignUpContainerPage() {
  const { data } = useQuery(FETCH_LOGIN_USER);
  const router = useRouter();
  const [userToHost] = useMutation(USER_TO_HOST);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: any) => {
    try {
      await userToHost({
        variables: {
          businessName: data.businessName,
          businessNumber: data.businessNumber,
        },
      });
      Modal.success({
        content: "호스트 회원가입이 완료되었습니다.",
        onOk() {
          router.push("/host/dashboard/home");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <UserToHostSignUpPageUI
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
    />
  );
}

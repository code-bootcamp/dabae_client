import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import LoginPageUI from "./Login.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN } from "./Login.queries";
import { Modal } from "antd";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "@/src/commons/store";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
    ),
});

export default function LoginContainerPage() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [login] = useMutation(LOGIN);

  const onClickLogin = async (data: any) => {
    try {
      const result = await login({
        variables: { email: data.email, password: data.password },
      });
      setAccessToken(result.data?.login);
      router.push("/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  const onClickPasswordFind = () => {
    router.push("/find-password/");
  };

  return (
    <LoginPageUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickLogin={onClickLogin}
      onClickPasswordFind={onClickPasswordFind}
      onClickSignUp={onClickSignUp}
    />
  );
}

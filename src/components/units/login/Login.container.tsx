// import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import LoginPageUI from "./Login.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
// import { LOGIN_USER } from "./Login.queries";
// import { Modal } from "antd";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요."),
});

export default function LoginContainerPage() {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const [loginUser] = useMutation(LOGIN_USER);

  const onClickLogin = async (data: any) => {
    // try{
    //     await loginUser({
    //         variables: { email: data.email, password: data.password },
    //     })
    // }catch(error) {
    //     Modal.error({contents: error.message})
    // }
    console.log(data);
  };

  const onClickSignUp = (event: any) => {
    router.push(event.target.id);
  };

  const onClickPasswordFind = (event: any) => {
    router.push(event.target.id);
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

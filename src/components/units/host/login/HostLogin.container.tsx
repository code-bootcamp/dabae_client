import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HOST_LOGIN } from "./HostLogin.queries";
import { Modal } from "antd";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "@/src/commons/store";
import HostLoginPageUI from "./HostLogin.presenter";

const schema = yup.object({
  email: yup
    .string()
    .required("")
    .matches(
      /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "유효하지 않은 이메일 주소입니다"
    ),
  password: yup.string().required(""),
});

export default function HostLoginContainerPage() {
  const router = useRouter();
  const [hostLogin] = useMutation(HOST_LOGIN);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    try {
      const result = await hostLogin({
        variables: { email: data.email, password: data.password },
      });
      setAccessToken(result.data?.login);
      router.push("/joinhost");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickSignUp = () => {
    router.push("/host/signup");
  };

  const onClickPasswordFind = () => {
    router.push("/find-password/");
  };

  return (
    <HostLoginPageUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickLogin={onClickLogin}
      onClickPasswordFind={onClickPasswordFind}
      onClickSignUp={onClickSignUp}
    />
  );
}

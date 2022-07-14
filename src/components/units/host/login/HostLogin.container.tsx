import { useApolloClient, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FETCH_LOGIN_USER, LOGIN } from "./HostLogin.queries";
import { Modal } from "antd";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "@/src/commons/store";
import HostLoginPageUI from "./HostLogin.presenter";

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
      "비밀번호는 영문, 숫자, 특수문자를 최소 1자씩 포함하여 8~16자리로 입력해주세요."
    ),
});

export default function HostLoginContainerPage() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();

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
      // console.log(result);
      // setAccesToken(result?.data.Login); // 수정 필요
      const accessToken = result.data?.login.accessToken;

      const resultUserInfo = await client.query({
        query: FETCH_LOGIN_USER,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data.fetchLoginUser;
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      alert("로그인에 성공하였습니다!!");
      router.push("/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
    console.log(data);
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

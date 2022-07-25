import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import UserLoginPageUI from "./UserLogin.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN } from "./UserLogin.queries";
import { Modal } from "antd";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "@/src/commons/store";

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

export default function UserLoginContainerPage() {
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

  const onClickKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["kakao_account.email", "kakao_account.gender"],
          },
          success: function (response: { kakao_account: { email: any } }) {
            console.log(response);
            router.push("/");
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };

  // const onClickGoogleLogin = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result: any) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...

  //       console.log(user);
  //     })
  //     .catch((error: any) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  return (
    <UserLoginPageUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickLogin={onClickLogin}
      onClickPasswordFind={onClickPasswordFind}
      onClickSignUp={onClickSignUp}
      onClickKakaoLogin={onClickKakaoLogin}
      // onClickGoogleLogin={onClickGoogleLogin}
    />
  );
}

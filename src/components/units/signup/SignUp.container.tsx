import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SignUpContainerPageUI from "./SignUp.presenter";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  name: yup.string().required("닉네임은 필수 입력입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /^.*(?=^.{4,15}$)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      "비밀번호는 영문, 특수문자를 포함한 4~15자리 이내로 입력해주세요."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{11}$/, "형식에 맞지 않는 번호입니다."),
});

export default function SignUpContainerPage() {
  const [tokenToggle, setTokenToggle] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = (data: any) => {
    console.log(data);
  };

  function onClickSend() {
    setTokenToggle(true);
  }

  return (
    <SignUpContainerPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSend={onClickSend}
      tokenToggle={tokenToggle}
    />
  );
}

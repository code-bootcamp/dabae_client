import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FindPasswordUI from "./FindPassword.presenter";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().email("이메일 형식이 적합하지 않습니다."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{11}$/, "형식에 맞지 않는 번호입니다."),
});
export default function FindPassword() {
  const [tokenToggle, setTokenToggle] = useState(false);

  const { register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  function onClickSend() {
    setTokenToggle(true);
  }

  return (
    <FindPasswordUI
      register={register}
      formState={formState}
      onClickSend={onClickSend}
      tokenToggle={tokenToggle}
    />
  );
}

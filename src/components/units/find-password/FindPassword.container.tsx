import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FindPasswordUI from "./FindPassword.presenter";
import { useState } from "react";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일을 입력해주세요."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{11}$/, "형식에 맞지 않는 번호입니다."),
});
export default function FindPassword() {
  const [cert, setCert] = useState(false);
  const [time, setTime] = useState(180);
  const [tokenToggle, setTokenToggle] = useState(false);

  const { register, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  let timer: any = null;
  function onClickSend() {
    setTokenToggle(true);
    let newTime = time;
    timer = setInterval(function () {
      setTime(--newTime);
      if (newTime <= 0) {
        clearInterval(timer);
        alert("입력 시간이 초과되었습니다.");
        setTime(3);
        setTokenToggle(false);
      }
    }, 1000);
  }

  const onClickCert = () => {
    setCert(true);
  };

  return (
    <FindPasswordUI
      register={register}
      formState={formState}
      onClickSend={onClickSend}
      tokenToggle={tokenToggle}
      watch={watch}
      onClickCert={onClickCert}
      cert={cert}
    />
  );
}

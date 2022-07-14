import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FindPasswordUI from "./FindPassword.presenter";
import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { UPDATE_PASSWORD } from "./FindPassword.queries";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일을 입력해주세요."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{11}$/, "형식에 맞지 않는 번호입니다."),
  // certNum: yup
  //   .string()
  //   .required("인증번호를 확인해주세요.")
  //   .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
});
export default function FindPassword() {
  const [cert, setCert] = useState(false);
  const [time, setTime] = useState(180);
  const [tokenToggle, setTokenToggle] = useState(false);
  // const [updatePassword] = useMutation(UPDATE_PASSWORD)

  const { register, formState, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  let timer: any = null;
  function onClickSend() {
    setTokenToggle(true);
    let newTime = time;
    timer = setInterval(function () {
      setTime(--newTime);
      console.log(cert);
      if (cert) {
        clearInterval(timer);
      } else if (newTime <= 0) {
        clearInterval(timer);
        alert("입력 시간이 초과되었습니다.");
        setTokenToggle(false);
        setTime(3);
        setValue("certNum", "");
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
      handleSubmit={handleSubmit}
      onClickSend={onClickSend}
      tokenToggle={tokenToggle}
      watch={watch}
      onClickCert={onClickCert}
      cert={cert}
      time={time}
    />
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HostEmailSignUpContainerUI from "./HostEmailSignUp.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./HostEmailSignUp.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .matches(
      /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식이 적합하지 않습니다."
    ),
  nickname: yup.string().required("호스트 명은 필수 입력입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  phone: yup
    .string()
    .required("-없이 입력해주세요.")
    .matches(/^010-?([0-9]{4})-?([0-9]{4})$/, "형식에 맞지 않는 번호입니다."),
  businessNumber: yup
    .string()
    .matches(/^\d{10}$/, "사업자번호를 -없이 입력해주세요."),
  certNum: yup
    .string()
    .required("인증번호를 확인해주세요.")
    .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
});

export default function HostEmailSignUpContainerPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [time, setTime] = useState(180);
  const [tokenToggle, setTokenToggle] = useState(false);
  const [isCert, setIsCert] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: "회원가입이 완료되었습니다.",
        onOk() {
          router.push("/host/login");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  let timer: any = null;
  function onClickSend() {
    setTokenToggle(true);
    let newTime = time;
    timer = setInterval(function () {
      setTime(--newTime);
      if (newTime <= 0) {
        clearInterval(timer);
        Modal.error({ content: "입력 시간이 초과되었습니다." });
        setTime(3);
        setTokenToggle(false);
      }
    }, 1000);
  }

  const onClickCert = () => {
    console.log(123);

    setIsCert(true);
  };

  return (
    <HostEmailSignUpContainerUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSend={onClickSend}
      onClickCert={onClickCert}
      tokenToggle={tokenToggle}
      time={time}
      watch={watch}
      isCert={isCert}
    />
  );
}

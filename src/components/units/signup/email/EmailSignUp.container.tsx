import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EmailSignUpContainerPageUI from "./EmailSignUp.presenter";
import {
  AUTH_PHONE_OK,
  CHECK_EMAIL,
  CREATE_USER,
  SEND_TOKEN_TO_PHONE,
} from "./EmailSignUp.queries";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .matches(
      /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식이 적합하지 않습니다."
    ),
  nickname: yup.string().required("닉네임은 필수 입력입니다."),
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

  inputToken: yup
    .string()
    .required("인증번호를 확인해주세요.")
    .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
});

export default function EmailSignUpContainerPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [hasEmail] = useMutation(CHECK_EMAIL);
  const [sendTokenToPhone] = useMutation(SEND_TOKEN_TO_PHONE);
  const [authPhoneOk] = useMutation(AUTH_PHONE_OK);
  // const [isCheckedEmail, setIsCheckedEmail] = useState(false);
  const [isCert, setIsCert] = useState(false);
  const [time, setTime] = useState(180);
  const [tokenToggle, setTokenToggle] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isNicknameValid, setIsNicknameValid] = useState(false); // 닉네임 중복 검사

  const { register, handleSubmit, formState, watch, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
            phone: data.phone,
            isHost: false,
            marketingAgreement: true,
          },
        },
      });
      console.log(result);
      Modal.success({
        content: "회원가입이 완료되었습니다.",
        onOk() {
          router.push("/login");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  let timer: any = null;
  function timeout() {
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

  const onClickSendCert = async () => {
    try {
      const result: any = await sendTokenToPhone({
        variables: {
          phone: getValues("phone"),
        },
      });
      Modal.info({ content: result?.data.sendTokenToPhone });
      timeout();
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickCert = async () => {
    try {
      const result: any = await authPhoneOk({
        variables: {
          phone: getValues("phone"),
          inputToken: getValues("inputToken"),
        },
      });
      if (result?.data.authPhoneOk) {
        Modal.success({ content: "인증이 완료되었습니다." });
        setIsCert(true);
      }
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickEmailDupCheck = async () => {
    const result: any = await hasEmail({
      variables: {
        email: getValues("email"),
      },
    });
    if (result.data?.checkEmail) {
      Modal.success({ content: "사용 가능한 이메일입니다." });
      setIsEmailValid(true);
    } else {
      Modal.error({ content: "이미 존재하는 이메일입니다." });
    }
  };

  // const onClickNicknameDupCheck = async () => {
  //   const result = await hasNickname({
  //     variables: {
  //       nickname: getValues("nickname"),
  //     },
  //   });
  //   if (result) {
  //     Modal.success({ content: "사용 가능한 닉네임입니다." });
  //   } else {
  //     Modal.error({ content: "이미 존재하는 닉네임입니다." });
  //   }
  // };

  return (
    <EmailSignUpContainerPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSendCert={onClickSendCert}
      tokenToggle={tokenToggle}
      time={time}
      watch={watch}
      onClickCert={onClickCert}
      onClickEmailDupCheck={onClickEmailDupCheck}
      isCert={isCert}
      isEmailValid={isEmailValid}
    />
  );
}

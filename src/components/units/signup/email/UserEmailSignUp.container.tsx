import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import UserEmailSignUpPageUI from "./UserEmailSignUp.presenter";
import {
  AUTH_PHONE_OK,
  CHECK_EMAIL,
  CHECK_NICKNAME,
  CREATE_USER,
  SEND_TOKEN_TO_PHONE,
} from "./UserEmailSignUp.queries";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .matches(
      /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식이 적합하지 않습니다."
    ),
  nickname: yup
    .string()
    .required("닉네임은 필수 입력입니다.")
    .min(2, "닉네임은 최소 2글자 이상 입력해주세요.")
    .max(8, "닉네임은 최대 8글자를 초과할 수 없습니다."),
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
    .required("휴대폰 번호를 -없이 입력해주세요.")
    .matches(/^010-?([0-9]{4})-?([0-9]{4})$/, "형식에 맞지 않는 번호입니다."),
  inputToken: yup
    .string()
    .required("인증번호를 확인해주세요.")
    .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
  termsAgree: yup.boolean().oneOf([true]).required(),
  termsPrivacy: yup.boolean().oneOf([true]).required(),
  marketingAgreement: yup.boolean(),
});

export default function UserEmailSignUpContainerPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [checkEmail] = useMutation(CHECK_EMAIL);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [sendTokenToPhone] = useMutation(SEND_TOKEN_TO_PHONE);
  const [authPhoneOk] = useMutation(AUTH_PHONE_OK);
  const [isCert, setIsCert] = useState(false);
  const [time, setTime] = useState(180);
  const [start, setStart] = useState(1);
  const [tokenToggle, setTokenToggle] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    let timer: any = null;
    if (start === 2) {
      setTokenToggle(true);
      let newTime = time;
      timer = setInterval(function () {
        setTime(--newTime);

        if (newTime <= 0) {
          clearInterval(timer);
          setTime(180);
          setStart(1);
          Modal.error({ content: "입력 시간이 초과되었습니다." });
          setTokenToggle(false);
        }
      }, 1000);
    } else if (start === 3) {
      clearInterval(timer);
      setTime(180);
      setStart(1);
      setTokenToggle(false);
    }
    return () => {
      clearInterval(timer);
    };
  });

  const onClickSignUp = async (data: any) => {
    if (data.marketingAgreement === undefined) {
      data.marketingAgreement = false;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
            phone: data.phone,
            isHost: false,
            marketingAgreement: data.marketingAgreement,
          },
        },
      });
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

  const onClickSendCert = async () => {
    if (isCert) return;
    try {
      const result: any = await sendTokenToPhone({
        variables: {
          phone: getValues("phone"),
        },
      });
      Modal.info({
        content: result?.data.sendTokenToPhone,
        onOk() {
          setTokenToggle(true);
          setStart(2);
        },
      });
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
        Modal.success({
          content: "인증이 완료되었습니다.",
          onOk() {
            setIsCert(true);
            setStart(3);
          },
        });
      } else {
        Modal.error({
          content: "인증번호가 일치하지 않습니다.",
          onOk() {
            // setStart(3);
            setValue("inputToken", "");
            trigger("inputToken");
          },
        });
      }
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickEmailDupCheck = async () => {
    try {
      await checkEmail({
        variables: {
          email: getValues("email"),
        },
      });
      Modal.success({ content: "사용 가능한 이메일입니다." });
      setIsEmailValid(true);
    } catch (error: any) {
      Modal.error({ content: "이미 존재하는 이메일입니다." });
    }
  };

  const onClickNicknameDupCheck = async () => {
    try {
      await checkNickname({
        variables: {
          nickname: getValues("nickname"),
        },
      });
      Modal.success({ content: "사용 가능한 닉네임입니다." });
      setIsNicknameValid(true);
    } catch (error: any) {
      Modal.error({ content: "이미 존재하는 닉네임입니다." });
    }
  };

  return (
    <UserEmailSignUpPageUI
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
      onClickNicknameDupCheck={onClickNicknameDupCheck}
      isCert={isCert}
      isEmailValid={isEmailValid}
      isNicknameValid={isNicknameValid}
      setValue={setValue}
      trigger={trigger}
    />
  );
}

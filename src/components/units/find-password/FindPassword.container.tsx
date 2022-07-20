import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FindPasswordPageUI from "./FindPassword.presenter";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import {
  AUTH_PHONE_OK,
  CHECK_PHONE,
  SEND_TOKEN_TO_PHONE,
} from "./FindPassword.queries";
import { useMutation } from "@apollo/client";

const schema = yup.object({
  phone: yup
    .string()
    .matches(/^010-?([0-9]{4})-?([0-9]{4})$/, "형식에 맞지 않는 번호입니다."),
  inputToken: yup
    .string()
    .required("인증번호를 확인해주세요.")
    .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
  newPassword: yup
    .string()
    .required("새 비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
    ),
  newPasswordCheck: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("newPassword"), null], "비밀번호가 일치하지 않습니다."),
});

export default function FindPasswordPage() {
  const [sendTokenToPhone] = useMutation(SEND_TOKEN_TO_PHONE);
  const [authPhoneOk] = useMutation(AUTH_PHONE_OK);
  const [checkPhone] = useMutation(CHECK_PHONE);
  const [isCert, setIsCert] = useState(false);
  const [time, setTime] = useState(180);
  const [start, setStart] = useState(1);
  const [tokenToggle, setTokenToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  const {
    register,
    formState,
    handleSubmit,
    watch,
    setValue,
    getValues,
    trigger,
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

  const onClickSendCert = async () => {
    if (isCert) return;
    try {
      const result: any = await checkPhone({
        variables: {
          phone: getValues("phone"),
        },
      });
      console.log(result);
      if (result.data.checkPhone) {
        Modal.error({
          content: "등록되지 않은 번호입니다.",
        });
        return;
      }
      const tokenResult: any = await sendTokenToPhone({
        variables: {
          phone: getValues("phone"),
        },
      });

      Modal.info({
        content: tokenResult?.data.sendTokenToPhone,
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
            setVisible((prev) => !prev);
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

  // const onClickChangePassword = () => {
  //   FORGET_PASSWORD({
  //     variables: {
  //       email,
  //       newPassword,
  //     }
  //   })
  // }

  return (
    <FindPasswordPageUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      watch={watch}
      isCert={isCert}
      tokenToggle={tokenToggle}
      time={time}
      setValue={setValue}
      trigger={trigger}
      visible={visible}
      onClickSendCert={onClickSendCert}
      onClickCert={onClickCert}
    />
  );
}

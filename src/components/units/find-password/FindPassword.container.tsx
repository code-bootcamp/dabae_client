import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FindPasswordPageUI from "./FindPassword.presenter";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import {
  CHECK_PHONE,
  FORGOT_PASSWORD_SEND_TOKEN,
  FORGOT_PASSWORD_AUTH_PHONE_OK,
  FORGOT_PASSWORD_UPDATE,
} from "./FindPassword.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const schema = yup.object({
  phone: yup.string(),
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
  const router = useRouter();
  const [checkPhone] = useMutation(CHECK_PHONE);
  const [forgotPasswordUpdate] = useMutation(FORGOT_PASSWORD_UPDATE);
  const [forgotPasswordSendToken] = useMutation(FORGOT_PASSWORD_SEND_TOKEN);
  const [forgotPasswordAuthPhoneOk] = useMutation(
    FORGOT_PASSWORD_AUTH_PHONE_OK
  );
  const [isCert, setIsCert] = useState(false);
  const [time, setTime] = useState(180);
  const [start, setStart] = useState(1);
  const [tokenToggle, setTokenToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const [defaultEmail, setDefaultEmail] = useState("");
  const [changePassword, setChangePassword] = useState("");

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
      const phoneResult: any = await checkPhone({
        variables: {
          phone: getValues("phone"),
        },
      });
      if (phoneResult.data.checkPhone) {
        Modal.error({
          content: "등록되지 않은 번호입니다.",
        });
        return;
      }
      const tokenResult: any = await forgotPasswordSendToken({
        variables: {
          phone: getValues("phone"),
        },
      });

      Modal.info({
        content: tokenResult?.data.forgotPasswordSendToken,
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
      const certResult: any = await forgotPasswordAuthPhoneOk({
        variables: {
          phone: getValues("phone"),
          inputToken: getValues("inputToken"),
        },
      });
      if (certResult?.data.forgotPasswordAuthPhoneOk) {
        Modal.success({
          content: "인증이 완료되었습니다.",
          onOk() {
            setDefaultEmail(certResult?.data.forgotPasswordAuthPhoneOk);
            setIsCert(true);
            setStart(3);
            setVisible((prev) => !prev);
          },
        });
      } else {
        Modal.error({
          content: "인증번호가 일치하지 않습니다.",
          onOk() {
            setValue("inputToken", "");
            trigger("inputToken");
          },
        });
      }
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickChangePassword = async () => {
    try {
      const passwordResult = await forgotPasswordUpdate({
        variables: {
          newPassword: getValues("newPassword"),
          email: defaultEmail,
        },
      });
      if (passwordResult?.data.forgotPasswordUpdate) {
        Modal.success({
          content: "비밀번호 변경이 완료되었습니다.",
          onOk() {
            setChangePassword(passwordResult?.data.forgotPasswordUpdate);
            router.push("/login");
          },
        });
      }
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

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
      defaultEmail={defaultEmail}
      changePassword={changePassword}
      onClickSendCert={onClickSendCert}
      onClickCert={onClickCert}
      onClickChangePassword={onClickChangePassword}
    />
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HostEmailSignUpContainerUI from "./HostEmailSignUp.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./HostEmailSignUp.queries";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  name: yup.string().required("호스트 명은 필수 입력입니다."),
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
    .required("-없이 입력해주세요.")
    .matches(/^\d{11}$/, "형식에 맞지 않는 번호입니다."),
  // businessNumber: yup
  //     .string()
  //     .required("")
  //     .matches(/^(\d{3,3})+[-]+(\d{2,2})+[-]+(\d{5,5}))
  certNum: yup
    .string()
    .required("인증번호를 확인해주세요.")
    .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
});

export default function HostEmailSignUpContainerPage() {
  // const phoneRef: any = useRef();
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  // const [num, setNum] = useState("");
  const [time, setTime] = useState(180);
  const [tokenToggle, setTokenToggle] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: any) => {
    // console.log(data);
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
          },
        },
      });
      alert("회원가입이 완료되었습니다.");
      router.push("/host/login");
    } catch (error: any) {
      alert(error.message);
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
        alert("입력 시간이 초과되었습니다.");
        setTime(3);
        setTokenToggle(false);
      }
    }, 1000);
  }

  // function autoHyphen(data: any) {
  //   // dataVal은 정규식을 입혀줄 데이터
  //   setNum(
  //     data
  //       .replace(/[^0-9]/g, "")
  //       .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3")
  //       .replace(/(\-{1,2})$/g, "")
  //   );
  // }

  // // 휴대폰 번호 입력 함수
  // const autoHyphen = (e: any) => {
  //   const value = phoneRef.current.value.replace(/\D+/g, "");
  //   const numberLength = 11;

  //   let result = "";

  //   for (let i = 0; i < value.length && i < numberLength; i++) {
  //     switch (i) {
  //       case 3:
  //         result += "-";
  //         break;
  //       case 7:
  //         result += "-";
  //         break;

  //       default:
  //         break;
  //     }

  //     result += value[i];
  //   }

  //   phoneRef.current.value = result;

  //   setNum(e.target.value);
  // };

  return (
    <HostEmailSignUpContainerUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSend={onClickSend}
      tokenToggle={tokenToggle}
      time={time}
      watch={watch}
      // autoHyphen={autoHyphen}
      // num={num}
    />
  );
}

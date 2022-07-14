import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EmailSignUpContainerPageUI from "./EmailSignUp.presenter";
import { CREATE_USER } from "./EmailSignUp.queries";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  name: yup.string().required("이름은 필수 입력입니다."),
  nickName: yup.string().required("닉네임은 필수 입력입니다."),
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
  phoneNumber: yup
    .string()
    .required("-없이 입력해주세요.")
    .matches(/^\d{11}$/, "형식에 맞지 않는 번호입니다."),
  certNum: yup
    .string()
    .required("인증번호를 확인해주세요.")
    .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
});

export default function EmailSignUpContainerPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  // const [inputValue, setInputValue] = useState();
  const [cert, setCert] = useState(false);
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
            name: data.name,
          },
        },
      });
      alert("회원가입이 완료되었습니다.");
      router.push("/login");
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

  const onClickCert = () => {
    setCert(true);
  };

  // const handleChange = (event: any) => {
  //   const regex = /^[0-9\b -]{0,13}$/;
  //   if (regex.test(event.target.value)) {
  //     setInputValue(event.target.value);
  //   }
  // };

  return (
    <EmailSignUpContainerPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSend={onClickSend}
      tokenToggle={tokenToggle}
      time={time}
      watch={watch}
      onClickCert={onClickCert}
      cert={cert}
      // handleChange={handleChange}
      // inputValue={inputValue}
    />
  );
}

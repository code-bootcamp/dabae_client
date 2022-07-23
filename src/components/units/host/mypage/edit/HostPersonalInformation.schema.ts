import * as yup from "yup";

export const HostPersonalInformationSchema = yup.object({
  // email: yup
  //   .string()
  //   .required("이메일은 필수 입력입니다.")
  //   .matches(
  //     /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //     "이메일 형식이 적합하지 않습니다."
  //   ),
  // nickname: yup.string().required("닉네임은 필수 입력입니다."),
  // password: yup
  //   .string()
  //   .required("비밀번호는 필수 입력입니다.")
  //   .matches(
  //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
  //     "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
  //   ),
  // passwordCheck: yup
  //   .string()
  //   .required("비밀번호를 확인해주세요.")
  //   .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  // phone: yup
  //   .string()
  //   .required("-없이 입력해주세요.")
  //   .matches(/^010-?([0-9]{4})-?([0-9]{4})$/, "형식에 맞지 않는 번호입니다."),
  // inputToken: yup
  //   .string()
  //   .required("인증번호를 확인해주세요.")
  //   .matches(/^\d{6}$/, "인증번호 6자리를 입력해주세요."),
});

import * as yup from "yup";

export const HostPersonalInformationSchema = yup.object({
  nickname: yup
    .string()
    .min(2, "닉네임은 최소 2글자 이상 입력해주세요.")
    .max(8, "닉네임은 최대 8글자를 초과할 수 없습니다."),
  businessName: yup.string(),
  businessNumber: yup.string(),
  bank: yup.string(),
  account: yup.string(),
  currentCheckPassword: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
    ),
  newCheckPassword: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
    ),
  newDoubleCheckPassword: yup
    .string()
    .oneOf(
      [yup.ref("newCheckPassword")],
      "새로운 비밀번호가 일치하지 않습니다. 다시 입력해주세요"
    ),
});

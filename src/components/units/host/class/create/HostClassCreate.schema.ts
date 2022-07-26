import * as yup from "yup";

export const HostClassCreateSchema = yup.object().shape({
  address: yup.string().required("주소가 필요합니다."),
  addressDetail: yup.string().required("상세주소가 필요합니다."),
  zipCode: yup.string().required("우편번호가 필요합니다."),
  firstCategory: yup.string().required("카테고리를 선택해주세요"),
  maxPrice: yup
    .number()
    .moreThan(yup.ref("minPrice"), "최소 비용보다 커야합니다.")
    .typeError("숫자를 입력해야합니다.")
    .required("최대비용을 입력해주세요"),
  minPrice: yup
    .number()
    .lessThan(yup.ref("maxPrice"), "최대 비용보다 작아야합니다.")
    .typeError("숫자를 입력해야합니다.")
    .required("최소비용을 입력해주세요"),
  lat: yup.number().required("위도가 필요합니다. 주소를 바꾸어주세요"),
  lng: yup.number().required("경도가 필요합니다. 주소를 바꾸어주세요"),
  imageURLs: yup
    .array()
    .min(1, "최소한 1장의 이미지가 필요합니다.")
    .required("최소한 1장의 이미지가 필요합니다."),
  name: yup.string().min(10, "최소 10글자 이상 입력해주세요").required(),
  contents: yup.string().required("필수적으로 내용을 입력해야 합니다."),
  openingDate: yup.date().required("개강날짜를 입력해주세요"),
  closingDate: yup.date().required("종강날짜를 입력해주세요"),
  difficulty: yup.string().required("난이도를 선택해주세요"),
  courseDate: yup.array().required("최소 1개의 날짜에 수업을 등록해야합니다."),
  // email: yup
  //   .string()
  //   .email("이메일 형식이 적합하지 않습니다.")
  //   .matches(
  //     /^\w+@\w+\.\w+(\.\w+)?$/,
  //     "example@abc.com 과 같은 양식을 지켜주세요"
  //   )
  //   .required("이메일은 필수 입력 사항입니다."),
  // password: yup
  //   .string()
  //   .min(8, "비밀번호는 최소 8자리 이상 입력해 주세요")
  //   .max(16, "비밀번호를 최대 16자리로 입력해 주세요")
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()-_=+])[A-Za-z\d`~!@#$%^&*()-_=+]{8,16}$/,
  //     "최소 숫자1개,대소문자1개씩 8자리에서 16자리 이하입니다."
  //   )
  //   .required("비밀번호는 필수 입력 사항입니다."),
  // date: yup
  //   .string()
  //   .matches(
  //     /^(19|20|21)\d{2}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[0-1])$/,
  //     "1999.10.31과 같이 입력을 해주세요"
  //   ),
  // phone: yup
  //   .string()
  //   .matches(
  //     /^\d{3}-\d{4}-\d{4}$/,
  //     "-기호를 넣어서 010-1234-5678과 같이 입력해주세요"
  //   ),
  // writer: yup.string().max(5, "5글자 이내로 입력해주세요"),
  // title: yup.string().max(100, "100글자 이내로 입력해주세요"),
  // contents: yup.string().max(1000, "1000글자 이내로 입력해주세요"),
});

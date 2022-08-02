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
  // contents: yup.string().required("필수적으로 내용을 입력해야 합니다."),
  openingDate: yup.date().required("개강날짜를 입력해주세요"),
  closingDate: yup.date().required("종강날짜를 입력해주세요"),
  difficulty: yup.string().required("난이도를 선택해주세요"),
  courseDate: yup.array().required("최소 1개의 날짜에 수업을 등록해야합니다."),
});

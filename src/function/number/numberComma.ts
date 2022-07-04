// 3자리 숫자마다 ,를 찍어주는 함수

const numberComma = (value: number | string) => {
  return Number(value).toLocaleString("ko-KR");
};

export default numberComma;

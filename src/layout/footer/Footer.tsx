import { CF } from "@/styles/commonComponentStyle";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <CF.ColumnDiv width="100%" gap={7} style={{ justifyContent: "center" }}>
          {/* <S.Title>다배</S.Title> */}
          <S.CompanyText>㈜다배 | 사업자 번호: 123-45-67890</S.CompanyText>
          <S.CompanyText>통신판매업신고번호 : 2022-서울-1111</S.CompanyText>
          <S.CompanyText>대표 : 홍성표</S.CompanyText>
          <S.CompanyText>
            서울특별시 구로구 디지털로 300 지밸리비즈플라자 13층
          </S.CompanyText>
        </CF.ColumnDiv>
        <CF.ColumnDiv width="100%" style={{ justifyContent: "center" }}>
          <S.Title>고객센터</S.Title>
          <S.InfoText>이메일 : aa@aaa.com</S.InfoText>
          <S.InfoText>고객센터 : 02-123-4567</S.InfoText>
          <S.InfoText>
            업무시간 : 평일 10:00 - 17:00 (점심: 12:00 - 13:00)
          </S.InfoText>
        </CF.ColumnDiv>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;

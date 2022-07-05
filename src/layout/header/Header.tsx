import { CF } from "@/styles/commonComponentStyle";
import * as S from "./Header.styles";

// 검색 돋보기
// data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23AAA' stroke-width='2' d='M11 17c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM15 15l4.95 4.95'/%3E %3C/svg%3E

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <CF.RowDiv>
          <S.EmptyButton>
            <CF.ColumnCenterDiv>
              <S.Img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Crect width='17.25' height='.75' x='3.375' y='8.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3Crect width='17.25' height='.75' x='3.375' y='14.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3Crect width='17.25' height='.75' x='3.375' y='20.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3C/svg%3E"
                alt="카테고리 햄버거바"
              />
              <S.HeaderText>카테고리</S.HeaderText>
            </CF.ColumnCenterDiv>
          </S.EmptyButton>
          <S.EmptyBar></S.EmptyBar>
          <S.Link href="/">
            <S.Logo src="data:image/svg+xml,%3Csvg width='850' height='203' viewBox='0 0 850 203' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2463_9412)'%3E %3Cpath d='M67.33 129.28L54.5 202.02H0L35.63 0.0200195H253.06L245.91 40.6H83L74.41 89.3H237.29L230.29 129.3L67.33 129.28Z' fill='%238521FF'/%3E %3Cpath d='M507.63 202.02L543.22 0.0200195H597.71L562.13 202.02H507.63Z' fill='%238521FF'/%3E %3Cpath d='M725.64 129.28H660.77L648 202.02H594.37L630 0.0200195H799.89C835.55 0.0200195 850.04 5.82002 850.04 27.27C849.934 32.1452 849.351 36.9983 848.3 41.76L839.6 87.27C832.6 121.77 818.15 129.01 783.37 129.27L725.64 129.28ZM794.34 44.93C794.509 44.2759 794.607 43.6053 794.63 42.93C794.63 40.03 792.89 39.45 788.84 39.45H676.63L667.85 89.31H779.27C784.2 89.31 785.94 88.44 786.81 83.51L794.34 44.93Z' fill='%238521FF'/%3E %3Cpath d='M455.2 0.0200195H285.31L249.68 202.02H303.31L316.12 129.26H381L429.11 202.02H489.41L438.68 129.26C473.46 128.97 487.96 121.73 494.91 87.26L503.61 41.75C504.662 36.9884 505.245 32.1352 505.35 27.26C505.35 5.80001 490.85 0.0200195 455.2 0.0200195ZM449.69 44.95L442.16 83.5C441.29 88.43 439.55 89.3 434.62 89.3H341.73L318.26 117.3L323.2 89.3L332 39.42H444.19C448.19 39.42 449.98 40 449.98 42.9C449.959 43.5853 449.862 44.2662 449.69 44.93V44.95Z' fill='%238521FF'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2463_9412'%3E %3Crect width='850' height='202.04' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E" />
          </S.Link>
          <S.SearchBox>
            <S.SearchInput placeholder="검색어를 입력해주세요." />
          </S.SearchBox>
        </CF.RowDiv>
        <CF.RowBetweenDiv width="144px">
          <S.Link href="/">
            <CF.ColumnCenterDiv>
              <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Crect width='16.5' height='17.5' x='3.75' y='5.75' stroke='%23333' stroke-width='1.5' rx='4.25'/%3E %3Cpath stroke='%23333' stroke-width='.75' d='M3.375 17.375H20.625V18.125H3.375z'/%3E %3C/svg%3E" />
              <S.HeaderText>피드</S.HeaderText>
            </CF.ColumnCenterDiv>
          </S.Link>
          <S.Link href="/">
            <CF.ColumnCenterDiv>
              <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M19.249 22.754c-.657-.482-1.52-1.135-2.412-1.811l-1.097-.83c-.786-.592-1.535-1.153-2.113-1.566-.288-.205-.543-.381-.741-.508-.098-.062-.195-.12-.282-.166-.043-.022-.097-.048-.155-.07-.039-.015-.161-.061-.315-.061h-.026l-.148.005c-.141.002-.29.026-.449.095-.142.061-.263.146-.362.222-.111.084-.262.212-.46.378l-.44.37c-.844.699-2.411 1.95-5.499 4.16V7.868h0V7.86c-.006-.546.24-1.101.734-1.538.371-.322.887-.532 1.455-.568l.175-.005h9.768c1.419.056 2.34 1.008 2.367 1.946v15.058z'/%3E %3C/svg%3E" />
              <S.HeaderText>저장</S.HeaderText>
            </CF.ColumnCenterDiv>
          </S.Link>
          <S.Link href="/my">
            <CF.ColumnCenterDiv>
              <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M3.75 20c0-2.347 1.903-4.25 4.25-4.25h8c2.347 0 4.25 1.903 4.25 4.25v3.25H3.75V20z'/%3E %3Ccircle cx='12' cy='9' r='3.25' stroke='%23333' stroke-width='1.5'/%3E %3C/svg%3E" />
              <S.HeaderText>마이</S.HeaderText>
            </CF.ColumnCenterDiv>
          </S.Link>
        </CF.RowBetweenDiv>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;

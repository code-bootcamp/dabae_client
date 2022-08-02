import { CF } from "@/styles/commonComponentStyle";
import Link from "next/link";
import * as S from "./Header.styles";
import { IHeaderPresenter } from "./Header.types";

export default function HeaderPresenter(props: IHeaderPresenter) {
  return (
    <S.Container>
      <S.CategoryInner open={props.open} onClick={() => props.setOpen(false)}>
        <S.CategoryTitleBox>
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          <S.CloseButton onClick={() => props.setOpen(!props.open)}>
            닫기
          </S.CloseButton>
        </S.CategoryTitleBox>
        <S.CategoryListInner>
          <S.CategoryListBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/product_banner_1592887555895_114991" />
                  <S.CategoryItemText>피트니스</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/1703_kayak_01_1490236706090" />
                  <S.CategoryItemText>아웃도어</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/1610_Gongbang_01_1477457672181" />
                  <S.CategoryItemText>공예DIY</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/WINE_MAIN_01_1504598552674" />
                  <S.CategoryItemText>쿠킹</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/product_banner_1569304469093_785839" />
                  <S.CategoryItemText>스포츠</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/KakaoTalk_20211005_113617194_04_vd48r1" />
                  <S.CategoryItemText>베이킹</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/65_a6cceb00aaf2b32a0f17d47678ba093b3590d33c0c99c8d2d74f630d1a2daf49" />
                  <S.CategoryItemText>문화예술</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
            <S.CategoryItemBox>
              <Link href="/list">
                <S.Link>
                  <S.CategoryItem src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_310/product_banner_1604559881747_653686" />
                  <S.CategoryItemText>자기계발</S.CategoryItemText>
                </S.Link>
              </Link>
            </S.CategoryItemBox>
          </S.CategoryListBox>
        </S.CategoryListInner>
      </S.CategoryInner>
      <S.Wrapper>
        <CF.RowDiv width="100%">
          <S.EmptyButton>
            <S.HeaderBox onClick={() => props.setOpen(!props.open)}>
              <S.Img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Crect width='17.25' height='.75' x='3.375' y='8.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3Crect width='17.25' height='.75' x='3.375' y='14.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3Crect width='17.25' height='.75' x='3.375' y='20.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3C/svg%3E"
                alt="카테고리 햄버거바"
              />
              <S.HeaderText>카테고리</S.HeaderText>
            </S.HeaderBox>
          </S.EmptyButton>
          <S.EmptyBar></S.EmptyBar>
          <Link href="/">
            <S.Link>
              <S.LogoImage src="/images/logo.svg" />
            </S.Link>
          </Link>
          <S.SearchBox>
            <S.SearchInput
              value={props.search}
              onChange={props.onChangeSearch}
              onKeyPress={props.onClickKeyPress}
              placeholder="검색어를 입력해주세요."
            />
            <S.SearchImg
              onClick={props.onClickSearch}
              src="/images/search.svg"
              alt="searchImg"
            />
          </S.SearchBox>
        </CF.RowDiv>
        <S.RightInner>
          <S.RightBox>
            {props.data ? (
              <>
                <S.MyInner>
                  <S.MyBox onClick={() => props.setMy(!props.my)}>
                    <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M3.75 20c0-2.347 1.903-4.25 4.25-4.25h8c2.347 0 4.25 1.903 4.25 4.25v3.25H3.75V20z'/%3E %3Ccircle cx='12' cy='9' r='3.25' stroke='%23333' stroke-width='1.5'/%3E %3C/svg%3E" />
                    <S.HeaderText>{`${props.data?.fetchLoginUser.nickname}님`}</S.HeaderText>
                  </S.MyBox>
                  <S.MyListBox my={props.my} onClick={() => props.setMy(false)}>
                    <S.EmptyBox onClick={props.logout}>
                      <S.Link>
                        <S.MyListItem>로그아웃</S.MyListItem>
                      </S.Link>
                    </S.EmptyBox>
                    <Link href="/my">
                      <S.Link>
                        <S.MyListItem>마이페이지</S.MyListItem>
                      </S.Link>
                    </Link>
                    {props.data?.fetchLoginUser.isHost === true && (
                      <Link href="/host/dashboard/home">
                        <S.Link>
                          <S.MyListItem>호스트페이지</S.MyListItem>
                        </S.Link>
                      </Link>
                    )}
                  </S.MyListBox>
                </S.MyInner>
                <S.HeaderBox onClick={props.saveMove}>
                  <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M19.249 22.754c-.657-.482-1.52-1.135-2.412-1.811l-1.097-.83c-.786-.592-1.535-1.153-2.113-1.566-.288-.205-.543-.381-.741-.508-.098-.062-.195-.12-.282-.166-.043-.022-.097-.048-.155-.07-.039-.015-.161-.061-.315-.061h-.026l-.148.005c-.141.002-.29.026-.449.095-.142.061-.263.146-.362.222-.111.084-.262.212-.46.378l-.44.37c-.844.699-2.411 1.95-5.499 4.16V7.868h0V7.86c-.006-.546.24-1.101.734-1.538.371-.322.887-.532 1.455-.568l.175-.005h9.768c1.419.056 2.34 1.008 2.367 1.946v15.058z'/%3E %3C/svg%3E" />
                  <S.HeaderText>저장</S.HeaderText>
                </S.HeaderBox>
              </>
            ) : (
              <S.MyLoginInner>
                <S.MyLoginBox>
                  <S.LoginButton onClick={props.LoginMove}>
                    로그인
                  </S.LoginButton>
                </S.MyLoginBox>
                <S.MyLoginBox>
                  <S.SignupButton onClick={props.SignupMove}>
                    회원가입
                  </S.SignupButton>
                </S.MyLoginBox>
                <S.MyLoginBox>
                  <S.SignupButton onClick={props.hostSignMove}>
                    호스트지원
                  </S.SignupButton>
                </S.MyLoginBox>
              </S.MyLoginInner>
            )}
          </S.RightBox>
        </S.RightInner>
      </S.Wrapper>
      <S.MobileWrapper>
        <S.MobileInner>
          <Link href="/">
            <S.Link>
              <S.HeaderBox>
                <S.Img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23777' stroke-width='1.5' d='M9.545 17.467h-.75v5.783H3.75V12.16L12 5.94l8.25 6.22v11.09h-5.046v-5.783H9.546z'/%3E %3C/svg%3E"
                  alt="카테고리 햄버거바"
                />
                <S.HeaderText>홈</S.HeaderText>
              </S.HeaderBox>
            </S.Link>
          </Link>
          <S.HeaderBox onClick={() => props.setOpen(!props.open)}>
            <S.Img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Crect width='17.25' height='.75' x='3.375' y='8.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3Crect width='17.25' height='.75' x='3.375' y='14.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3Crect width='17.25' height='.75' x='3.375' y='20.375' stroke='%23333' stroke-width='.75' rx='.375'/%3E %3C/svg%3E"
              alt="카테고리 햄버거바"
            />
            <S.HeaderText>카테고리</S.HeaderText>
          </S.HeaderBox>
          <Link href="/">
            <S.Link>
              <S.HeaderBox onClick={props.saveMove}>
                <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M19.249 22.754c-.657-.482-1.52-1.135-2.412-1.811l-1.097-.83c-.786-.592-1.535-1.153-2.113-1.566-.288-.205-.543-.381-.741-.508-.098-.062-.195-.12-.282-.166-.043-.022-.097-.048-.155-.07-.039-.015-.161-.061-.315-.061h-.026l-.148.005c-.141.002-.29.026-.449.095-.142.061-.263.146-.362.222-.111.084-.262.212-.46.378l-.44.37c-.844.699-2.411 1.95-5.499 4.16V7.868h0V7.86c-.006-.546.24-1.101.734-1.538.371-.322.887-.532 1.455-.568l.175-.005h9.768c1.419.056 2.34 1.008 2.367 1.946v15.058z'/%3E %3C/svg%3E" />
                <S.HeaderText>저장</S.HeaderText>
              </S.HeaderBox>
            </S.Link>
          </Link>
          {props.data ? (
            <Link href="/my">
              <S.Link>
                <S.MyBox>
                  <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M3.75 20c0-2.347 1.903-4.25 4.25-4.25h8c2.347 0 4.25 1.903 4.25 4.25v3.25H3.75V20z'/%3E %3Ccircle cx='12' cy='9' r='3.25' stroke='%23333' stroke-width='1.5'/%3E %3C/svg%3E" />
                  <S.HeaderText>마이</S.HeaderText>
                </S.MyBox>
              </S.Link>
            </Link>
          ) : (
            <Link href="/signup">
              <S.Link>
                <S.MyBox>
                  <S.Img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23333' stroke-width='1.5' d='M3.75 20c0-2.347 1.903-4.25 4.25-4.25h8c2.347 0 4.25 1.903 4.25 4.25v3.25H3.75V20z'/%3E %3Ccircle cx='12' cy='9' r='3.25' stroke='%23333' stroke-width='1.5'/%3E %3C/svg%3E" />
                  <S.HeaderText>마이</S.HeaderText>
                </S.MyBox>
              </S.Link>
            </Link>
          )}
        </S.MobileInner>
      </S.MobileWrapper>
    </S.Container>
  );
}

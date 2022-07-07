import theme from "@/styles/theme";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #e9e9e9;
  padding: 20px;

  @media (max-width: 768px) {
    height: 100%;
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: initial;
  }
`;

export const EmptyButton = styled.button`
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const HeaderText = styled.p`
  margin: 0;
  margin-top: 5px;
  ${theme.fontSizes.small};
  line-height: 14px;
  letter-spacing: -0.3px;
  text-align: center;
  color: rgb(51, 51, 51);
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const EmptyBar = styled.span`
  width: 1px;
  height: 38px;
  background-color: rgb(238, 238, 238);
  margin: 0 20px;
  display: inline-block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a``;

export const RightInner = styled.div`
  width: 180px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// 로그인 전

export const MyLoginInner = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const MyLoginBox = styled.div`
  margin-right: 15px;
  :last-child {
    margin-right: 0;
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;
  ${theme.fontSizes.small}
`;

export const SignupButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;
  ${theme.fontSizes.small}
`;

// 로그인 후
export const MyInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-right: 20px;
`;

// 마이 토글 버튼

export const MyBox = styled.div`
  cursor: pointer;
  text-align: center;
`;

const myOpen = keyframes`
  from {
    top: 100px;
    opacity: 0;
    display: none;
  }
  to {
    top: 50px;
    opacity: 1;
    display: block;
  }
`;

const myClose = keyframes`
  from {
    top: 50px;
    opacity: 1;
    display: block;
  }
  to {
    top: 100px;
    opacity: 0;
    display: none;
  }
`;

export const MyListBox = styled.ul`
  margin: 0;
  width: 140px;
  position: absolute;
  z-index: 1;
  top: 50px;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
  list-style: none;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  animation: ${(props: { my: boolean }) => (props.my ? myOpen : myClose)} 0.3s
    ease-in-out forwards; //forwards 상태유지
`;

export const MyListItem = styled.li`
  font-weight: 700;
  ${theme.fontSizes.small};
  padding-bottom: 10px;
`;

export const SearchBox = styled.div`
  width: 400px;
  padding: 0 15px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    padding-left: 15px;
  }
`;

export const SearchImg = styled.img`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
`;

export const SearchInput = styled.input`
  outline: none;
  padding: 12px 42px;
  border-radius: 25px;
  background-color: rgb(244, 244, 244);
  ${theme.fontSizes.small};
  color: #000000;
  line-height: 22px;
  font-weight: 400;
  border: 0;
  width: 100%;
  ::placeholder {
    ${theme.fontSizes.small};
    line-height: 22px;
    font-weight: 400;
    color: #999999;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

// 사이드 바 토글 CSS

const categoryOpen = keyframes`
  from {
    left: -800px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`;

const categoryClose = keyframes`
  from {
    left: 0px;
    opacity: 1;
  }
  to {
    left: -800px;
    opacity: 0;
  }
`;

export const CategoryInner = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: -450px;
  width: 450px;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
  padding: 20px;
  animation: ${(props: { open: boolean }) =>
      props.open ? categoryOpen : categoryClose}
    0.5s ease-in-out forwards; //forwards 상태유지

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CategoryTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e9e9;
`;

export const CategoryTitle = styled.h2`
  font-weight: bold;
  ${theme.fontSizes.subTitle};
`;

export const CategoryListInner = styled.div`
  @media (max-width: 786px) {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 180px;
  }
`;

export const CategoryListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10;
`;

export const CategoryItemBox = styled.div`
  width: 50%;
  height: 150px;
  padding: 10px;
  position: relative;
  :last-child {
    margin-bottom: 0;
  }
`;

export const CategoryItem = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  margin-right: 20px;
`;

export const CategoryItemText = styled.p`
  position: absolute;
  margin: 0;
  font-weight: bold;
  ${theme.fontSizes.base};
  color: #fff;
  bottom: 20px;
  left: 20px;
`;

export const CloseButton = styled.button`
  font-weight: bold;
  ${theme.fontSizes.base};
`;

// 모바일 헤더 -> footer로 감

export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
  }
`;

export const MobileInner = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

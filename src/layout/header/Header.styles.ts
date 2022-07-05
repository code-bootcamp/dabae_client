import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #e9e9e9;
  padding: 20px;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const MyListBox = styled.ul`
  margin: 0;
  width: 140px;
  position: absolute;
  z-index: 1;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.3s ease-in-out;
  list-style: none;
  visibility: hidden;
  opacity: 0;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

// ${MyBox}:hover & {
//     visibility: visible;
//     opacity: 1;
//   }

// &:hover + ${MyListBox} {
//     visibility: visible;
//     opacity: 1;
//   }

// ${MyListBox} {
//     &:hover {
//       visibility: visible;
//       opacity: 1;
//     }
//   }

export const MyListItem = styled.li`
  font-weight: 700;
  ${theme.fontSizes.small};
  padding-bottom: 10px;
`;

export const SearchBox = styled.div`
  width: 400px;
  padding: 0 15px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    padding-left: 15px;
  }
`;

export const SearchInput = styled.input`
  /* ::before {
    content: '';
    background-image: url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E %3Cpath stroke='%23AAA' stroke-width='2' d='M11 17c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM15 15l4.95 4.95'/%3E %3C/svg%3E');
  } */
  outline: none;
  padding: 12px;
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

export const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// 사이드 바 토글 CSS

export const CategoryInner = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: ${(open) => (open ? 0 : -450)};
  width: 450px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
  padding: 20px;

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

export const CategoryListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10;
  overflow-y: scroll;
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
    bottom: 0;
    left: 0;
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

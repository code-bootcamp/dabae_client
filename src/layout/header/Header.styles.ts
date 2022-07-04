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
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyButton = styled.button`
  cursor: pointer;
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

export const EmptyBar = styled.span`
  width: 1px;
  height: 38px;
  background-color: rgb(238, 238, 238);
  margin: 0 20px;
  display: inline-block;
`;

export const Link = styled.a``;

export const Logo = styled.img`
  width: 68px;
  height: 24px;
`;

export const SearchBox = styled.div`
  width: 400px;
  padding: 0 15px;
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

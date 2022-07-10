import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  cursor: pointer;
  margin-right: 10px;
  transform: rotate(180deg);
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const TableInner = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
`;

// 결제내역 타이틀
export const ItemTitleInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #32c2b9;
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
  text-align: center;
`;

export const DateItemTitleBox = styled.div`
  width: 20%;
`;

export const LectureItemTitleBox = styled.div`
  width: 40%;
`;

export const PaymentItemTitleBox = styled.div`
  width: 20%;
`;

export const PointItemTitleBox = styled.div`
  width: 20%;
`;

// 걀제내역 리스트

export const ItemInner = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e9e9e9;
  padding: 20px;
  transition: all 0.3s ease-in-out;

  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background-color: #32c2b9;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: initial;
    padding: 20px 0;
  }
`;

export const DateItemBox = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    padding-right: 10px;
    width: 50%;
    margin-bottom: 20px;
  }
`;

export const DateItem = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  font-weight: 500;
  text-align: left;
`;

export const LectureItemBox = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    padding-left: 10px;
    width: 50%;
    margin-bottom: 20px;
  }
`;

export const LectureItem = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  font-weight: 500;
  text-align: left;
`;

export const PaymentItemBox = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    padding-right: 10px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PaymentItem = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  font-weight: 500;
  text-align: right;
`;

export const PointItemBox = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    padding-left: 10px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PointItem = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
  font-weight: 500;
  text-align: right;
`;

// 모바일 결제내역 이름
export const MobileItem = styled.p`
  display: none;
  margin: 0;
  ${theme.fontSizes.small};
  font-weight: 500;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
  }
`;

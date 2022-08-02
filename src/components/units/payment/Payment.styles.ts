import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
`;

export const TitleBox = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  /* font-weight: bold; */
`;

export const SubTitleBox = styled.div`
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #32c2b9;
`;

export const SubTitle = styled.div`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const ContentInner = styled.div`
  margin-bottom: 30px;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px 0;
  /* box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%); */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

export const CalendarBox = styled.div`
  width: 50%;
  padding: 0 10px 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
  /* 캘린더 헤더 스타일 */
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 26px;

    .react-calendar__navigation__label {
      /* font-weight: bold; */
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* 요일 텍스트 가운데로 */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* 날짜 버튼 css */
  button {
    /* margin: 3px; */
    background-color: #fff;
    /* border: 1px solid #32c2b9; */
    border-radius: 3px;
    color: #333;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
      background-color: #32c2b9;
      color: #fff;
    }

    &:active {
      background-color: #32c2b9;
      color: #fff;
    }
  }

  /* 지난달 날짜 & 다음달 날짜 opacity */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.5;
  }

  /* 요일 클릭했을때 */
  .react-calendar__tile--range {
    background-color: #32c2b9;
    color: #fff;
    /* box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%); */
  }
`;

export const CalendarDot = styled.div`
  height: 8px;
  width: 8px;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;

export const RightBox = styled.div`
  width: 50%;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectDateBox = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e9e9e9;
`;

export const SelectDate = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  /* font-weight: 700; */
`;

export const SelectTimeBox = styled.div`
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowImg = styled.img`
  transition: all 0.3s ease-in-out;
  transform: ${(props: { toggle: boolean }) =>
    props.toggle ? "rotate(270deg)" : "rotate(90deg)"};
`;

export const ToggleInner = styled.div`
  padding: 10px;
`;

export const ToggleBox = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  :hover {
    border-color: #32c2b9;
  }
  border-color: ${(props: { active: boolean }) =>
    props.active ? "#32c2b9" : "#e5e5e5"};
`;

export const ToggleTimeBox = styled.div`
  margin-bottom: 10px;
`;

export const ToggleTime = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const TogglePaymentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TogglePayment = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
  color: #32c2b9;
`;

export const TogglePerson = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: 500;
  color: #e9e9e9;
`;

export const PersonInner = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PersonNumber = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  /* font-weight: bold; */
`;

export const CountInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlusBtton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  color: #32c2b9;
  ${theme.fontSizes.base};
  font-weight: 500;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #32c2b9;
    color: #fff;
  }

  &:active {
    background-color: #32c2b9;
    color: #fff;
  }
`;

export const MinusBtton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  color: #32c2b9;
  ${theme.fontSizes.base};
  font-weight: 500;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #32c2b9;
    color: #fff;
  }

  &:active {
    background-color: #32c2b9;
    color: #fff;
  }
`;

export const CounterBox = styled.div`
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 10px;
  margin: 0 5px;
`;

export const Counter = styled.p`
  margin: 0;
  color: #32c2b9;
  ${theme.fontSizes.base};
  font-weight: 500;
`;

export const SumInner = styled.div`
  margin-bottom: 15px;
  padding: 10px;
`;

export const SumBox = styled.div`
  border: 1px solid #32c2b9;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SumText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  /* font-weight: bold; */
`;

export const SumPayment = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  /* font-weight: bold; */
  color: #32c2b9;
`;

export const TotalBox = styled.div`
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Total = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
`;

export const PaymentBox = styled.div`
  padding: 10px;
`;

export const PaymentButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  outline: none;
  border: 1px solid #32c2b9;
  border-radius: 10px;
  background-color: #fff;
  color: #32c2b9;
  ${theme.fontSizes.base};
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #32c2b9;
    color: #fff;
  }

  &:active {
    background-color: #32c2b9;
    color: #fff;
  }
`;

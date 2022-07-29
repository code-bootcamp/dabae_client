export interface IPaymentContainer {
  data: any;
  setPage: any;
  courseTime: any;
  setCourseTime: any;
  currentPrice: number;
  setCurrentPrice: any;
}

export interface IPaymentPresenter {
  data: any;
  personCount: number;
  decreaseCount: () => void;
  increaseCount: () => void;
  onClickPaymentMove: () => void;
  onChangeCalendar: (value: Date) => void;
  date: Date;
  setDate: any;
  calendarMark: string[];
  courseTime: any;
  courseTimes: any;
  currentPrice: number;
  onClickPaymentDetail: (el: any) => () => void;
}

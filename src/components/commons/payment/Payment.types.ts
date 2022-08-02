export interface IPaymentProps {
  setPage: any;
  userData: any;
  fetchCourse: any;
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
}

export interface IPaymentUIProps {
  requestPay: () => void;
}

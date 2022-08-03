export interface IPaymentProps {
  setPage: any;
  userData: any;
  fetchCourse: any;
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
  setPaymentId: any;
}

export interface IPaymentUIProps {
  requestPay: () => void;
}

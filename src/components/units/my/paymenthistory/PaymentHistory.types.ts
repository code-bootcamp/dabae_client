export interface IPaymentHistoryresenter {
  payment: any;
  BackMyMove: () => void;
  onClickCancel: (paymentId: string) => () => Promise<void>;
}

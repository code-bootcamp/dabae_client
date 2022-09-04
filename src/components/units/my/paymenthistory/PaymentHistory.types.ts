export interface IPaymentHistoryresenter {
  payment: {
    fetchPaymentsByUser: [
      {
        id: string;
        createdAt: Date;
        price: number;
        impUid: string;
        course: {
          id: string;
          name: string;
          maxPrice: number;
          minPrice: number;
        };
      }
    ];
  };
  BackMyMove: () => void;
  onClickCancel: (paymentId: string) => () => Promise<void>;
}

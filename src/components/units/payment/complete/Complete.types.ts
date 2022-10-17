export interface ICompleteContainer {
  paymentId: string;
}

export interface ICompletePresenter {
  data: {
    fetchPayment: {
      id: string;
      amount: number;
      quantity: number;
      course: {
        id: string;
        name: string;
        imageURLs: [
          {
            imageURLs: string;
          }
        ];
      };
      courseTime: {
        id: string;
        maxUsers: number;
        courseStartTime: Date;
      };
    };
  };
}

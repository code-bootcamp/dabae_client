import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IInfoContainer {
  data: {
    fetchCourse: {
      id: string;
      name: string;
      maxPrice: number;
      minPrice: number;
      imageURLs: [
        {
          id: string;
          imageURLs: string;
        }
      ];
      courseDate: [
        {
          id: string;
          date: Date;
          courseTime: {
            id: string;
            maxUsers: number;
            currentUsers: number;
            courseStartTime: Date;
            courseEndTime: Date;
          };
        }
      ];
    };
  };
  userData: {
    fetchLoginUser: {
      id: string;
      email: string;
      nickname: string;
      point: number;
    };
  };
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
  setPage: Dispatch<SetStateAction<number>>;
  setPaymentId: Dispatch<SetStateAction<string>>;
}

export interface IInfoPresenter {
  data: {
    fetchCourse: {
      id: string;
      name: string;
      maxPrice: number;
      minPrice: number;
      imageURLs: [
        {
          id: string;
          imageURLs: string;
        }
      ];
      courseDate: [
        {
          id: string;
          date: Date;
          courseTime: {
            id: string;
            maxUsers: number;
            currentUsers: number;
            courseStartTime: Date;
            courseEndTime: Date;
          };
        }
      ];
    };
  };
  userData: {
    fetchLoginUser: {
      id: string;
      email: string;
      nickname: string;
      point: number;
    };
  };
  isModalVisible: {
    service: boolean;
    agree: boolean;
  };
  courseTime: any;
  currentPrice: number;
  currentUsers: number;
  point: number;
  onChangePoint: (event: ChangeEvent<HTMLInputElement>) => void;
  setPage: Dispatch<SetStateAction<number>>;
  setPaymentId: Dispatch<SetStateAction<string>>;
  onClickUseAllPoints: () => void;
  onAgreeModal: () => void;
  onServiceModal: () => void;
}

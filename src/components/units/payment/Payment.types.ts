import { Dispatch, SetStateAction } from "react";

export interface IPaymentContainer {
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
  courseTime: any;
  currentPrice: number;
  setPage: Dispatch<SetStateAction<number>>;
  setCourseTime: Dispatch<SetStateAction<any>>;
  setCurrentPrice: Dispatch<SetStateAction<number>>;
  setCurrentUsers: Dispatch<SetStateAction<number>>;
}

export interface IPaymentPresenter {
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
  personCount: number;
  date: Date;
  calendarMark: string[];
  courseTime: any;
  courseTimes: string[];
  currentPrice: number;
  setDate: Dispatch<SetStateAction<Date>>;
  decreaseCount: () => void;
  increaseCount: () => void;
  onClickPaymentMove: () => void;
  onChangeCalendar: (value: Date) => void;
  onClickPaymentDetail: (el: any) => () => void;
}

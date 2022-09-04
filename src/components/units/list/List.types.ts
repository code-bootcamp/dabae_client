import { ChangeEvent } from "react";

// presenter
export interface IListPresenter {
  searchList: {
    fetchCoursesSortByOption: [
      {
        id: string;
        name: string;
        maxPrice: number;
        minPrice: number;
        address: string;
        openingDate: Date;
        closingDate: Date;
        pick: number;
        category: {
          name: string;
        };
        imageURLs: {
          imageURLs: string;
          isThumbnail: boolean;
        };
        review: {
          rate: number;
        };
      }
    ];
  };
  pickList: {
    fetchPicksByUser: [
      {
        id: string;
      }
    ];
  };
  onLoadMore: () => void;
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

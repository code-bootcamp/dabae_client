export interface ISaveListPresenter {
  saveList: {
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
  BackMyMove: () => void;
  onLoadMore: () => void;
}

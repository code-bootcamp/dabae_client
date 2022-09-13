// presenter interface

export interface IMainPresenter {
  hotCourses: {
    hotCourses: [
      {
        id: string;
        name: string;
        maxPrice: number;
        minPrice: number;
        address: string;
        pick: number;
        review: {
          rate: number;
        };
        category: {
          name: string;
        };
        imageURLs: {
          isThumbnail: boolean;
          imageURLs: string;
        };
      }
    ];
  };
  newCourses: {
    newCourses: [
      {
        id: string;
        name: string;
        maxPrice: number;
        minPrice: number;
        address: string;
        pick: number;
        review: {
          rate: number;
        };
        category: {
          name: string;
        };
        imageURLs: {
          isThumbnail: boolean;
          imageURLs: string;
        };
      }
    ];
  };
  cheapCourses: {
    cheapCourses: [
      {
        id: string;
        name: string;
        maxPrice: number;
        minPrice: number;
        address: string;
        pick: number;
        review: {
          rate: number;
        };
        category: {
          name: string;
        };
        imageURLs: {
          isThumbnail: boolean;
          imageURLs: string;
        };
      }
    ];
  };
  pickList: {
    fetchPicksByUser: {
      id: string;
    };
  };
}

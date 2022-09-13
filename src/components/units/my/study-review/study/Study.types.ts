export interface IStudyPresneter {
  studyList: {
    fetchCoursesByUser: {
      id: string;
      name: string;
      maxPrice: number;
      minPrice: number;
      pick: number;
      openingDate: Date;
      closingDate: Date;
      host: {
        nickname: string;
      };
      imageURLs: [
        {
          imageURLs: string;
        }
      ];
      review: {
        rate: number;
      };
    };
  };
  reviewMove: () => void;
  BackMyMove: () => void;
}

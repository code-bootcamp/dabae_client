export interface IReviewPresenter {
  reviews: {
    fetchCourseReviews: [
      {
        id: string;
        rate: number;
        contents: string;
        user: {
          nickname: string;
        };
        course: {
          id: string;
          name: string;
          address: string;
          imageURLs: [
            {
              imageURLs: string;
            }
          ];
        };
      }
    ];
  };
  BackMyMove: () => void;
  onClickDeleteReview: () => void;
}

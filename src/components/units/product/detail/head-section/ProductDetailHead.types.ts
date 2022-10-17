export interface IProductDetailHeadProps {
  data: {
    id: string;
    name: string;
    maxPrice: number;
    minPrice: number;
    difficulty: string;
    contents: string;
    address: string;
    addressDetail: string;
    zipCode: string;
    pick: number;
    host: {
      id: string;
      nickname: string;
      profileImageURL: string;
    };
    imageURLs: [
      {
        id: string;
        imageURLs: string;
      }
    ];
    materials: [
      {
        id: string;
        materials: string;
      }
    ];
    category: {
      id: string;
      name: string;
    };
  };
}

export interface IProductDetailHeadUIProps {
  data: {
    id: string;
    name: string;
    maxPrice: number;
    minPrice: number;
    difficulty: string;
    contents: string;
    address: string;
    addressDetail: string;
    zipCode: string;
    pick: number;
    host: {
      id: string;
      nickname: string;
      profileImageURL: string;
    };
    imageURLs: [
      {
        id: string;
        imageURLs: string;
      }
    ];
    materials: [
      {
        id: string;
        materials: string;
      }
    ];
    category: {
      id: string;
      name: string;
    };
  };
  sliderSettings: any;
  currentSlide: number;
  onClickMoveToPayOptions: () => void;
}

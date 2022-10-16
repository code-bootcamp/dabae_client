export interface IProductDetailContentsProps {
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

export interface IProductDetailContentsUIProps {
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
  hotCourses: {
    hotCourses: [
      {
        id: string;
        name: string;
        maxPrice: number;
        minPrice: number;
        address: string;
        pick: number;
        category: {
          name: string;
        };
        imageURLs: {
          imageURLs: string;
          isThumbnail: boolean;
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
}

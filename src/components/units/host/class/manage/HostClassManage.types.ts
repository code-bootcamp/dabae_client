export type fetchCoursesByHostDataType = {
  id: string;
  name: string;
  maxPrice: number;
  minPrice: number;
  difficulty: string;
  contents: string;
  openingDate: Date | string;
  closingDate: Date | string;
  address: string;
  addressDetail: string;
  zipCode: string;
  imageURLs: [];
  pick: number;
  materials: [];
};

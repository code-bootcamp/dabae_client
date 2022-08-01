import { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IHostClassListProps {
  fetchHostUserData: any;
  onClickMenu: (menu: string, submenu: string) => () => void;
}

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

export interface IHostClassListUIProps {
  getValues?: any;
  onChangeSearchDate: (date: any, dateString: [string, string]) => void;
  onClickSearchDate: (array: [string, number]) => () => void;
  onChangeClassStatus: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMenu: (menu: string, submenu: string) => () => void;
  onClickSubmitSearch: () => void;
  register: UseFormRegister<{
    searchData: string;
    searchDate: [string, string];
  }>;
  fetchCoursesByHostData: any;
}

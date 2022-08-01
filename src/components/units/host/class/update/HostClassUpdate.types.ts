import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export type useFormType = {
  materials?: string[];
  imageURLs: [];
  openingDate: string | Date;
  closingDate: string | Date;
  firstCategory: string;
  secondCategory: string;
  difficulty: string;
  tagsInput: string | undefined;
  maxPrice: string | number;
  minPrice: string | number;
  lat: number;
  lng: number;
  contents: string;
  name: string;
  courseDate: [];
  address: string;
  addressDetail: string;
  zipCode: string;
};
export interface IHostClassUpdateProps {
  onClickMenu: (menu: string, submenu: string) => () => void;
}
export interface IHostClassUpdateUIProps {
  step: number;
  onClickChangeStep: (move: number) => () => void;
  onChangeFirstCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeSecondCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  firstCategory: string;
  secondCategory: string;
  // TODO: typescript 해결하기
  onChangeClassRecruitDate: (date: any, dateString: any) => void;
  methods: UseFormReturn<useFormType, object>;
  onClickSubmit: () => void;
  onClickResetField: () => void;
  onChangeDifficulty: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (minmax: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  onClickErrorSubmit: () => void;
  element: any;
}

import { useQuery } from "@apollo/client";
import ProductDetailContentsUI from "./ProductDetailContents.presenter";
import {
  FETCH_PICKS_BY_USER,
  HOT_COURSES,
} from "./ProductDetailContents.queries";
import { IProductDetailContentsProps } from "./ProductDetailContents.types";

export default function ProductDetailContents(
  props: IProductDetailContentsProps
) {
  const { data: hotCourses } = useQuery(HOT_COURSES);
  const { data: pickList } = useQuery(FETCH_PICKS_BY_USER);
  return (
    <ProductDetailContentsUI
      data={props.data}
      pickList={pickList}
      hotCourses={hotCourses}
    />
  );
}

import { useQuery } from "@apollo/client";
import ProductDetailContentsUI from "./ProductDetailContents.presenter";
import { HOT_COURSES } from "./ProductDetailContents.queries";
import { IProductDetailContentsProps } from "./ProductDetailContents.types";

export default function ProductDetailContents(
  props: IProductDetailContentsProps
) {
  const { data: hotCourses } = useQuery(HOT_COURSES);
  return <ProductDetailContentsUI data={props.data} hotCourses={hotCourses} />;
}

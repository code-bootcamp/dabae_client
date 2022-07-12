import ProductDetailContentsUI from "./ProductDetailContents.presenter";
import { IProductDetailContentsProps } from "./ProductDetailContents.types";

export default function ProductDetailContents(
  props: IProductDetailContentsProps
) {
  return <ProductDetailContentsUI data={props.data} />;
}

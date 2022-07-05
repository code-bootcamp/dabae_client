import ProductDetailContents from "@/src/components/units/product/detail/detail-contents/ProductDetailContents.container";
import ProductDetailReview from "@/src/components/units/product/detail/review-list/ProductDetailReview.container";
import ProductDetailHead from "../../../src/components/units/product/detail/head-section/ProductDetailHead.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetailHead />
      <ProductDetailReview />
      <ProductDetailContents />
    </>
  );
}

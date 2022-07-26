/*
 * Author : Seongpyo Hong
 * FileName: ProductDetailHead.presenter.tsx
 * Date: 2022-07-02 21:16:08
 * Description :
 */

import * as S from "./ProductDetailHead.styles";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CF } from "@/styles/commonComponentStyle";
import { IProductDetailHeadUIProps } from "./ProductDetailHead.types";

export default function ProductDetailHeadUI(props: IProductDetailHeadUIProps) {
  console.log(props.data);
  return (
    <S.HeadSection>
      <S.Carousel>
        <Slider {...props.sliderSettings}>
          {props.data?.imageURLs.map((el: any) => (
            <S.ProductImage
              key={uuidv4()}
              src={`https://storage.googleapis.com/${el.imageURLs}`}
            />
          ))}
        </Slider>
        <S.SlideCountBox>
          <S.SlideCount>{`${props.currentSlide + 1} / ${
            props.data?.imageURLs.length
          }`}</S.SlideCount>
        </S.SlideCountBox>
      </S.Carousel>
      <S.InfoSection>
        <CF.ColumnDiv>
          <S.Title>{props.data?.name}</S.Title>
          <S.PriceWrapper>
            <S.Price>
              {props.data?.maxPrice}
              <S.PriceUnit>원</S.PriceUnit>
            </S.Price>
            <S.DiscountRate>
              ⇧{" "}
              {Math.floor(
                ((props.data?.maxPrice - props.data?.minPrice) /
                  props.data?.maxPrice) *
                  100
              )}{" "}
              %
            </S.DiscountRate>
          </S.PriceWrapper>
          <S.HostProfile>
            <S.HostProfileImage
              src={
                props.data?.host.profileImageURL
                  ? `https://storage.googleapis.com/${props.data?.host.profileImageURL}`
                  : "/images/product_detail/host_profile_1.webp"
              }
            />
            <S.ProfileContent>
              <S.HostName>
                {props.data?.host.nickname} {">"}
              </S.HostName>
              {/* <S.ProfileStat>
                프립 2 <S.StatUnit>|</S.StatUnit> 후기 477{" "}
                <S.StatUnit>|</S.StatUnit> 저장 541
              </S.ProfileStat> */}
            </S.ProfileContent>
          </S.HostProfile>
        </CF.ColumnDiv>
        <CF.ColumnDiv>
          <S.LabelWrapper>
            <S.Label>난이도</S.Label>
            <CF.RowDiv>
              <S.LabelUnit>{props.data?.difficulty}</S.LabelUnit>
            </CF.RowDiv>
            <S.Label>준비물</S.Label>
            <CF.RowDiv>
              {props.data?.materials?.map((el: any) => (
                <S.LabelUnit key={uuidv4()}>{el.materials}</S.LabelUnit>
              ))}
            </CF.RowDiv>
          </S.LabelWrapper>
          <S.JoinButton onClick={props.onClickMoveToPayOptions}>
            참여하기
          </S.JoinButton>
        </CF.ColumnDiv>
      </S.InfoSection>
      <S.MobileWrapper>
        <S.MobileJoinButton onClick={props.onClickMoveToPayOptions}>
          참여하기
        </S.MobileJoinButton>
      </S.MobileWrapper>
    </S.HeadSection>
  );
}

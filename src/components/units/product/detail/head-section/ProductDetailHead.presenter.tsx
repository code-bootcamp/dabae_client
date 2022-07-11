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
  return (
    <S.HeadSection>
      <S.Carousel>
        <Slider {...props.sliderSettings}>
          {new Array(5).fill(1).map((_) => (
            <S.ProductImage
              key={uuidv4()}
              src="/images/product_detail/product_1.webp"
            />
          ))}
        </Slider>
        <S.SlideCountBox>
          <S.SlideCount>{`${props.currentSlide + 1} / ${5}`}</S.SlideCount>
        </S.SlideCountBox>
      </S.Carousel>
      <S.InfoSection>
        <CF.ColumnDiv>
          <S.Title>
            [리뉴얼특가] 한남동 플라워 클래스 4가지 선택 (예약 가능)
          </S.Title>
          <S.PriceWrapper>
            <S.Price>
              39,000<S.PriceUnit>원</S.PriceUnit>{" "}
            </S.Price>
            <S.DiscountRate> ⇧ 34%</S.DiscountRate>
            {/* <S.FakedPrice>59,000원</S.FakedPrice> */}
          </S.PriceWrapper>
          <S.HostProfile>
            <S.HostProfileImage src="/images/product_detail/host_profile_1.webp" />
            <S.ProfileContent>
              <S.HostName>트렌드바이미플라워 {">"}</S.HostName>
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
              <S.LabelUnit>보통</S.LabelUnit>
            </CF.RowDiv>
            <S.Label>준비물</S.Label>
            <CF.RowDiv>
              <S.LabelUnit>종이</S.LabelUnit>
              <S.LabelUnit>가위</S.LabelUnit>
              <S.LabelUnit>색연필</S.LabelUnit>
            </CF.RowDiv>
          </S.LabelWrapper>
          <S.JoinButton>참여하기</S.JoinButton>
        </CF.ColumnDiv>
      </S.InfoSection>
      <S.MobileWrapper>
        <S.MobileJoinButton>참여하기</S.MobileJoinButton>
      </S.MobileWrapper>
    </S.HeadSection>
  );
}

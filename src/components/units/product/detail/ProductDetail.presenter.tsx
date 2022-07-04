/*
 * Author : Seongpyo Hong
 * FileName: ProductDetail.presenter.tsx
 * Date: 2022-07-02 21:16:08
 * Description :
 */

import * as S from "./ProductDetail.styles";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetailUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <S.Wrapper>
      <S.HeadSection>
        <S.Carousel>
          <Slider {...settings}>
            {new Array(5).fill(1).map((_) => (
              <S.ProductImage
                key={uuidv4()}
                src="/images/product_detail/product_1.webp"
              />
            ))}
          </Slider>
        </S.Carousel>
        <S.InfoSection>
          <S.BasicInfo>
            <S.Title>
              [리뉴얼특가] 한남동 플라워 클래스 4가지 선택 (예약 가능)
            </S.Title>
            <S.PriceWrapper>
              <S.DiscountRate>34%</S.DiscountRate>
              <S.Price>
                39,000<S.PriceUnit>원</S.PriceUnit>{" "}
              </S.Price>
              <S.FakedPrice>59,000원</S.FakedPrice>
            </S.PriceWrapper>
          </S.BasicInfo>
          <S.HostProfile>
            <S.HostProfileImage src="/images/product_detail/host_profile_1.webp" />
            <S.ProfileContent>
              <S.HostName>트렌드바이미플라워</S.HostName>
              <S.ProfileStat>
                프립 2 <S.StatUnit>|</S.StatUnit> 후기 477{" "}
                <S.StatUnit>|</S.StatUnit> 저장 541
              </S.ProfileStat>
            </S.ProfileContent>
          </S.HostProfile>
        </S.InfoSection>
      </S.HeadSection>
    </S.Wrapper>
  );
}

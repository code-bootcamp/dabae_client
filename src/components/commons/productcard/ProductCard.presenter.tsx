import { CF } from "@/styles/commonComponentStyle";
import * as S from "./ProductCard.styles";
import { IProductCardPresenter } from "./ProductCard.types";

export default function ProductCardPresenter(props: IProductCardPresenter) {
  return (
    <>
      <S.CardInner>
        <S.LikeBox id={props.el.id} onClick={props.onTogglePick}>
          {props.isActive ? (
            <S.ActiveLikeImg src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23F66' d='M2.757 0C2.05.002 1.373.236.88.65.308 1.136-.008 1.785 0 2.46c0 4.011.084 12.73.079 15.11-.004.145.078.283.218.371.069.04.151.061.235.06 6.892-4.721 7.195-4.721 7.56-4.721.363 0 .644 0 7.435 4.579.08 0 .16-.023.224-.064.149-.093.23-.241.218-.394.034-1.53.034-10.99.028-14.973.05-1.29-1.179-2.372-2.757-2.427H2.757z'/%3E %3C/svg%3E" />
          ) : (
            <S.LikeImg src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' viewBox='0 0 16 18'%3E %3Cpath fill='%23FFF' d='M13.24 0c1.517.052 2.713 1.055 2.757 2.279l-.013 13.646-.016 1.55c-.016.126-.093.241-.217.319-.043.027-.092.046-.144.056l-.08.008-2.03-1.361c-4.57-3.048-5.042-3.209-5.355-3.218l-.157.004c-.373.038-1.207.439-7.453 4.717-.084.001-.166-.02-.235-.06-.14-.088-.222-.226-.218-.37l-.013-3.23C.046 10.935.006 6.05.001 3.063L0 2.459C-.008 1.785.308 1.136.88.65 1.324.278 1.916.05 2.546.008L2.756 0H13.24zM2.763 2c-.25 0-.473.078-.588.175-.106.089-.155.165-.17.232L2 2.457l.017 4.385.05 7.691 1.045-.702c3.104-2.07 4.005-2.508 4.867-2.55l.06-.001h.158c.788.022 1.551.36 4.29 2.147l1.503.992.01-8.15L14 2.349l-.01-.015c-.011-.015-.034-.041-.081-.083-.133-.117-.338-.206-.544-.239L13.24 2H2.763z'/%3E %3C/svg%3E" />
          )}
        </S.LikeBox>
        <S.CardItem id={props.el.id} onClick={props.onClickMoveToDetail}>
          <S.ImgBox>
            <S.AddressBox>
              <S.AddressText>
                {props.el.address.split(" ", 2).join(" ")}
              </S.AddressText>
            </S.AddressBox>
            {/* {props.el.imageURLs[0]?.isThumbnail ? (
              <S.Img
                src={`https://storage.googleapis.com/${props.el.imageURLs[0]?.imageURLs}`}
                alt="썸네일 이미지"
              />
            ) : (
              <S.Img src="/images/logo.svg" alt="썸네일 이미지" />
            )} */}
            <S.Img
              src="/images/product_detail/product_1.webp"
              alt="썸네일 이미지"
            />
          </S.ImgBox>
          <S.ContentBox>
            <CF.ColumnDiv>
              <S.SubTextBox>
                <S.CategoryText>{props.el.category?.name}</S.CategoryText>
              </S.SubTextBox>
              <S.TextBox>
                <S.TextTitle>{props.el.name}</S.TextTitle>
              </S.TextBox>
              <CF.RowDiv style={{ margin: "5px 0" }}>
                {/* <S.Rates disabled value={el.rate} /> */}
                {/* <S.RateText>{`후기 ${el.review}`}</S.RateText> */}
              </CF.RowDiv>
              <S.PriceBox>
                {props.el.minPrice === 0 ? (
                  <>
                    <S.CurrentPriceBox></S.CurrentPriceBox>
                    <S.DiscountInner>
                      <S.DiscountRateBox>
                        <S.Price>
                          {props.el.maxPrice.toLocaleString()}
                          <S.PriceB>원</S.PriceB>
                        </S.Price>
                      </S.DiscountRateBox>
                    </S.DiscountInner>
                  </>
                ) : (
                  <>
                    <S.CurrentPriceBox>
                      <S.CurrentPrice>{`${props.el.maxPrice.toLocaleString()}원`}</S.CurrentPrice>
                      <S.DiscountBox>
                        <S.Discount>
                          {Math.floor(
                            ((props.el.maxPrice - props.el.minPrice) /
                              props.el.maxPrice) *
                              100
                          )}
                          %
                        </S.Discount>
                      </S.DiscountBox>
                    </S.CurrentPriceBox>
                    <S.DiscountInner>
                      <S.DiscountRateBox>
                        <S.Price>
                          {props.el.minPrice.toLocaleString()}
                          <S.PriceB>원</S.PriceB>
                        </S.Price>
                      </S.DiscountRateBox>
                    </S.DiscountInner>
                  </>
                )}
              </S.PriceBox>
            </CF.ColumnDiv>
          </S.ContentBox>
        </S.CardItem>
      </S.CardInner>
    </>
  );
}

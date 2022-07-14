import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";
import { listData } from "../../commons/mockup/data";
// import { Modal } from "antd";
// import "antd/dist/antd.css";
import ListProductCardContainer from "../../commons/listproductcard/ListProductCard.container";

// declare const window: typeof globalThis & {
//   kakao: any;
// };

export default function ListContainer() {
  // 페이지 네이션 미 구현

  // 카카오 지도
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?appkey=f0047173bac4ebb0664e5488f45f4165&autoload=false&libraries=services,clusterer,drawing";

  //   document.head.appendChild(script);

  //   script.onload = () => {
  //     window.kakao.maps.load(function () {
  //       // 마커를 담을 배열입니다
  //       let markers = [];

  //       const mapContainer = document.getElementById("map"); // 지도를 표시할 div
  //       const mapOption = {
  //         center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
  //         level: 3, // 지도의 확대 레벨
  //       };

  //       // 지도를 생성합니다
  //       const map = new window.kakao.maps.Map(mapContainer, mapOption);

  //       // 장소 검색 객체를 생성합니다
  //       const ps = new window.kakao.maps.services.Places();

  //       // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  //       const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

  //       // 키워드로 장소를 검색합니다
  //       searchPlaces();

  //       // 키워드 검색을 요청하는 함수입니다
  //       function searchPlaces() {
  //         const keyword = document.getElementById("keyword")?.value;

  //         if (!keyword.replace(/^\s+|\s+$/g, "")) {
  //           alert("키워드를 입력해주세요!");
  //           return false;
  //         }

  //         // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
  //         ps.keywordSearch(keyword, placesSearchCB);
  //       }

  //       // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  //       function placesSearchCB(data, status, pagination) {
  //         if (status === window.kakao.maps.services.Status.OK) {
  //           // 정상적으로 검색이 완료됐으면
  //           // 검색 목록과 마커를 표출합니다
  //           displayPlaces(data);

  //           // 페이지 번호를 표출합니다
  //           displayPagination(pagination);
  //         } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
  //           alert("검색 결과가 존재하지 않습니다.");
  //         } else if (status === window.kakao.maps.services.Status.ERROR) {
  //           alert("검색 결과 중 오류가 발생했습니다.");
  //         }
  //       }

  //       // 검색 결과 목록과 마커를 표출하는 함수입니다
  //       function displayPlaces(places) {
  //         const listEl = document.getElementById("placesList");
  //         const menuEl = document.getElementById("menu_wrap");
  //         const fragment = document.createDocumentFragment();
  //         const bounds = new window.kakao.maps.LatLngBounds();
  //         const listStr = "";

  //         // 검색 결과 목록에 추가된 항목들을 제거합니다
  //         removeAllChildNods(listEl);

  //         // 지도에 표시되고 있는 마커를 제거합니다
  //         removeMarker();

  //         for (let i = 0; i < places.length; i++) {
  //           // 마커를 생성하고 지도에 표시합니다
  //           const placePosition = new window.kakao.maps.LatLng(
  //             places[i].y,
  //             places[i].x
  //           );
  //           const marker = addMarker(placePosition, i);
  //           var itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

  //           // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //           // LatLngBounds 객체에 좌표를 추가합니다
  //           bounds.extend(placePosition);

  //           // 마커와 검색결과 항목에 mouseover 했을때
  //           // 해당 장소에 인포윈도우에 장소명을 표시합니다
  //           // mouseout 했을 때는 인포윈도우를 닫습니다
  //           (function (marker, title) {
  //             window.kakao.maps.event.addListener(
  //               marker,
  //               "mouseover",
  //               function () {
  //                 displayInfowindow(marker, title);
  //               }
  //             );

  //             window.kakao.maps.event.addListener(
  //               marker,
  //               "mouseout",
  //               function () {
  //                 infowindow.close();
  //               }
  //             );

  //             itemEl.onmouseover = function () {
  //               displayInfowindow(marker, title);
  //             };

  //             itemEl.onmouseout = function () {
  //               infowindow.close();
  //             };
  //           })(marker, places[i].place_name);

  //           fragment.appendChild(itemEl);
  //         }

  //         // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
  //         listEl?.appendChild(fragment);
  //         menuEl.scrollTop = 0;

  //         // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //         map.setBounds(bounds);
  //       }

  //       // 검색결과 항목을 Element로 반환하는 함수입니다
  //       function getListItem(index: number, places: any) {
  //         const el = document.createElement("li");

  //         let itemStr =
  //           '<MarkerBg class="marker_' +
  //           (index + 1) +
  //           '"></MarkerBg>' +
  //           "<Info>" +
  //           "   <InfoText>" +
  //           places.place_name +
  //           "</InfoText>";

  //         if (places.road_address_name) {
  //           itemStr +=
  //             "    <InfoSpan>" +
  //             places.road_address_name +
  //             "</InfoSpan>" +
  //             "   <JibunSapn>" +
  //             places.address_name +
  //             "</JibunSapn>";
  //         } else {
  //           itemStr += "    <InfoSpan>" + places.address_name + "</InfoSpan>";
  //         }

  //         itemStr += "  <TelSapn>" + places.phone + "</TelSapn>" + "</Info>";

  //         el.innerHTML = itemStr;
  //         el.className = "item";

  //         return el;
  //       }

  //       // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  //       function addMarker(position: number, idx: number, title: string) {
  //         const imageSrc =
  //           "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png"; // 마커 이미지 url, 스프라이트 이미지를 씁니다
  //         const imageSize = new window.kakao.maps.Size(36, 37); // 마커 이미지의 크기
  //         const imgOptions = {
  //           spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
  //           spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
  //           offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
  //         };
  //         const markerImage = new window.kakao.maps.MarkerImage(
  //           imageSrc,
  //           imageSize,
  //           imgOptions
  //         );
  //         const marker = new window.kakao.maps.Marker({
  //           position, // 마커의 위치
  //           image: markerImage,
  //         });

  //         marker.setMap(map); // 지도 위에 마커를 표출합니다
  //         markers.push(marker); // 배열에 생성된 마커를 추가합니다

  //         return marker;
  //       }

  //       // 지도 위에 표시되고 있는 마커를 모두 제거합니다
  //       function removeMarker() {
  //         for (let i = 0; i < markers.length; i++) {
  //           markers[i].setMap(null);
  //         }
  //         markers = [];
  //       }

  //       // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  //       function displayPagination(pagination) {
  //         const paginationEl = document.getElementById("pagination");
  //         const fragment = document.createDocumentFragment();
  //         let i;

  //         // 기존에 추가된 페이지번호를 삭제합니다
  //         while (paginationEl.hasChildNodes()) {
  //           paginationEl.removeChild(paginationEl.lastChild);
  //         }

  //         for (i = 1; i <= pagination.last; i++) {
  //           const el = document.createElement("a");
  //           el.href = "#";
  //           el.innerHTML = i;

  //           if (i === pagination.current) {
  //             el.className = "on";
  //           } else {
  //             el.onclick = (function (i) {
  //               return function () {
  //                 pagination.gotoPage(i);
  //               };
  //             })(i);
  //           }

  //           fragment.appendChild(el);
  //         }
  //         paginationEl.appendChild(fragment);
  //       }

  //       // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  //       // 인포윈도우에 장소명을 표시합니다
  //       function displayInfowindow(marker, title) {
  //         const content =
  //           '<div style="padding:5px;z-index:1;">' + title + "</div>";

  //         infowindow.setContent(content);
  //         infowindow.open(map, marker);
  //       }

  //       // 검색결과 목록의 자식 Element를 제거하는 함수입니다
  //       function removeAllChildNods(el) {
  //         while (el.hasChildNodes()) {
  //           el.removeChild(el.lastChild);
  //         }
  //       }
  //     });
  //   };
  // }, []);

  return (
    <Wrapper>
      <ListTitleBox>
        {/* 제목 미정... 해야함 */}
        <ListTitle>리스트입니다.</ListTitle>
        <ListCount>{listData.length}</ListCount>
      </ListTitleBox>
      <MapInner>
        <MapBox>
          <MapText>주변 클래스</MapText>
          <Img src="/images/myArrow.svg" alt="지도보기 화살표" />
        </MapBox>
      </MapInner>
      {/* <MapWrapper>
        <Map id="map"></Map>
        <MenuWrapper id="menu_wrap" className="bg_white">
          <Option className="option">
            <Form onSubmit="searchPlaces(); return false;">
              <MapLabel>키워드 :</MapLabel>
              <MapInput
                type="text"
                value="이태원 맛집"
                id="keyword"
                placeholder="검색 시이이이바아아앙ㄹ"
              />
              <Button type="submit">검색</Button>
            </Form>
          </Option>
          <PlacesList id="placesList"></PlacesList>
          <Pagination id="pagination"></Pagination>
        </MenuWrapper>
      </MapWrapper> */}
      <ListWrapper>
        <ListProductCardContainer />
      </ListWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const ListTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ListTitle = styled.h2`
  font-weight: bold;
  ${theme.fontSizes.subTitle};
`;

export const ListCount = styled.p`
  margin: 0;
  margin-left: 10px;
  font-weight: 300;
  ${theme.fontSizes.subTitle};
`;

export const MapInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const MapBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MapText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: bold;
`;

export const Img = styled.img``;

// export const MapWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 500px;
// `;

// export const Map = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   overflow: hidden;
// `;

// export const MenuWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   width: 250px;
//   margin: 10px 0 30px 10px;
//   padding: 5px;
//   overflow-y: auto;
//   background: rgba(255, 255, 255, 0.7);
//   z-index: 1;
//   ${theme.fontSizes.small};
//   border-radius: 10px;
// `;

// export const Option = styled.div`
//   text-align: center;
// `;

// export const Form = styled.form`
//   border-bottom: 1px solid #999999;
//   padding-bottom: 10px;
//   margin-bottom: 10px;
// `;

// export const MapInput = styled.input`
//   padding: 5px;
//   border-radius: 10px;
//   outline: none;
//   border: 1px solid #e9e9e9;
//   ${theme.fontSizes.small};
//   ::placeholder {
//     ${theme.fontSizes.small};
//     transition: all 0.3s ease-in-out;
//   }
//   :focus::placeholder {
//     color: transparent;
//   }
// `;

// export const MapLabel = styled.label`
//   ${theme.fontSizes.small};
//   font-weight: 500;
// `;

// export const Button = styled.button`
//   margin-left: 10px;
//   border: 1px solid #e9e9e9;
//   padding: 5px;
//   ${theme.fontSizes.small};
// `;

// export const PlacesList = styled.ul``;

// export const Pagination = styled.div``;

// // 맵 리스트

// export const MapListInner = styled.div`
//   display: flex;
// `;

// export const MarkerBg = styled.span`
//   float: left;
//   position: absolute;
//   width: 36px;
//   height: 37px;
//   margin: 10px 0 0 10px;
//   background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png")
//     no-repeat;

//   &.marker_ {
//   }
// `;

// export const Info = styled.div`
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
//   padding: 10px 0 10px 55px;
// `;

// export const InfoText = styled.h5`
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// `;

// export const InfoSpan = styled.span`
//   display: block;
//   margin-top: 4px;
// `;

// export const JibunSapn = styled.span`
//   padding-left: 26px;
//   background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png")
//     no-repeat;
// `;

// export const TelSapn = styled.span`
//   color: #009900;
// `;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin-right: 10px; */
`;

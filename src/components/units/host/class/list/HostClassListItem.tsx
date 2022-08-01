import Button from "@/src/components/commons/button/Button";
import CustomModal from "@/src/components/commons/modal/CustomModal";
import Space from "@/src/components/commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { dateFormat4y2m2d } from "../../../../../function/date/format/dateFormat";
/**
 * Author : Sukyung Lee
 * FileName: HostClassListItem.tsx
 * Date: 2022-07-30 23:36:10
 * Description :
 */

interface IHostClassListItemProps {
  element: any;
  index: number;
}

const HostClassListItem = (props: IHostClassListItemProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <>
      <ManageBodyDiv>
        <RowCenterBodyDiv1>
          <div> {props.index + 1} </div>
        </RowCenterBodyDiv1>
        <RowCenterBodyDiv2>{props.element.name}</RowCenterBodyDiv2>
        <RowCenterBodyDiv3>
          <div> {dateFormat4y2m2d(props.element.openingDate)} </div>
          <div> ~ </div>
          <div> {dateFormat4y2m2d(props.element.closingDate)} </div>
        </RowCenterBodyDiv3>
        <RowCenterBodyDiv4>
          <Status> 활성 </Status>
          <Button
            type="button"
            status="blue"
            onClick={handleToggleModal}
            width={"80px"}
            height={"30px"}
          >
            <span> 상세보기 </span>
          </Button>
        </RowCenterBodyDiv4>
        {isModalOpen && (
          <CustomModal title="수업 상세정보" toggleModal={handleToggleModal}>
            <Container>
              <CF.ColumnDiv gap={10}>
                <Space title1="수업 제목" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>{props.element.name}</BorderDiv>
                </Space>
                <Space title1="강의 진행 기간" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>
                    {dateFormat4y2m2d(props.element.openingDate)} {" ~ "}
                    {dateFormat4y2m2d(props.element.closingDate)}
                  </BorderDiv>
                </Space>
                <Space title1="가격" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>
                    <CF.ColumnDiv>
                      <Space title4="최대 가격 :" titleWidth="100px">
                        {props.element.maxPrice} 원
                      </Space>
                      <Space title4="최소 가격 :" titleWidth="100px">
                        {props.element.minPrice} 원
                      </Space>
                    </CF.ColumnDiv>
                  </BorderDiv>
                </Space>
                <Space title1="난이도" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>{props.element.difficulty}</BorderDiv>
                </Space>
                <Space title1="준비물" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>
                    <CF.RowDiv gap={10}>
                      {props.element.materials.map((el: any, index: number) => (
                        <Material key="index">{el.materials}</Material>
                      ))}
                    </CF.RowDiv>
                  </BorderDiv>
                </Space>
                <Space title1="주소" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>
                    <CF.ColumnDiv width="100%">
                      <Space title4="우편번호 :" titleWidth="100px">
                        {props.element.zipCode}
                      </Space>
                      <Space title4="주소 :" titleWidth="100px">
                        {props.element.address}
                      </Space>
                      <Space title4="상세주소 :" titleWidth="100px">
                        {props.element.addressDetail}
                      </Space>
                      <Space title4="위도 :" titleWidth="100px">
                        {props.element.lat}
                      </Space>
                      <Space title4="경도 :" titleWidth="100px">
                        {props.element.lng}
                      </Space>
                    </CF.ColumnDiv>
                  </BorderDiv>
                </Space>
                <Space title1="수업 일정" titlePadding="0px 0px 8px 0px">
                  <BorderDiv>
                    {props.element.courseDate.map((el: any, index: number) => (
                      <div key={index}>{dateFormat4y2m2d(el.date)}</div>
                    ))}
                  </BorderDiv>
                </Space>
              </CF.ColumnDiv>
            </Container>
            <ModalFooter>
              <Button
                width="120px"
                height="40px"
                onClick={() => router.push("/products/" + props.element.id)}
              >
                게시글로 이동
              </Button>
              <Button width="80px" height="40px">
                삭제
              </Button>
              <Button
                width="80px"
                height="40px"
                onClick={() =>
                  router.push(`/host/class/update?id=${props.element.id}`)
                }
              >
                편집
              </Button>
              <Button width="80px" height="40px" onClick={handleToggleModal}>
                취소
              </Button>
            </ModalFooter>
          </CustomModal>
        )}
      </ManageBodyDiv>
    </>
  );
};
export default HostClassListItem;
const Container = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  overflow-y: scroll;
  position: relative;
  padding: 10px 0px;

  &::-webkit-scrollbar {
    /* display: none; */
    width: 5px;
    margin: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black; /*스크롤바의 색상*/
  }

  &::-webkit-scrollbar-track {
    background-color: yellow; /*스크롤바 트랙 색상*/
  }
`;
const BorderDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  border: solid #32c2b9 1px;
  border-radius: 10px;
`;
const Material = styled.div`
  padding: 4px 10px;
  background-color: #32c2b9;
  color: white;
  border-radius: 10px;
  font-weight: normal;
  font-size: 16px;
`;
const ManageBodyDiv = styled.div`
  display: grid;
  font-size: 16px;
  font-weight: 600;
  height: 80px;
  grid-template-columns: 60px calc(100% - 380px) 200px 120px;
  background-color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: 60px calc(100% - 200px) 80px 60px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 60px calc(100% - 240px) 120px 60px;
    font-size: 12px;
    height: 60px;
  }
`;
const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0px 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  background-color: #f0f0f0;
`;
const RowCenterBodyDiv1 = styled.div`
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;

const RowCenterBodyDiv2 = styled.div`
  min-width: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  @media (max-width: 768px) {
    flex-flow: nowrap column-reverse;
    font-size: 12px;
  }
`;
const RowCenterBodyDiv3 = styled.div`
  min-width: 200px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 10px;

  @media (max-width: 1200px) {
    min-width: 100px;
    flex-flow: nowrap column;
    font-size: 12px;
  }
`;
const RowCenterBodyDiv4 = styled.div`
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
`;
export const Status = styled.div``;

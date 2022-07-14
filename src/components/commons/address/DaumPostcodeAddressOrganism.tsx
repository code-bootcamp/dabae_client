import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { CF } from "@/styles/commonComponentStyle";
import theme from "@/styles/theme";
import Input from "../input/Input";
import Button from "../button/Button";
import DaumPostcode from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IDaumPostcodeAddressOrganismProps {
  defaultValue?: any;
  setValue?: any;
  register?: any;
  getValues?: any;
}

const DaumPostcodeAddressOrganism = ({
  ...props
}: IDaumPostcodeAddressOrganismProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = async (data: any) => {
    props.setValue("zipCode", data.zonecode);
    props.setValue("address", data.address);
    handleCancel();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=d002c42240006bc9377005338abf2a09&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao?.maps.load(function () {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          props.getValues("address"),
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              props.setValue("lat", result[0].y);
              props.setValue("lng", result[0].x);
            }
          }
        );
      });
    };
  }, [props.getValues("address")]);

  return (
    <BorderDiv>
      {isModalVisible && (
        <Modal
          title="우편 번호 검색"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} style={{ height: 500 }} />
        </Modal>
      )}
      <CF.ColumnDiv gap={10}>
        <CF.RowDiv gap={10}>
          <Input
            placeholder="우편번호"
            width={"80px"}
            height={"40px"}
            register={props.register("zipCode")}
            disabled
          />
          <Button
            onClick={showModal}
            width={"120px"}
            height={"40px"}
            borderRadius={"0px"}
          >
            우편번호검색
          </Button>
        </CF.RowDiv>
        <Input
          type="text"
          register={props.register("address")}
          placeholder="주소"
          // defaultValue={defaultValue?.addressDetail}
          disabled
        />
        <Input
          type="text"
          register={props.register("addressDetail")}
          placeholder="상세주소를 입력해주세요."
          // defaultValue={defaultValue?.addressDetail}
        />
      </CF.ColumnDiv>
    </BorderDiv>
  );
};

export default DaumPostcodeAddressOrganism;

const BorderDiv = styled.div`
  width: 100%;
  border: solid ${theme.backgroundColors.border} 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;

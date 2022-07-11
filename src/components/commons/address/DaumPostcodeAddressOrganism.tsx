import React, { useState } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { CF } from "@/styles/commonComponentStyle";
import theme from "@/styles/theme";
import Input from "../input/Input";
import Button from "../button/Button";
import DaumPostcode from "react-daum-postcode";
interface IDaumPostcodeAddressOrganismProps {
  defaultValue?: any;
  setValue?: any;
  register?: any;
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

  const handleComplete = (data: any) => {
    props.setValue("course.zipcode", data.zonecode);
    props.setValue("course.address", data.address);
    handleCancel();
  };

  return (
    <BorderDiv>
      {isModalVisible && (
        <Modal
          title="Basic Modal"
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
            register={props.register("course.zipcode")}
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
          register={props.register("course.address")}
          placeholder="주소"
          // defaultValue={defaultValue?.addressDetail}
        />
        <Input
          type="text"
          register={props.register("course.addressDetail")}
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

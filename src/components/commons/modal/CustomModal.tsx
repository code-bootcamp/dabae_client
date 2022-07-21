import styled from "@emotion/styled";
import { ReactNode } from "react";

/**
 * Author : Sukyung Lee
 * FileName: CustomModal.tsx
 * Date: 2022-07-22 00:16:59
 * Description : 커스텀 모달
 */

interface ICustomModalProps {
  toggleModal: () => void;
  title?: string;
  children: ReactNode;
}

const CustomModal = (props: ICustomModalProps) => {
  return (
    <>
      <Overlay onClick={props.toggleModal}></Overlay>
      <Container>
        <HeaderContainer>
          <Title> {props.title} </Title>
          <Exit onClick={props.toggleModal}>X</Exit>
        </HeaderContainer>
        <BodyContainer>{props.children}</BodyContainer>
      </Container>
    </>
  );
};
export default CustomModal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(174, 174, 174, 0.8);
  cursor: pointer;
  border: 0px;
  z-index: 90;
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  width: 60%;
  max-width: 600px;
  max-height: calc(100% - 100px);
  transform: translate(-50%, -50%);
  border: 0px;
  display: flex;
  flex-flow: nowrap column;
  z-index: 100;
`;
const Title = styled.div`
  padding-left: 10px;
  font-size: 20px;
`;
const Exit = styled.button`
  width: 30px;
  height: 30px;
  background: #aeaeae;
  cursor: pointer;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
`;

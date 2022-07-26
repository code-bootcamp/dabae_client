import Button from "@/src/components/commons/button/Button";
import Input from "@/src/components/commons/input/Input";
import CustomModal from "@/src/components/commons/modal/CustomModal";
import Space from "@/src/components/commons/space/Space";
import UploadProfileOrganism from "@/src/components/commons/upload/UploadProfileOrganism";
import { CF } from "@/styles/commonComponentStyle";
import { FormProvider } from "react-hook-form";
import * as S from "./HostPersonalInformation.styles";
import { IHostPersonalInformationUIProps } from "./HostPersonalInformation.types";

/**
 * Author : Sukyung Lee
 * FileName: HostPersonalInformation.presenter.tsx
 * Date: 2022-07-16 18:19:19
 * Description : 호스트 개인 정보 수정
 */

const HostPersonalInformationUI = (props: IHostPersonalInformationUIProps) => {
  return (
    <S.Container>
      <FormProvider {...props.methods}>
        <CF.ColumnDiv gap={10}>
          <S.BorderDiv>
            <Space title1="프로필 사진" titlePadding="0px 0px 10px 0px">
              <UploadProfileOrganism
                defaultValue={props.fetchHostUserData?.profileImageURL}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="휴대폰 인증" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="01012345678"
                register={props.methods.register("phone")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.phone}
                disabled={true}
                backgroundColor={"#eaeaea"}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="호스트명" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="호스트명"
                register={props.methods.register("nickname")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.nickname}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="이메일" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="이메일"
                register={props.methods.register("email")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.email}
                disabled={true}
                backgroundColor={"#eaeaea"}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title4="비밀번호" titlePadding="0px" titleWidth="100px">
              <Button
                width="160px"
                height="40px"
                onClick={props.changePasswordToggle}
              >
                비밀번호 변경하러가기
              </Button>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="상호명" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="상호명"
                register={props.methods.register("hostBusinessName")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.businessName}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="사업자 번호" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="사업자 번호"
                register={props.methods.register("hostBusinessNumber")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.businessNumber}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="계좌 번호" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="계좌 번호를 입력해주세요"
                register={props.methods.register("account")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.account}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <CF.RowDiv gap={10}>
              <Button onClick={props.UpdateHostInformation}>변경하기</Button>
              <Button onClick={props.changeDeleteToggle}> 탈퇴하기 </Button>
            </CF.RowDiv>
          </S.BorderDiv>
        </CF.ColumnDiv>
        {props.isOpenDeleteModal && (
          <CustomModal toggleModal={props.changeDeleteToggle}>
            <CF.ColumnCenterDiv height="100px" padding="10px 0px">
              <Space title1="회원탈퇴 삭제하기">
                <Input
                  placeholder="비밀번호를 입력해주세요"
                  margin="10px 0px"
                  register={props.methods.register("deleteCheckPassword")}
                  type="password"
                />
                <Button onClick={props.deleteHost}> 회원 탈퇴 하기 </Button>
              </Space>
            </CF.ColumnCenterDiv>
          </CustomModal>
        )}
        {props.isOpenNewPasswordModal && (
          <CustomModal toggleModal={props.changePasswordToggle}>
            <CF.ColumnCenterDiv height="100px" padding="10px 0px">
              <Space title1="패스워드 변경하기" padding="10px 0px">
                <Input
                  placeholder="현재 비밀번호를 입력해주세요"
                  margin="10px 0px"
                  register={props.methods.register("currentCheckPassword")}
                  type="password"
                />
                <Input
                  placeholder="새로운 비밀번호를 입력해주세요"
                  margin="10px 0px"
                  register={props.methods.register("newCheckPassword")}
                  type="password"
                />
                <Input
                  placeholder="새로운 비밀번호를 다시 입력해주세요"
                  margin="10px 0px"
                  register={props.methods.register("newDoubleCheckPassword")}
                  type="password"
                />
                <Button onClick={props.updateNewPassword}>
                  비밀번호 변경하기
                </Button>
              </Space>
            </CF.ColumnCenterDiv>
          </CustomModal>
        )}
      </FormProvider>
    </S.Container>
  );
};
export default HostPersonalInformationUI;

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
                // register={props.methods.register("phone")}
                height={"40px"}
                defaultValue={props.fetchHostUserData?.phone}
                disabled={true}
                backgroundColor={"#eaeaea"}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="이메일" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="이메일"
                // register={props.methods.register("email")}
                height={"40px"}
                defaultValue={props.fetchHostUserData?.email}
                disabled={true}
                backgroundColor={"#eaeaea"}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="닉네임" titlePadding="0px 0px 10px 0px">
              <div>
                <CF.RowDiv gap={10}>
                  <Input
                    placeholder="닉네임"
                    onChange={props.handleChangeNickName}
                    height={"40px"}
                    defaultValue={props.fetchHostUserData?.nickname}
                  />
                  <Button
                    width="160px"
                    height="40px"
                    onClick={props.handleNicknameDuplicateCheck}
                    disabled={
                      !props.methods.getValues("nickname") ||
                      !!props.methods.formState.errors.nickname?.message ||
                      props.methods.getValues("nickname") ===
                        props.fetchHostUserData?.nickname
                    }
                  >
                    닉네임 중복확인
                  </Button>
                </CF.RowDiv>
                <S.ErrorDiv>
                  {props.methods.formState.errors.nickname?.message}
                </S.ErrorDiv>
              </div>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <CF.RowDiv gap={20}>
              <div> 비밀번호 : </div>
              <Button
                width="160px"
                height="30px"
                onClick={props.changePasswordToggle}
              >
                비밀번호 변경하러가기
              </Button>
            </CF.RowDiv>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="성별" titlePadding="0px 0px 10px 0px">
              <CF.RowBetweenDiv>
                <Input
                  type="radio"
                  name="gender"
                  value="true"
                  id="man"
                  display="none"
                  onChange={props.handleChangeGender}
                  defaultChecked={props.methods.getValues("gender") === "true"}
                  height="40px"
                />
                <Input
                  type="radio"
                  name="gender"
                  value="false"
                  id="woman"
                  display="none"
                  onChange={props.handleChangeGender}
                  defaultChecked={props.methods.getValues("gender") === "false"}
                  height="40px"
                />
                <S.GenderBox>
                  <S.GenderLabel
                    htmlFor="man"
                    active={
                      (props.methods.getValues("gender") &&
                        props.methods.getValues("gender") === "true") ||
                      (!props.methods.getValues("gender") &&
                        props.fetchHostUserData?.gender)
                    }
                  >
                    남자
                  </S.GenderLabel>
                </S.GenderBox>
                <S.GenderBox>
                  <S.GenderLabel
                    htmlFor="woman"
                    active={
                      (props.methods.getValues("gender") &&
                        props.methods.getValues("gender") === "false") ||
                      (!props.methods.getValues("gender") &&
                        !props.fetchHostUserData?.gender)
                    }
                  >
                    여자
                  </S.GenderLabel>
                </S.GenderBox>
              </CF.RowBetweenDiv>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="상호명" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="상호명"
                register={props.methods.register("businessName")}
                height={"40px"}
                defaultValue={props.fetchHostUserData?.businessName}
              />
              <S.ErrorDiv>
                {props.methods.formState.errors.businessName?.message}
              </S.ErrorDiv>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="사업자 번호" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="사업자 번호"
                register={props.methods.register("businessNumber")}
                height={"40px"}
                defaultValue={props.fetchHostUserData?.businessNumber}
              />
              <S.ErrorDiv>
                {props.methods.formState.errors.businessNumber?.message}
              </S.ErrorDiv>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="은행명" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="은행명을 입력해주세요"
                register={props.methods.register("bank")}
                height={"40px"}
                defaultValue={props.fetchHostUserData?.bank}
              />
              <S.ErrorDiv>
                {props.methods.formState.errors.bank?.message}
              </S.ErrorDiv>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space title1="계좌 번호" titlePadding="0px 0px 10px 0px">
              <Input
                placeholder="계좌 번호를 입력해주세요"
                register={props.methods.register("account")}
                height={"40px"}
                defaultValue={props.fetchHostUserData?.account}
              />
              <S.ErrorDiv>
                {props.methods.formState.errors.account?.message}
              </S.ErrorDiv>
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <CF.RowDiv gap={10}>
              <Button
                height={"40px"}
                onClick={props.methods.handleSubmit(
                  props.updateHostInformation
                )}
              >
                변경하기
              </Button>

              <Button onClick={props.changeDeleteToggle} height={"40px"}>
                탈퇴하기
              </Button>
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
                <S.BorderDiv>
                  <CF.ColumnDiv gap={10}>
                    <Space title1="현재 비밀번호" padding="10px 0px">
                      <Input
                        placeholder="현재 비밀번호를 입력해주세요"
                        margin="10px 0px"
                        register={props.methods.register(
                          "currentCheckPassword"
                        )}
                        type="password"
                      />
                      <S.ErrorDiv>
                        {
                          props.methods.formState.errors.currentCheckPassword
                            ?.message
                        }
                      </S.ErrorDiv>
                    </Space>
                    <Space title1="새로운 비밀번호" padding="10px 0px">
                      <Input
                        placeholder="새로운 비밀번호를 입력해주세요"
                        margin="10px 0px"
                        register={props.methods.register("newCheckPassword")}
                        type="password"
                      />
                      <S.ErrorDiv>
                        {
                          props.methods.formState.errors.newCheckPassword
                            ?.message
                        }
                      </S.ErrorDiv>
                    </Space>
                    <Space title1="새로운 비밀번호 확인" padding="10px 0px">
                      <Input
                        placeholder="새로운 비밀번호를 다시 입력해주세요"
                        margin="10px 0px"
                        register={props.methods.register(
                          "newDoubleCheckPassword"
                        )}
                        type="password"
                      />
                      <S.ErrorDiv>
                        {
                          props.methods.formState.errors.newDoubleCheckPassword
                            ?.message
                        }
                      </S.ErrorDiv>
                    </Space>
                    <Button onClick={props.updateNewPassword} height={"30px"}>
                      비밀번호 변경하기
                    </Button>
                  </CF.ColumnDiv>
                </S.BorderDiv>
              </Space>
            </CF.ColumnCenterDiv>
          </CustomModal>
        )}
      </FormProvider>
    </S.Container>
  );
};
export default HostPersonalInformationUI;

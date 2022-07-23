import Input from "@/src/components/commons/input/Input";
import Space from "@/src/components/commons/space/Space";
import UploadProfileOrganism from "@/src/components/commons/upload/UploadProfileOrganism";
import { CF } from "@/styles/commonComponentStyle";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import * as S from "./HostPersonalInformation.styles";
import { fetchHostUserDataType } from "./HostPersonalInformation.types";

/**
 * Author : Sukyung Lee
 * FileName: HostPersonalInformation.presenter.tsx
 * Date: 2022-07-16 18:19:19
 * Description : 호스트 개인 정보 수정
 */

interface IHostPersonalInformationUIProps {
  getValues?: (payload?: string | string[]) => Object;
  methods: UseFormReturn<FieldValues, object>;
  fetchHostUserData: fetchHostUserDataType;
}

const HostPersonalInformationUI = (props: IHostPersonalInformationUIProps) => {
  return (
    <S.Container>
      <FormProvider {...props.methods}>
        <CF.ColumnDiv gap={10}>
          <S.BorderDiv>
            <Space
              title1="프로필 사진"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <UploadProfileOrganism
                defaultValue={props.fetchHostUserData?.profileImageURL}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="휴대폰 인증"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="01012345678"
                register={props.methods.register("phone")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.phone}
                disabled={true}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="호스트명"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="호스트명"
                register={props.methods.register("nickname")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.nickname}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="이메일"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="이메일"
                register={props.methods.register("email")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.email}
                disabled={true}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="비밀번호 변경"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="비밀번호"
                register={props.methods.register("password")}
                height={"30px"}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="상호명"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="상호명"
                register={props.methods.register("hostBusinessName")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.businessName}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="사업자 번호"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="사업자 번호"
                register={props.methods.register("hostBusinessNumber")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.businessNumber}
              />
            </Space>
          </S.BorderDiv>
          <S.BorderDiv>
            <Space
              title1="계좌 번호"
              titlePadding="0px 0px 10px 0px"
              titleFontSize="20px"
            >
              <Input
                placeholder="계좌 번호를 입력해주세요"
                register={props.methods.register("account")}
                height={"30px"}
                defaultValue={props.fetchHostUserData?.account}
              />
            </Space>
          </S.BorderDiv>
        </CF.ColumnDiv>
      </FormProvider>
    </S.Container>
  );
};
export default HostPersonalInformationUI;

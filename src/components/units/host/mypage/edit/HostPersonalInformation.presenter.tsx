import Input from "@/src/components/commons/input/Input";
import Space from "@/src/components/commons/space/Space";
import UploadTemplate from "@/src/components/commons/upload/UploadOrganism";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import * as S from "./HostPersonalInformation.styles";

/**
 * Author : Sukyung Lee
 * FileName: HostPersonalInformation.presenter.tsx
 * Date: 2022-07-16 18:19:19
 * Description : 호스트 개인 정보 수정
 */

interface IHostPersonalInformationUIProps {
  getValues?: (payload?: string | string[]) => Object;
  methods: UseFormReturn<FieldValues, object>;
}

const HostPersonalInformationUI = (props: IHostPersonalInformationUIProps) => {
  return (
    <S.Container>
      <FormProvider {...props.methods}>
        <Space title1="프로필 사진" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <UploadTemplate />
          </S.BorderDiv>
        </Space>
        <Space title1="휴대폰 인증" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="01012345678"
              register={props.methods.register("phone")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
        <Space title1="호스트명" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="호스트명"
              register={props.methods.register("name")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
        <Space title1="이메일" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="이메일"
              register={props.methods.register("email")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
        <Space title1="비밀번호 변경" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="비밀번호"
              register={props.methods.register("password")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
        <Space title1="상호명" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="상호명"
              register={props.methods.register("hostBusinessName")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
        <Space title1="사업자 번호" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="사업자 번호"
              register={props.methods.register("hostBusinessNumber")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
        <Space title1="계좌 번호" titlePadding="0px 0px 10px 0px">
          <S.BorderDiv>
            <Input
              placeholder="계좌 번호를 입력해주세요"
              register={props.methods.register("account")}
              height={"20px"}
            />
          </S.BorderDiv>
        </Space>
      </FormProvider>
    </S.Container>
  );
};
export default HostPersonalInformationUI;

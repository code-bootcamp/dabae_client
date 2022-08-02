import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import HostPersonalInformationUI from "./HostPersonalInformation.presenter";
import { HostPersonalInformationSchema } from "./HostPersonalInformation.schema";
import {
  fetchHostUserDataType,
  updateUserInputType,
} from "./HostPersonalInformation.types";
import { useMutation } from "@apollo/client";
import {
  CHECK_NICKNAME,
  DELETE_LOGIN_USER,
  UPDATE_PASSWORD,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./HostPersonalInformation.queries";
import { useRouter } from "next/router";

/**
 * Author : Sukyung Lee
 * FileName: HostPersonalInformation.container.tsx
 * Date: 2022-07-16 18:18:44
 * Description : 호스트 개인 정보 조회 및 수정
 */

interface IHostPersonalInformationProps {
  fetchHostUserData: fetchHostUserDataType;
  refetchHostUser: any;
}

const HostPersonalInformation = (props: IHostPersonalInformationProps) => {
  const methods = useForm({
    resolver: yupResolver(HostPersonalInformationSchema),
    mode: "onChange",
  });
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenNewPasswordModal, setIsOpenNewPasswordModal] = useState(false);
  const [uploadFileGQL] = useMutation(UPLOAD_FILE);
  const [deleteLoginUserGQL] = useMutation(DELETE_LOGIN_USER);
  const [updatePasswordGQL] = useMutation(UPDATE_PASSWORD);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [updateUserGQL] = useMutation(UPDATE_USER);
  const [, setRenderToggle] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false); // 닉네임 중복 검사
  const router = useRouter();
  console.log("HostPersonalInformation.container.tsx", props.fetchHostUserData);

  // 유저 삭제 모달창 닫는 함수
  const changeDeleteToggle = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  // 유저 패스워드 모달창 초기화하고 닫는 함수
  const changePasswordToggle = () => {
    methods.resetField("currentCheckPassword");
    methods.resetField("newCheckPassword");
    methods.resetField("newDoubleCheckPassword");
    setIsOpenNewPasswordModal((prev) => !prev);
  };

  // 유저 성별 변경 함수
  const handleChangeGender = (e: ChangeEvent<HTMLInputElement>) => {
    methods.setValue("gender", e.target.value);
    methods.trigger("gender");
    setRenderToggle((prev) => !prev);
  };

  // 유저 닉네임 변경 함수
  const handleChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    methods.setValue("nickname", e.target.value);
    methods.trigger("nickname");
    setIsNicknameValid(false);
  };

  // 유저 삭제 API
  const deleteHost = async () => {
    try {
      const result = await deleteLoginUserGQL({
        variables: {
          inputPassword: methods.getValues("deleteCheckPassword"),
        },
      });
      if (result.data.deleteLoginUser) {
        setIsOpenDeleteModal(false);
        alert("회원 탈퇴가 되었습니다. 홈 화면으로 이동됩니다.");
        router.push("/");
      }
    } catch {
      alert("회원 탈퇴를 실패했습니다.");
    }
  };

  // 유저 닉네임 중복 체크 API(테스트 완료)
  const handleNicknameDuplicateCheck = async () => {
    try {
      const result = await checkNickname({
        variables: {
          nickname: methods.getValues("nickname"),
        },
      });
      // TODO: 닉네임 검사 API 작성 필요
      if (result?.data.checkNickname) {
        alert("사용 가능한 닉네임 입니다.");
        setIsNicknameValid(true);
      } else {
        throw new Error("이미 존재하는 닉네임 입니다.");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  // TODO: validation정도만 추가적으로 수정
  // 유저 정보 변경 API(테스트 완료)
  const updateHostInformation = async () => {
    try {
      const updateUserInput: updateUserInputType = {};
      if (
        methods.getValues("nickname") &&
        methods.getValues("nickname") !== props.fetchHostUserData?.nickname
      ) {
        if (!isNicknameValid) {
          throw new Error("닉네임 중복검사를 해주세요.");
        }
        updateUserInput.nickname = methods.getValues("nickname");
      }
      if (
        methods.getValues("gender") &&
        methods.getValues("gender") !== props.fetchHostUserData?.gender
      )
        updateUserInput.gender = methods.getValues("gender") === "true";
      if (
        methods.getValues("businessName") &&
        methods.getValues("businessName") !==
          props.fetchHostUserData?.businessName
      )
        updateUserInput.businessName = methods.getValues("businessName");
      if (
        methods.getValues("businessNumber") &&
        methods.getValues("businessNumber") !==
          props.fetchHostUserData?.businessNumber
      )
        updateUserInput.businessNumber = methods.getValues("businessNumber");
      if (
        methods.getValues("bank") &&
        methods.getValues("bank") !== props.fetchHostUserData?.bank
      )
        updateUserInput.bank = methods.getValues("bank");
      if (
        methods.getValues("account") &&
        methods.getValues("account") !== props.fetchHostUserData?.account
      )
        updateUserInput.account = methods.getValues("account");
      // TODO: 이미지를 빈값으로 넣게 되면 겁나게 이미지 찾을것 같은데... 어찌해야할지
      if (
        methods.getValues("profileImageURL") &&
        typeof methods.getValues("profileImageURL") === "object"
      ) {
        const result = await uploadFileGQL({
          variables: { files: [methods.getValues("profileImageURL").file] },
        });
        updateUserInput.profileImageURL = result.data?.uploadFile[0];
      }
      await updateUserGQL({
        variables: { updateUserInput },
      });
      // TODO: refetch가 별로 필요하지 않을 것 같다..
      // props.refetchHostUser();
      alert("정보가 변경되었습니다.");
    } catch (err) {
      alert(err);
    }
  };

  // 유저 비밀번호 변경 API
  const updateNewPassword = async () => {
    try {
      const result = await updatePasswordGQL({
        variables: {
          inputPassword: methods.getValues("currentCheckPassword"),
          newPassword: methods.getValues("newCheckPassword"),
        },
      });
      if (result.data?.updatePassword) {
        methods.resetField("currentCheckPassword");
        methods.resetField("newCheckPassword");
        methods.resetField("newDoubleCheckPassword");
        changePasswordToggle();
        alert("비밀번호가 변경되었습니다. ");
      } else {
        alert("비밀번호가 변경되지 않았습니다.");
      }
    } catch {
      alert("비밀번호가 변경되지 않았습니다.");
    }
  };

  return (
    <>
      {props.fetchHostUserData && (
        <HostPersonalInformationUI
          methods={methods}
          fetchHostUserData={props.fetchHostUserData}
          isOpenDeleteModal={isOpenDeleteModal}
          isOpenNewPasswordModal={isOpenNewPasswordModal}
          changeDeleteToggle={changeDeleteToggle}
          changePasswordToggle={changePasswordToggle}
          deleteHost={deleteHost}
          updateNewPassword={updateNewPassword}
          updateHostInformation={updateHostInformation}
          handleChangeGender={handleChangeGender}
          handleNicknameDuplicateCheck={handleNicknameDuplicateCheck}
          handleChangeNickName={handleChangeNickName}
        />
      )}
    </>
  );
};
export default HostPersonalInformation;

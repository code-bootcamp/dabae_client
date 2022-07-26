import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, {
  useState,
  useRef,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import InfoEditPresenter from "./InfoEdit.presenter";
import {
  PASSWORD_EDIT,
  PROFILE_INFOR,
  UPDATE_USER,
  UPOLAD_PROFILE,
} from "./InfoEdit.queries";
import { IUserVariables } from "./InfoEdit.types";

export default function InfoEditContainer() {
  const router = useRouter();

  const { data } = useQuery(PROFILE_INFOR);

  const BackMyMove = () => {
    router.push("/my");
  };

  // 프로필 사진 변경
  const [uploadProfileImg] = useMutation(UPOLAD_PROFILE);
  const profileRef = useRef<HTMLInputElement>(null);
  const ProfileUpload = () => {
    profileRef.current?.click();
  };

  const [profileImageURL, setProfileImageURL] = useState("");

  const onChangeProfileImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    try {
      const res = await uploadProfileImg({
        variables: {
          files: file,
        },
      });
      // 이미지가 배열로 들어가서 [0]을 추가해줌
      setProfileImageURL(res.data.uploadFile[0]);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (data?.fetchLoginUser.profileImageURL?.length) {
      setProfileImageURL(data?.fetchLoginUser.profileImageURL);
    }
  }, [data]);

  // 내정보 변경
  const [nickname, setNickname] = useState<string>("");
  const [gender, setGender] = useState<boolean>(false);

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setGender(data?.fetchLoginUser.gender);
  }, [data?.fetchLoginUser.gender]);

  // 남 여 클릭 이벤트
  const clickChagneGender = useCallback(
    (gender) => {
      setGender(gender);
    },
    [setGender]
  );

  // 모달 버튼
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [, setNewPasswordConfirm] = useState<string>("");

  // 오류메세지 상태저장
  const [passwordNewMessage, setPasswordNewMessage] = useState<string>("");
  const [passwordConfirmNewMessage, setPasswordNewConfirmMessage] =
    useState<string>("");
  // 유효성 검사
  const [isNewPassword, setIsNewPassword] = useState<boolean>(false);
  const [isNewPasswordConfirm, setIsNewPasswordConfirm] =
    useState<boolean>(false);

  // 기존 비밀번호
  const currentPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // password 유효성 검사
  const onChageNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordCurrent = e.target.value;
    setNewPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordNewMessage(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~16자리로 입력해주세요."
      );
      setIsNewPassword(false);
    } else {
      setPasswordNewMessage("");
      setIsNewPassword(true);
    }
  };

  // password 확인
  const onChageNewPasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordConfirmCurrent = e.target.value;
    setNewPasswordConfirm(passwordConfirmCurrent);

    if (newPassword === passwordConfirmCurrent) {
      setPasswordNewConfirmMessage("");
      setIsNewPasswordConfirm(true);
    } else {
      setPasswordNewConfirmMessage("비밀번호를 다시 확인해주세요.");
      setIsNewPasswordConfirm(false);
    }
  };

  // 모달 열고 닫기
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  // 유저 정보 변경 mutation
  const [userEdit] = useMutation(UPDATE_USER);

  const changeNewUser = async () => {
    // 프로필 사진 변경
    const currentProfile = JSON.stringify(profileImageURL);
    const defaultProfile = JSON.stringify(data.fetchLoginUser.profileImageURL);
    const isChangedFiles = currentProfile !== defaultProfile;

    const userVariables: IUserVariables = {
      email: data?.fetchLoginUser.email,
      updateUserInput: {},
    };

    if (nickname) {
      userVariables.updateUserInput.nickname = nickname;
    }
    userVariables.updateUserInput.gender = gender;

    if (isChangedFiles) {
      userVariables.updateUserInput.profileImageURL = profileImageURL;
    }

    try {
      await userEdit({
        variables: userVariables,
        refetchQueries: [
          {
            query: PROFILE_INFOR,
          },
        ],
      });
      alert("유저 정보가 변경이 완료 되었습니다.");
      router.push("/my");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // 비밀번호 변경 mutation
  const [passwordEdit] = useMutation(PASSWORD_EDIT);

  const changeNewPassword = async () => {
    try {
      await passwordEdit({
        variables: {
          newPassword,
          inputPassword: password,
        },
      });
      alert("비밀번호가 변경이 완료 되었습니다.");
      setIsModalVisible((prev) => !prev);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <InfoEditPresenter
      data={data}
      isModalVisible={isModalVisible}
      profileRef={profileRef}
      passwordNewMessage={passwordNewMessage}
      passwordConfirmNewMessage={passwordConfirmNewMessage}
      isNewPassword={isNewPassword}
      isNewPasswordConfirm={isNewPasswordConfirm}
      gender={gender}
      profileImageURL={profileImageURL}
      currentPassword={currentPassword}
      onChageNewPassword={onChageNewPassword}
      onChageNewPasswordConfirm={onChageNewPasswordConfirm}
      changeNewPassword={changeNewPassword}
      BackMyMove={BackMyMove}
      onToggleModal={onToggleModal}
      ProfileUpload={ProfileUpload}
      changeNewUser={changeNewUser}
      changeNickname={changeNickname}
      clickChagneGender={clickChagneGender}
      onChangeProfileImg={onChangeProfileImg}
    />
  );
}

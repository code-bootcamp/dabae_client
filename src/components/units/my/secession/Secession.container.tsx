import { accessTokenState } from "@/src/commons/store";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import SecessionPresenter from "./Secession.presenter";
import { DELETE_USER, LOGOUT_USER } from "./Secession.queries";

export default function SecessionContainer() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);

  // 로그 아웃
  const [logoutUser] = useMutation(LOGOUT_USER);

  // 비밀번호 확인
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  // 회원탈퇴
  const [deleteUser] = useMutation(DELETE_USER);

  const onDelteUser = async () => {
    try {
      await deleteUser({
        variables: {
          inputPassword: password,
        },
      });
      alert("회원탈퇴 되셨습니다.");
      setAccessToken("");
      logoutUser();
      window.location.href = "/";
    } catch (error: any) {
      alert("비밀번호가 일치하지 않습니다.");
      console.log(error.message);
    }
  };

  const BackMyMove = () => {
    router.push("/my");
  };

  return (
    <SecessionPresenter
      password={password}
      isChecked={isChecked}
      handleChange={handleChange}
      handleClick={handleClick}
      BackMyMove={BackMyMove}
      onDelteUser={onDelteUser}
    />
  );
}

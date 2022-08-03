import { accessTokenState } from "@/src/commons/store";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import SecessionPresenter from "./Secession.presenter";
import { DELETE_USER } from "./Secession.queries";

export default function SecessionContainer() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);

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
      Modal.success({
        content: "회원탈퇴가 완료되었습니다.",
        onOk() {
          setAccessToken("");
          window.location.href = "/";
        },
      });
    } catch (error: any) {
      Modal.error({
        content: "비밀번호가 일치하지 않습니다.",
      });
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

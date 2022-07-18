import { useRouter } from "next/router";
import { useState } from "react";
import HostSignUpPageUI from "./HostSignUp.presenter";

export default function HostSignUpContainerPage() {
  const router = useRouter();
  const [showSocial, setShowSocial] = useState(false);

  const onClickShowSocial = () => {
    setShowSocial(true);
  };

  const onClickSignUp = () => {
    router.push("/host/signup/email");
  };

  const onClickLogin = () => {
    router.push("/host/login");
  };

  return (
    <HostSignUpPageUI
      showSocial={showSocial}
      onClickShowSocial={onClickShowSocial}
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
    />
  );
}

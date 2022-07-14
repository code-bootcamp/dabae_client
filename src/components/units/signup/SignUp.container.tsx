import { useRouter } from "next/router";
import { useState } from "react";
import SignUpContainerPageUI from "./SignUp.presenter";

export default function SignUpContainerPage() {
  const router = useRouter();
  const [showSocial, setShowSocial] = useState(false);

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickShowSocial = () => {
    setShowSocial(true);
  };

  const onClickSignUp = () => {
    router.push("/signup/email");
  };

  return (
    <SignUpContainerPageUI
      onClickLogin={onClickLogin}
      showSocial={showSocial}
      onClickShowSocial={onClickShowSocial}
      onClickSignUp={onClickSignUp}
    />
  );
}

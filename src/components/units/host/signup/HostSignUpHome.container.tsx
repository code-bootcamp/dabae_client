import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import HostSignUpHomePageUI from "./HostSignUpHome.presenter";
import { FETCH_LOGIN_USER } from "./HostSignUpHome.queries";

export default function HostSignUpHomeContainerPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_LOGIN_USER);
  const [showSocial, setShowSocial] = useState(false);

  const onClickShowSocial = () => {
    setShowSocial(true);
  };

  const onClickSignUp = () => {
    router.push("/host/signup/email");
  };

  const onClickUserToHost = () => {
    router.push("/host/signup/user-to-host");
  };

  const onClickLogin = () => {
    router.push("/host/login");
  };

  return (
    <HostSignUpHomePageUI
      data={data}
      showSocial={showSocial}
      onClickShowSocial={onClickShowSocial}
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
      onClickUserToHost={onClickUserToHost}
    />
  );
}

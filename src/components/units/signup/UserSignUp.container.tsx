import { useRouter } from "next/router";
import UserSignUpContainerPageUI from "./UserSignUp.presenter";

export default function UserSignUpContainerPage() {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signup/email");
  };

  return (
    <UserSignUpContainerPageUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
    />
  );
}

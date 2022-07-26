import { useRouter } from "next/router";
import UserSignUpHomeContainerPageUI from "./UserSignUpHome.presenter";

export default function UserSignUpHomeContainerPage() {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signup/email");
  };

  return (
    <UserSignUpHomeContainerPageUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
    />
  );
}

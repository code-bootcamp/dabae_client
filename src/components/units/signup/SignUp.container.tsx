import { useRouter } from "next/router";
import SignUpContainerPageUI from "./SignUp.presenter";

export default function SignUpContainerPage() {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signup/email");
  };

  return (
    <SignUpContainerPageUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
    />
  );
}

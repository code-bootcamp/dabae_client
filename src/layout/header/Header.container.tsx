import { useRouter } from "next/router";
import { useState } from "react";
import HeaderPresenter from "./Header.presenter";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [my, setMy] = useState(false);

  const router = useRouter();

  const LoginMove = () => {
    router.push("/login");
  };

  const SignupMove = () => {
    router.push("/signup");
  };

  return (
    <HeaderPresenter
      setOpen={setOpen}
      open={open}
      setMy={setMy}
      my={my}
      LoginMove={LoginMove}
      SignupMove={SignupMove}
    />
  );
};
export default Header;

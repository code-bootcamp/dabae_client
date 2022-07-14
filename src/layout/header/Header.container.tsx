import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
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

  // 검색 기능 추가
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <HeaderPresenter
      setOpen={setOpen}
      open={open}
      setMy={setMy}
      my={my}
      search={search}
      LoginMove={LoginMove}
      SignupMove={SignupMove}
      onChangeSearch={onChangeSearch}
    />
  );
};
export default Header;

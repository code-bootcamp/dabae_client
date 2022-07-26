import { accessTokenState } from "@/src/commons/store";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import HeaderPresenter from "./Header.presenter";
import { LOGGED_IN, LOGOUT_USER } from "./Header.queries";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [my, setMy] = useState(false);

  const { data } = useQuery(LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  // recoil
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const LoginMove = () => {
    router.push("/login");
  };

  const SignupMove = () => {
    router.push("/signup");
  };

  const hostSignMove = () => {
    router.push("/joinhost");
  };

  // 검색 기능 추가
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 로그아웃

  const logout = async () => {
    try {
      await logoutUser();
      setAccessToken("");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <HeaderPresenter
      setOpen={setOpen}
      open={open}
      setMy={setMy}
      my={my}
      search={search}
      data={data}
      LoginMove={LoginMove}
      SignupMove={SignupMove}
      hostSignMove={hostSignMove}
      onChangeSearch={onChangeSearch}
      logout={logout}
    />
  );
};
export default Header;

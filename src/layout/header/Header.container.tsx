import { accessTokenState } from "@/src/commons/store";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import HeaderPresenter from "./Header.presenter";
import { LOGGED_IN, LOGOUT_USER } from "./Header.queries";
import { IHeaderContanier } from "./Header.types";

const Header = (props: IHeaderContanier) => {
  const [open, setOpen] = useState<boolean>(false);
  const [my, setMy] = useState<boolean>(false);

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

  const saveMove = () => {
    router.push("/save-list");
  };

  // 로그아웃

  const logout = async () => {
    try {
      await logoutUser();
      setAccessToken("");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <HeaderPresenter
      setOpen={setOpen}
      open={open}
      setMy={setMy}
      my={my}
      data={data}
      search={props.search}
      onClickKeyPress={props.onClickKeyPress}
      LoginMove={LoginMove}
      SignupMove={SignupMove}
      hostSignMove={hostSignMove}
      onChangeSearch={props.onChangeSearch}
      logout={logout}
      saveMove={saveMove}
      onClickSearch={props.onClickSearch}
    />
  );
};
export default Header;

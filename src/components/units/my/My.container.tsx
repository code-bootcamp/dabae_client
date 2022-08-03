import { accessTokenState } from "@/src/commons/store";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import MyPresenter from "./My.presenter";
import { LOGGED_IN, LOGOUT_USER } from "./My.queries";

export default function MyContainer() {
  const { data: login } = useQuery(LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const logout = async () => {
    try {
      await logoutUser();
      setAccessToken("");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return <MyPresenter logout={logout} login={login} />;
}

import { useQuery } from "@apollo/client";
import MyPresenter from "./My.presenter";
import { LOGGED_IN } from "./My.queries";

export default function MyContainer() {
  const { data: login } = useQuery(LOGGED_IN);

  console.log("login ", login);

  return <MyPresenter login={login} />;
}

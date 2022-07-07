import { useRouter } from "next/router";
import JoinHostPresenter from "./JoinHost.presenter";

export default function JoinHostContainer() {
  const router = useRouter();

  const onClickHostMove = () => {
    router.push("/host/dashboard/home");
  };

  return <JoinHostPresenter onClickHostMove={onClickHostMove} />;
}

import { useRouter } from "next/router";
import JoinHostPresenter from "./JoinHost.presenter";

export default function JoinHostContainer() {
  const router = useRouter();

  const onClickHostMove = () => {
    router.push("/host/signup");
  };

  return <JoinHostPresenter onClickHostMove={onClickHostMove} />;
}

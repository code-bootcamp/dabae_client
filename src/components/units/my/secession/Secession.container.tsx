import { useRouter } from "next/router";
import SecessionPresenter from "./Secession.presenter";

export default function SecessionContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  return <SecessionPresenter BackMyMove={BackMyMove} />;
}

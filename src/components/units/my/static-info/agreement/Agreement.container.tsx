import { useRouter } from "next/router";
import AgreementPresenter from "./Agreement.presenter";

export default function AgreementContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/static-info");
  };

  return <AgreementPresenter BackMyMove={BackMyMove} />;
}

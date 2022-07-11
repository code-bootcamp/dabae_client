import { useRouter } from "next/router";
import AgreementPresenter from "./Agreement.presenter";

export default function AgreementContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  return <AgreementPresenter BackMyMove={BackMyMove} />;
}

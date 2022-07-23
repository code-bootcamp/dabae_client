import { useRouter } from "next/router";
import PrivacyPresenter from "./Privacy.presenter";

export default function PrivacyContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my/static-info");
  };

  return <PrivacyPresenter BackMyMove={BackMyMove} />;
}

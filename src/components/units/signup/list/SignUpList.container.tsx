import { useRouter } from "next/router";
import SignUpListPageUI from "./SignUpList.presenter";

export default function SignUpListContainerPage() {
  const router = useRouter();

  const onClickUser = () => {
    router.push("./");
  };
  const onClickHost = () => {
    router.push("../host/signup");
  };

  return (
    <SignUpListPageUI onClickUser={onClickUser} onClickHost={onClickHost} />
  );
}

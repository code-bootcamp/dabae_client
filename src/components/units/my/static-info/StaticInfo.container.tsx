import { useRouter } from "next/router";
import React from "react";
import StaticInfoPresenter from "./StaticInfo.presenter";

export default function StaticInfoContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/my");
  };

  return <StaticInfoPresenter BackMyMove={BackMyMove} />;
}

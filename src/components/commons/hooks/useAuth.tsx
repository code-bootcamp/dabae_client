import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
// import { useRecoilValueLoadable } from "recoil";
// import { restoreAccessTokenLoadable } from "../../../commons/store";

export function useAuth() {
  const router = useRouter();
  // const value = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.error({
          content: "로그인 후 이용 가능합니다.",
          onOk() {
            router.push("/login");
          },
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   value.toPromise().then((newAccessToken) => {
  //     if (!newAccessToken) {
  //       Modal.error({
  //         content: "로그인 후 이용 가능합니다.",
  //         onOk() {
  //           router.push("/login");
  //         },
  //       });
  //     }
  //   });
  // }, []);
}

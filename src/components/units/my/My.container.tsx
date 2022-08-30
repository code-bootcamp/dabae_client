import { accessTokenState } from "@/src/commons/store";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import MyPresenter from "./My.presenter";
import { CHARGE_POINT, LOGGED_IN, LOGOUT_USER } from "./My.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyContainer() {
  const router = useRouter();

  const { data: login, refetch } = useQuery(LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [modalVisible, setModalVisible] = useState(false);
  const [price, setPrice] = useState("");

  const [chargePoint] = useMutation(CHARGE_POINT);

  const onToggleModal = () => {
    setModalVisible((prev: boolean) => !prev);
  };

  const onChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const requestPay = () => {
    onToggleModal();
    const IMP = window.IMP;
    IMP.init("imp70013484");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "다배 포인트 충전",
        amount: price,
        buyer_email: login?.fetchLoginUser.email,
        buyer_name: login?.fetchLoginUser.nickname,
        buyer_tel: "010-0000-0000",
        buyer_postcode: "00000",
      },
      async (rsp: any) => {
        if (rsp.success) {
          await chargePoint({
            variables: {
              amount: price,
              impUid: rsp.imp_uid,
            },
          });
          Modal.success({
            content: "결제가 완료되었습니다.",
            onOk() {
              refetch();
            },
          });
        } else {
          Modal.error({
            content: "결제에 실패했습니다. 잠시후에 다시 시도해주세요.",
          });
        }
      }
    );
  };

  const logout = async () => {
    try {
      await logoutUser();
      setAccessToken("");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <MyPresenter
      logout={logout}
      login={login}
      modalVisible={modalVisible}
      onToggleModal={onToggleModal}
      onChangePrice={onChangePrice}
      requestPay={requestPay}
    />
  );
}

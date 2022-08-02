import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import PaymentUI from "./Payment.presenter";
import { CREATE_PAYMENT } from "./Payment.queries";
import { IPaymentProps } from "./Payment.types";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment(props: IPaymentProps) {
  const [createPayment] = useMutation(CREATE_PAYMENT);

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: props.fetchCourse?.name,
        amount: props.currentPrice,
        buyer_email: props.userData?.fetchLoginUser.email,
        buyer_name: props.userData?.fetchLoginUser.nickname,
        buyer_tel: props.userData?.fetchLoginUser.phone,
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPayment({
            variables: {
              createPaymentInput: {
                impUid: rsp.imp_uid,
                price: props.currentPrice / props.currentUsers,
                quantity: props.currentUsers,
                amount: props.currentPrice,
                courseId: props.fetchCourse?.fetchCourse.id,
                courseTimeId: props.courseTime?.id,
              },
            },
          });
          Modal.success({
            content: "결제가 완료되었습니다.",
          });
        } else {
          Modal.error({
            content: "결제에 실패했습니다. 잠시후에 다시 시도해주세요.",
          });
        }
      }
    );
  };

  return <PaymentUI requestPay={requestPay} />;
}

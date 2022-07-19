import { useEffect, useState } from "react";
import HostDashboardUI from "./HostDashboard.presenter";

/**
 * Author : Sukyung Lee
 * FileName: HostDashBoard.container.tsx
 * Date: 2022-07-17 21:21:54
 * Description : 호스트 대쉬보드
 */

const transactionData = [20, 5, 16, 50, 4, 8];
const ratingData = [10, 16, 5, 44, 5000];
const clientCountData = [20, 5, 16, 50, 4, 8];

const HostDashboard = () => {
  const [renderState, setRenderState] = useState(false);

  useEffect(() => {
    setRenderState(true);
  }, []);

  return (
    <HostDashboardUI
      renderState={renderState}
      transactionData={transactionData}
      ratingData={ratingData}
      clientCountData={clientCountData}
    />
  );
};
export default HostDashboard;

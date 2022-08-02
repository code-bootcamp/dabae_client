// import Spinner3 from "@/src/components/commons/spinner/Spinner3";
// import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import HostDashboardUI from "./HostDashboard.presenter";
// import { MY_COURSE_RATE } from "./HostDashboard.queries";

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
  // const { data: ratingData } = useQuery(MY_COURSE_RATE);

  useEffect(() => {
    setRenderState(true);
  }, []);

  return (
    <>
      {/* {ratingData?.myCourseRate ? ( */}
      <HostDashboardUI
        renderState={renderState}
        transactionData={transactionData}
        // ratingData={ratingData.myCourseRate}
        ratingData={ratingData}
        clientCountData={clientCountData}
      />
      {/* ) : ( */}
      {/* <Spinner3 /> */}
      {/* )} */}
    </>
  );
};
export default HostDashboard;

import CompleteContainer from "@/src/components/units/payment/complete/Complete.container";
import InfoContainer from "@/src/components/units/payment/info/Info.container";
import PaymentContainer from "@/src/components/units/payment/Payment.container";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";

export const FETCH_COURSE = gql`
  query fetchCourse($courseId: String!) {
    fetchCourse(courseId: $courseId) {
      id
      name
      maxPrice
      minPrice
      imageURLs {
        id
        imageURLs
      }
      courseDate {
        id
        date
        courseTime {
          id
          maxUsers
          currentUsers
          courseStartTime
          courseEndTime
        }
      }
    }
  }
`;

export default function PaymentPage() {
  const router: NextRouter = useRouter();

  const [page, setPage] = useState(1);
  const [courseTime, setCourseTime] = useState({});
  const [currentPrice, setCurrentPrice] = useState(0);

  const { data } = useQuery(FETCH_COURSE, {
    variables: {
      courseId: router.query.courseId,
    },
  });

  return (
    <>
      {page === 1 && (
        <PaymentContainer
          data={data}
          setPage={setPage}
          courseTime={courseTime}
          setCourseTime={setCourseTime}
          currentPrice={currentPrice}
          setCurrentPrice={setCurrentPrice}
        />
      )}
      {page === 2 && (
        <InfoContainer
          data={data}
          setPage={setPage}
          courseTime={courseTime}
          currentPrice={currentPrice}
        />
      )}
      {page === 3 && <CompleteContainer />}
    </>
  );
}

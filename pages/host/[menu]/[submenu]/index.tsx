import HostHome from "@/src/components/units/host/home/HostHome.container";
import { FETCH_LOGIN_USER } from "@/src/components/units/host/home/HostHome.queries";
import { useQuery } from "@apollo/client";

/**
 * Author : Sukyung Lee
 * FileName: index.tsx
 * Date: 2022-07-06 03:18:10
 * Description :
 */
const HostPage = () => {
  // TODO: refetchHostUser를 여기서 받으면 전체 렌더링이 발생해서 안좋을 것 같기는 한데.. 전역적으로 사용이 필요한지 나중에 확인해보기
  // TODO: 그리고 페이지를 이동할 때마다 API를 받아오는것 같은데... 음 shallow router라서 그런건가.. 추가적인 공부 필요
  const { data: fetchHostUser, refetch: refetchHostUser } =
    useQuery(FETCH_LOGIN_USER);
  return (
    <HostHome
      fetchHostUserData={fetchHostUser?.fetchLoginUser}
      refetchHostUser={refetchHostUser}
    />
  );
};
export default HostPage;

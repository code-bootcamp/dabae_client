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
  const { data: fetchHostUser } = useQuery(FETCH_LOGIN_USER);
  return <HostHome fetchHostUserData={fetchHostUser?.fetchLoginUser} />;
};
export default HostPage;

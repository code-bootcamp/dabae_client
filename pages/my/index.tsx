import { useAuth } from "@/src/components/commons/hooks/useAuth";
import MyContainer from "@/src/components/units/my/My.container";

export default function MyPage() {
  useAuth();
  return <MyContainer />;
}

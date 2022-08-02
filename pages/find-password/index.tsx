import { useAuth } from "@/src/components/commons/hooks/useAuth";
import FindPassword from "@/src/components/units/find-password/FindPassword.container";

export default function FindPasswordPage() {
  useAuth();
  return <FindPassword />;
}

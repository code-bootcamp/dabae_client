import { useAuth } from "@/src/components/commons/hooks/useAuth";
import SaveListContainer from "@/src/components/units/save-list/SaveList.container";

export default function index() {
  useAuth();
  return <SaveListContainer />;
}

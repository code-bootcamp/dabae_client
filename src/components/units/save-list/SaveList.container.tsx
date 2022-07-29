import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SAVE_LIST } from "./SaveList.queries";
import SaveListPresenter from "./SaveList.presenter";

export default function SaveListContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/");
  };

  const { data: saveList } = useQuery(SAVE_LIST);

  return <SaveListPresenter saveList={saveList} BackMyMove={BackMyMove} />;
}

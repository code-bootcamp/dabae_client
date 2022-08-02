import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PICKS_BY_USER, SAVE_LIST } from "./SaveList.queries";
import SaveListPresenter from "./SaveList.presenter";

export default function SaveListContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/");
  };

  const { data: saveList } = useQuery(SAVE_LIST);
  const { data: pickList } = useQuery(FETCH_PICKS_BY_USER);

  return (
    <>
      <SaveListPresenter
        pickList={pickList}
        saveList={saveList}
        BackMyMove={BackMyMove}
      />
    </>
  );
}

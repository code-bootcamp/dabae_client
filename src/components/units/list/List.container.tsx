import { SEARCH_LIST } from "@/src/layout/header/Header.queries";
import { useQuery } from "@apollo/client";
import { searchCourseList } from "@/src/commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import ListPresenter from "./List.presenter";
import { IListContainer } from "./List.types";
import { FETCH_PICKS_BY_USER } from "./List.queries";

export default function ListContainer(props: IListContainer) {
  const [listSearch] = useRecoilState(searchCourseList);
  const router = useRouter();
  const { data: searchList, refetch } = useQuery(SEARCH_LIST, {
    variables: {
      search: listSearch,
      option: router.query.option,
    },
  });

  const { data: pickList } = useQuery(FETCH_PICKS_BY_USER);

  // filet sort
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    refetch({
      option: e.target.value,
    });
  };

  return (
    <ListPresenter
      searchList={searchList}
      pickList={pickList}
      onChangeSelect={onChangeSelect}
    />
  );
}

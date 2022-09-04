import { SEARCH_LIST } from "@/src/layout/header/Header.queries";
import { useQuery } from "@apollo/client";
import { searchCourseList } from "@/src/commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import ListPresenter from "./List.presenter";
import { FETCH_PICKS_BY_USER } from "./List.queries";

export default function ListContainer() {
  const [listSearch] = useRecoilState(searchCourseList);
  const router = useRouter();
  const {
    data: searchList,
    refetch,
    fetchMore,
  } = useQuery(SEARCH_LIST, {
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

  // inFiniteScroll
  const onLoadMore = () => {
    if (!searchList) {
      return;
    }

    fetchMore({
      variables: {
        page: Math.ceil(searchList?.fetchCoursesSortByOption.length / 16) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchCoursesSortByOption) {
          return {
            fetchCoursesSortByOption: [...prev.fetchCoursesSortByOption],
          };
        }
        return {
          fetchCoursesSortByOption: [
            ...prev.fetchCoursesSortByOption,
            ...fetchMoreResult.fetchCoursesSortByOption,
          ],
        };
      },
    });
  };

  return (
    <ListPresenter
      searchList={searchList}
      pickList={pickList}
      onLoadMore={onLoadMore}
      onChangeSelect={onChangeSelect}
    />
  );
}

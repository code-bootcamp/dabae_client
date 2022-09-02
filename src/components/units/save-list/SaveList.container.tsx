import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PICKS_BY_USER, SAVE_LIST } from "./SaveList.queries";
import SaveListPresenter from "./SaveList.presenter";

export default function SaveListContainer() {
  const router = useRouter();

  const BackMyMove = () => {
    router.push("/");
  };

  const { data: saveList, refetch, fetchMore } = useQuery(SAVE_LIST);
  const { data: pickList } = useQuery(FETCH_PICKS_BY_USER);

  // inFiniteScroll
  const onLoadMore = () => {
    if (!saveList) {
      return;
    }

    fetchMore({
      variables: {
        page: Math.ceil(saveList?.fetchCoursesSortByOption.length / 16) + 1,
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
    <>
      <SaveListPresenter
        pickList={pickList}
        saveList={saveList}
        onLoadMore={onLoadMore}
        BackMyMove={BackMyMove}
        refetch={refetch}
      />
    </>
  );
}

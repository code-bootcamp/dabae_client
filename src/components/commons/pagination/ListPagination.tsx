import theme from "@/styles/theme";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

export interface IListPagination {
  saveListMap?: any;
  searchList?: any;
  refetch: any;
}

export const PAGINATION_LIST_COUNT = gql`
  query {
    howManyCourses
  }
`;

export default function ListPagination(props: IListPagination) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: courseCount } = useQuery(PAGINATION_LIST_COUNT);
  const lastPage = Math.ceil(courseCount?.howManyCourses / 16);

  const onClickPage = (e: any) => {
    props.refetch({
      page: Number(e.target.id),
    });
  };

  const onClickPrev = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
    props.refetch({
      page: currentPage - 1,
    });
  };

  const onClickNext = () => {
    if (currentPage + 1 > lastPage) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
    props.refetch({
      page: currentPage + 1,
    });
  };

  return (
    <PaginationInner>
      {/* {currentPage !== 1 && <Button onClick={onClickPrev}>Prev</Button>} */}
      <Button onClick={onClickPrev}>Prev</Button>
      {new Array(16).fill(1).map((_, i) => {
        return (
          i + 1 <= lastPage && (
            <NumberList
              key={i + currentPage}
              id={String(i + currentPage)}
              onClick={onClickPage}
            >
              {i + 1}
            </NumberList>
          )
        );
      })}
      {/* {currentPage !== lastPage && <Button onClick={onClickNext}>Next</Button>} */}
      <Button onClick={onClickNext}>Next</Button>
    </PaginationInner>
  );
}

export const PaginationInner = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0 15px;
  outline: none;
  background-color: transparent;
  color: #32c2b9;
  border: 1px solid #32c2b9;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #32c2b9;
    color: #fff;
  }
`;

export const NumberList = styled.p`
  cursor: pointer;
  margin: 0;
  ${theme.fontSizes.base};
  color: #32c2b9;
  margin-right: 10px;
  :last-of-type {
    margin-right: 0;
  }
`;

import { ChangeEvent, ReactNode, useState } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";
import { SEARCH_LIST } from "./header/Header.queries";
import { useQuery } from "@apollo/client";
import { searchCourseList } from "../commons/store";
import { useRecoilState } from "recoil";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/joinhost"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  // Recoil 추가
  const [, setListSearch] = useRecoilState(searchCourseList);

  // 검색 기능 추가
  const { data: searchList, refetch } = useQuery(SEARCH_LIST);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    refetch({
      search,
      page: 1,
    });
    setListSearch(search);
    router.push("/list");
  };

  return (
    <>
      {router.asPath.split("/")[2] !== "signup" &&
      router.asPath.split("/")[2] !== "login" &&
      router.asPath.split("/")[1] === "host" ? (
        <Body1> {props.children} </Body1>
      ) : (
        <>
          <Header
            search={search}
            searchList={searchList}
            onChangeSearch={onChangeSearch}
            onClickSearch={onClickSearch}
          />
          {isHiddenHeader ? (
            <div> {props.children} </div>
          ) : (
            <Body> {props.children} </Body>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

const Body = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 20px;
  margin: auto;
`;

const Body1 = styled.div`
  width: 100%;
  min-width: 360px;
  margin: auto;
`;

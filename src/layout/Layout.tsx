import { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";
import { searchCourseList } from "../commons/store";
import { useRecoilState } from "recoil";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/joinhost"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  // 검색 Recoil 추가
  const [, setListSearch] = useRecoilState(searchCourseList);

  // 검색 기능 추가
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    setListSearch(search);
    router.push(`/list?page=1&search=${search}`);
    setSearch("");
  };

  const onClickKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
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
            onChangeSearch={onChangeSearch}
            onClickSearch={onClickSearch}
            onClickKeyPress={onClickKeyPress}
          />
          {isHiddenHeader ? (
            <div> {props.children} </div>
          ) : (
            <Body> {props.children} </Body>
          )}
          {router.asPath.split("/")[1] !== "host" && <Footer />}
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

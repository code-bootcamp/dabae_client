import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/joinhost"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {router.asPath.split("/")[1] === "host" ? (
        <Body1> {props.children} </Body1>
      ) : (
        <>
          <Header />
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
  padding: 0px 20px;
  margin: auto;
`;

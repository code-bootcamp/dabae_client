import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const router = useRouter();

  console.log(router.asPath.split("/")[1] === "host");
  return (
    <>
      {router.asPath.split("/")[1] === "host" ? (
        <div> {props.children} </div>
      ) : (
        <>
          <Header />
          <Body> {props.children} </Body>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

const Body = styled.div`
  width: 100%;
  max-width: 808px;
  padding: 20px;
  margin: auto;
`;

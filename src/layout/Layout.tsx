import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      <Body> {props.children} </Body>
      <Footer />
    </>
  );
};

export default Layout;

const Body = styled.div`
  width: 100%;
  max-width: 808px;
  padding: 0px 20px;
  margin: auto;
`;

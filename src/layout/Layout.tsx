import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header";
import Footer from "./footer/Footer";

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
  padding: 20px;
  margin: auto;
`;

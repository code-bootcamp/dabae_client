import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./header";
import Footer from "./footer";

interface ILayout1Props {
  children: ReactNode;
}

const Layout = (props: ILayout1Props) => {
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

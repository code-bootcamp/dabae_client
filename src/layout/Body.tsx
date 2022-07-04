import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./header";
import Footer from "./footer";

interface ILayout1Props {
  children: ReactNode;
}

const Layout1 = (props: ILayout1Props) => {
  return (
    <>
      <Header />
      <Body> {props.children} </Body>
      <Footer />
    </>
  );
};

export default Layout1;

const Body = styled.div`
  width: 100vw;
  margin: auto;
  padding-top: 60px;
`;

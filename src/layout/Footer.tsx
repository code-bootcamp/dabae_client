import styled from "@emotion/styled";
import React from "react";
import theme from "@/styles/theme";

const Footer = () => {
  return (
    <Container>
      <Title> FOOTER </Title>
      <SNS>
        <img src="/footer/Facebook.svg" alt="" />
        <img src="/footer/Instagram.svg" alt="" />
        <img src="/footer/Youtube.svg" alt="" />
      </SNS>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin: auto;
  width: 100vw;
  background-color: #eaeaea;
  padding: 60px;
  margin-top: 50px;
`;
const Title = styled.div`
  color: #828282;
  font-weight: 800;
  font-size: 18px;
`;
const SNS = styled.div`
  ${theme.flex.row.end}
  gap: 20px;
`;

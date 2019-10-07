import React from "react";
import Layout from "../components/layout";
import Logo from "../images/tartan-logo.svg";
import styled from "styled-components";

const HomeHero = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  svg {
    margin: 100px 0;
    max-width: 100%;
  }
  h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #a40105;
  }
`;

const IndexPage = () => (
  <Layout>
    <HomeHero>
      <Logo />
      <h1>Tartan Tech Talks : Where tech leaders talk tech</h1>
      <h2>Coming soon...</h2>
    </HomeHero>
  </Layout>
);

export default IndexPage;

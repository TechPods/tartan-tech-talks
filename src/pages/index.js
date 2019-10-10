import React from "react";
import Layout from "../components/Layout2";
import Logo from "../images/tartan-logo.svg";
import styled from "styled-components";

const HomeHero = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  svg {
    margin: 23% 0 100px 0;
    max-width: 100%;
  }
  h2 {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    color: #a40105;
  }
`;

const IndexPage = () => (
  <Layout>
    <HomeHero id="home">
      <h2>Coming soon...</h2>
      <Logo />
      <h1>Tartan Tech Talks : Where tech leaders talk tech</h1>
    </HomeHero>
  </Layout>
);

export default IndexPage;

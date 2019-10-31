import React from "react";
import Layout from "../components/Layout";
import Logo from "../images/tartan-logo.svg";
import styled from "styled-components";

import About from "../components/About";
import Events from "../components/Events";
import ContactPage from '../components/Contact';

const HomeHero = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  svg {
    margin: 23% 0 100px 0;
    max-width: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <HomeHero id="home">
      <Logo />
      <h1>Tartan Tech Talks : Where tech leaders talk tech</h1>
    </HomeHero>
    <About />
    <Events />
    <ContactPage />
  </Layout>
);

export default IndexPage;

import React from "react";
import styled from "styled-components";
import LogoTartan from "../images/tartan.svg";

import breakpoints from "../helpers/styles/breakpoints";

const AboutContainer = styled.div`
  display: block;
  position: relative;
  padding: 25px;
  @media ${breakpoints.mobileX} {
    width: calc(100% - 130px);
    margin: auto;
  }
`;
const AboutTitle = styled.h1`
  @media ${breakpoints.mobileX} {
    transform: rotate(90deg);
    transform-origin: left top 0;
    position: relative;
  }

  svg {
    max-width: 250px;
    max-height: 55px;
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    top: 4px;
  }
`;
const AboutContent = styled.div`
  border-left: 15px solid #105327;
  padding: 20px;
  line-height: 2.6;
  font-size: 16px;
  margin-top: 30px;
  @media ${breakpoints.mobileX} {
    height: calc(100vh - 200px);
    line-height: 2.6;
  }

  p {
    font-family: "Roboto Mono", monospace;
    text-transform: uppercase;
  }

  mark {
    display: inline-block;
    font-size: 26px;
    font-family: "Anonymous Pro";
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid #e4be04;
    padding: 0 10px;
    line-height: 2;
    @media ${breakpoints.mobileX} {
      font-size: 36px;
      padding: 20px 20px 5px 20px;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle id="about">
        About <LogoTartan /> Tech Talks
      </AboutTitle>
      <AboutContent>
        <p>
          Tartan Tech Talks is a technology event held in{" "}
          <mark>Scotland</mark>, enabling tech leaders to gather and share battle-field
          stories, industry knowledge, technology trends and best practices.
          Brought to you by the organisers of the popular{" "}
          CTO round table events in London, <mark>Tartan Tech Talks</mark>
          shifts the spotlight to Scotland's vibrant tech scene.
        </p>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const NavigationContainer = styled.div`
  margin-bottom: 3px;
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 45px;
  background-color: #1a1a1a;
  a {
    color: #e6e6e6;
    padding: 15px 0;
    display: inline-block;
    font-size: 16px;
    padding-right: 20px;
    text-decoration: none;
  }
`;

const NavigationContainerWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationContainerWrapper>
        <AnchorLink href="#home">Home /</AnchorLink>
        <AnchorLink offset='50' href="#about">About TTT /</AnchorLink>
        <AnchorLink offset='50' href="#events">Events TTT /</AnchorLink>
      </NavigationContainerWrapper>
    </NavigationContainer>
  );
};

export default Navigation;

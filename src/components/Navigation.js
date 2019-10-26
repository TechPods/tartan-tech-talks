import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

import breakpoints from "../helpers/styles/breakpoints";

const NavigationContainer = styled.div`
  margin-bottom: 3px;
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 45px;
  background-color: #1a1a1a;
  transition: all 300ms;
  @media ${breakpoints.maxTablet} {
    height: auto;
  }

  a {
    color: #e6e6e6;
    padding: 15px 0;
    display: inline-block;
    font-size: 16px;
    padding-right: 20px;
    text-decoration: none;
    &:after {
      content: " /";
      @media ${breakpoints.maxTablet} {
        content: "";
      }
    }
    @media ${breakpoints.maxTablet} {
      display: block;
    }
  }
  @media ${breakpoints.maxTablet} {
    transform: ${({ isMenuOpen }) =>
      !isMenuOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

const NavigationContainerWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const MobileHeader = styled.div`
  display: block;
  width: 40px;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  @media ${breakpoints.tablet} {
    display: none;
  }

  &.open {
    span {
      background-color: #e6e6e6;
    }
  }

  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 50%;
    background: #1a1a1a;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  span:nth-child(1),
  span:nth-child(2) {
    top: 0px;
  }

  span:nth-child(3),
  span:nth-child(4) {
    top: 11px;
  }

  span:nth-child(5),
  span:nth-child(6) {
    top: 22px;
  }

  &.open span:nth-child(1),
  &.open span:nth-child(6) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),
  &.open span:nth-child(5) {
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 5px;
    top: 9px;
  }

  &.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 9px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    left: 5px;
    top: 19px;
  }

  &.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 19px;
  }
`;

const Navigation = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeOnScroll = () => setIsMenuOpen(false);

  const handleResize = () => setIsMenuOpen(isMenuOpen);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", closeOnScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, []);

  return (
    <>
      <MobileHeader
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`nav-icon${isMenuOpen ? " open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MobileHeader>
      <NavigationContainer isMenuOpen={!isMenuOpen}>
        <NavigationContainerWrapper>
          <AnchorLink href="#home">Home </AnchorLink>
          <AnchorLink offset="50" href="#about">
            About TTT
          </AnchorLink>
          <AnchorLink offset="50" href="#events">
            Events TTT
          </AnchorLink>
        </NavigationContainerWrapper>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

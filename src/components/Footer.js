import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import breakpoints from '../helpers/styles/breakpoints';

const FooterContainer = styled.div`
  display: block;
  position: relative;
  padding: 25px;
  margin: auto;
  margin-top: 150px;
  text-align: center;
  border-top: 1px dotted #0e5327;
  border-bottom: 1px dotted #0e5327;
  @media ${breakpoints.mobileX} {
    width: calc(100% - 130px);
  }

  a {
    color: #191919;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import PropTypes from "prop-types";
import CookieConsent from "react-cookie-consent";
import GlobalStyle from "../helpers/styles/globalStyles";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          lineHeight: 1.5,
          fontSize: 14
        }}>
        <main>{children}</main>
        <CookieConsent
          buttonText="Aye, nae bother!"
          buttonStyle={{
            fontSize: "14px",
            background: "rgb(0, 115, 30)",
            color: "white"
          }}>
          Tartan Tech Talks uses cookies to ensure that we give you the best
          experience on our website. If you continue without changing your
          settings, we'll assume that you are happy to receive all cookies on
          this site.
        </CookieConsent>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

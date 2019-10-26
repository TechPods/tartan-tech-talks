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
          paddingTop: 0
        }}>
        <main>{children}</main>
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

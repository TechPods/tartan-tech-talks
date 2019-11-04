import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../helpers/styles/globalStyles";

const LayoutSimple = ({ children }) => {
  return (
    <>
      <GlobalStyle />
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
      </div>
    </>
  );
};

LayoutSimple.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutSimple;

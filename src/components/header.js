import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "../components/nav";
import { css } from '@emotion/core';

const Header = ({ siteTitle }) => (
  <header css={css`
    background: #ccc;
    height: 100px;
    width: 100%;
  `}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

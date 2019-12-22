import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "../components/nav";
import { css } from '@emotion/core';

const Header = ({ siteTitle }) => (
  <header css={
    css`
    `}
  >
    {siteTitle}
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

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "../components/nav";
import { css } from '@emotion/core';

const Header = ({ siteTitle }) => (
  <header css={
    css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `}
  >
    {siteTitle}
    <Link
      to="/"
      css={css`
        border: 1px solid red;
      `}>
      <div>Josh A. Young</div>
      <div>&#x7b; Full Stack Software Engineer &#x7d;</div>
    </Link>
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

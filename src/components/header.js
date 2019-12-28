import PropTypes from "prop-types";
import React from "react";
import Nav from "../components/nav";

const Header = ({ siteTitle }) => (
  <header>
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

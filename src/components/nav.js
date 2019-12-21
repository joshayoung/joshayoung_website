import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const Nav = ({ siteTitle }) => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/thoughts">Thoughts</Link>
      <Link to="/certifications">Certifications</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/about">About</Link>
      <Link to="/snippets">Snippets</Link>
      <Link to="/definitions">Definitions</Link>
      <Link to="/resources">Resources</Link>
    </ul>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav;

import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavLink = styled(Link)`
  font-size: 14px;
  color: ${props => props.color || "#000;"};
  &.active {
    background: red;
  }
`;

const Nav = ({ siteTitle }) => (
  <nav>
    <ul>
      <NavLink color="blue" activeClassName='active' to="/">Home</NavLink>
      <NavLink activeClassName='active' to="/thoughts">Thoughts</NavLink>
      <NavLink activeClassName='active' to="/certifications">Certifications</NavLink>
      <NavLink activeClassName='active' to="/projects">Projects</NavLink>
      <NavLink activeClassName='active' to="/classes">Classes</NavLink>
      <NavLink activeClassName='active' to="/resume">Resume</NavLink>
      <NavLink activeClassName='active' to="/about">About</NavLink>
      <NavLink activeClassName='active' to="/snippets">Snippets</NavLink>
      <NavLink activeClassName='active' to="/definitions">Definitions</NavLink>
      <NavLink activeClassName='active' to="/resources">Resources</NavLink>
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

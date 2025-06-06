import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavLink = styled(Link)`
  font-size: 14px;
  color: ${props => props.color || "#000;"};
`;

const NavLinks = () => (
  <>
    <li>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/thoughts">
        Thoughts
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/portfolio">
        Portfolio
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/training">
        Training
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/certifications">
        Certs
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/resume">
        Resume
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/snippets">
        Snippets
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/definitions">
        Definitions
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/resources">
        Resources
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/me">
        About
      </NavLink>
    </li>
  </>
);

export default NavLinks;

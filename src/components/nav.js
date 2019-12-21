import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from '@emotion/core';

const NavLink = styled(Link)`
  font-size: 14px;
  color: ${props => props.color || "#000;"};
  &.active {
    background: red;
  }
`;

const Nav = ({ siteTitle }) => (
  <nav css={css`
    border: 1px solid red;
    label, #menu {
      display: none;
    }

    ul {
      background: red;
      position: fixed;
      right: -300px;
      height: 100%;
      z-index: 100;
      height: 100%;
      width: 300px;
      animation: close 0.5s ease;
      animation-fill-mode: forwards;
    }

    ul li {
      display: block;
    }

    @media screen and (max-width: 768px){
      label {
        display: inline-block;
        padding: 10px;
        font-size: 34px;
        &:hover {
          cursor: pointer;
        }
      }

      input:checked ~ ul {
        animation: open 0.5s ease;
        animation-fill-mode: forwards;
      }
    }

    @keyframes open {
      from {right: -300px;}
      to {right: 0;}
     }

     @keyframes close {
      from {right: 0;}
      to {right: -300px;}
     }
  `}
  >
    <label for='menu'>&#9776;</label>
    <input type='checkbox' id='menu' />
    <ul>
      <li>
        <NavLink color="blue" activeClassName='active' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/thoughts">Thoughts</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/certifications">Certifications</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/resume">Resume</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/snippets">Snippets</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/definitions">Definitions</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/resources">Resources</NavLink>
      </li>
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

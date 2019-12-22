import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from '@emotion/core';

const NavLink = styled(Link)`
  font-size: 14px;
  color: ${props => props.color || "#000;"};
  &.active {
    background: #fff;
  }
`;

const blue = "#3385ff";

const Nav = ({ siteTitle }) => (
  <nav css={css`
    margin-left: 100%;
    position: relative;
    /* TODO: fix this: */
    left: -51px;

    label, #menu {
      display: none;
    }

    label {
      z-index: 200;
      position: relative;
    }

    ul {
      padding-top: 68px;
      position: fixed;
      background: ${blue};
      height: 100%;
      z-index: 100;
      width: 250px;
      margin-top: -68px;
      animation: close 0.5s ease;
      right: -250px;
      animation-fill-mode: forwards;
      border-left: solid 3px ${blue};
    }

    ul li {
      display: block;
    }

    a {
      display: block;
      padding: 10px;
      font-size: 18px;
      &:hover {
        background: #fff;
      }
    }

    label {
      display: inline-block;
      font-size: 34px;
      &:hover {
        cursor: pointer;
      }
    }

    input:checked ~ ul {
      animation: open 0.5s ease;
      animation-fill-mode: forwards;
    }

    @keyframes open {
      from {right: -250px;}
      to {right: 0;}
     }

     @keyframes close {
      from {right: 0;}
      to {right: -250px;}
     }
  `}
  >
    <label className='menu' htmlFor='menu'>&#9776;</label>
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

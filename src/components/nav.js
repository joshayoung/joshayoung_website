import PropTypes from "prop-types";
import React from "react";
import { css } from '@emotion/core';
import NavLinks from "../components/nav-links";

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
      background: #ececec;
      height: 100%;
      z-index: 100;
      width: 250px;
      margin-top: -68px;
      animation: close 0.5s ease;
      right: -250px;
      animation-fill-mode: forwards;
      border-left: solid 3px ${blue};
      @media (min-width: 700px) {
        display: none;
      }
    }

    ul li {
      display: block;
      a.active {
        background: #fff;
      }
    }

    li:nth-of-type(2n) a {
      background: #e6e6e6;
      &.active {
        background: #fff;
      }
      &:hover {
        background: #fff;
      }
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
      @media (min-width: 700px) {
        display: none;
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
    <NavLinks />
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav;

import React from "react";
import NavLinks from "../components/nav-links";
import { css } from '@emotion/core';

const blue = "#3385ff";

const LeftNav = () => (
  <nav css={css`
  width: 200px;
  margin: 170px 10px 0 10px;
  display: none;
  @media (min-width: 700px) {
    display: block;
  }

  li {
    display: block;
    span {
      background: red;
      border-bottom: 1px solid #ccc;
    }
    a {
      display: block;
      text-align: center;
      padding: 10px;
      &.active {
        background: none;
        color: ${blue};
        font-style: italic;
      }
    }
  }
  `}
    className="left-nav">
    <NavLinks />
  </nav >
)

export default LeftNav;
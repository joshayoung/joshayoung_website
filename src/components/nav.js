import React from "react";
import NavLinks from "./nav-links";
import { css } from '@emotion/core';

const blue = "#3385ff";

const Nav = () => (
  <nav css={css`

  `}
    className="nav">
    <NavLinks />
  </nav >
)

export default Nav;
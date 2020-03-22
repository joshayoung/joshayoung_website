import React from "react";
import NavLinks from "../components/nav-links";
import { css } from '@emotion/core';

const blue = "#3385ff";

const LeftNav = () => (
  <nav css={css`

  `}
    className="left-nav">
    <NavLinks />
  </nav >
)

export default LeftNav;
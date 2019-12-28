import React from "react";
import { css } from '@emotion/core';
import Inner from "../components/inner";

const Wrap = ({ children, klass }) => (
  <div
    css={css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      padding-bottom: 100px;
  `}
    className={klass}>
    <Inner children={children} />
  </div >
)

export default Wrap;
import React from "react";
import Repos from "./repos";
import Posts from "./posts";
import { css } from '@emotion/core';

const Stats = () => (
  <div css={css`
    @media (min-width: 600px) {
      display: flex;
      flex-direction: wrap;
      justify-content: space-between;
    }
  `}>
    <Posts />
    <Repos />
  </div>
)

export default Stats;

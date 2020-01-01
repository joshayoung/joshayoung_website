import React from "react";
import Repos from "./repos";
import PostsOutput from "../output/posts-output";
import { css } from '@emotion/core';

const Stats = () => (
  <div css={css`
    @media (min-width: 600px) {
      display: flex;
      flex-direction: wrap;
      justify-content: space-between;
    }
  `}>
    <PostsOutput />
    <Repos />
  </div>
)

export default Stats;

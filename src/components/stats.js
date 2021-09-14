import React from "react";
import PostsOutput from "../output/posts-output";
import { css } from "@emotion/react";

const Stats = () => (
  <div
    css={css`
      @media (min-width: 600px) {
        display: flex;
        flex-direction: wrap;
        justify-content: space-between;
      }
    `}
  >
    <PostsOutput />
  </div>
);

export default Stats;

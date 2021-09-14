import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";

const blue = "#3385ff";

const Thought = ({ post }) => (
  <div
    css={css`
      border-bottom: 3px solid #ccc;
      margin-bottom: 40px;

      a {
        color: ${blue};
      }
    `}
  >
    <h3>
      <Link to={post.path}>{post.title}</Link>
    </h3>
    <p>{post.description}</p>
    <div
      css={css`
        font-size: 12px;
      `}
    >
      {post.date}
    </div>
  </div>
);

export default Thought;

import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";

const Logo = () => (
  <Link
    to="/"
    css={css`
      font-size: 52px;
      font-family: "Acme", sans-serif;
      display: block;
      margin-bottom: 70px;
      span {
        color: #3385ff;
      }
    `}
  >
    <div>
      Josh A<span>.</span> Young
    </div>
    <div
      css={css`
        font-size: 20px;
        color: #3385ff;
        &:before {
          content: "{ ";
          color: #b3b3b3;
        }
        &:after {
          content: " }";
          color: #b3b3b3;
        }
      `}
    >
      Software Engineer
    </div>
  </Link>
);

export default Logo;

import { Link } from "gatsby";
import React from "react";
import { css } from '@emotion/core';

const Logo = () => (
  <Link
    to="/"
    css={css`
        font-size: 52px;
        font-family: 'Acme', sans-serif;
        display: block;
        margin-bottom: 70px;
        span {
          color: #3385ff;
        }
      `}>
    <div>Josh A<span>.</span> Young</div>
    <div
      css={css`
      font-size: 20px;
      font-style: italic;
      color: #3385ff;
    `}>
      &#x7b; Full Stack Software Engineer &#x7d;</div>
  </Link>
)

export default Logo;
import React from "react";
import { css } from '@emotion/core';

const Box = ({ children }) => (
  <div css={css`
    padding-bottom: 10px;
    border-bottom: 3px solid #3385ff;
    margin-bottom: 50px;
    &:last-child {
      border-bottom: none;
    }

    header {
      font-family: 'Acme', sans-serif;
      font-size: 30px;
      margin-bottom: 5px;
      color: #3385ff;
      &:before {
        content: "{ ";
        color: #b3b3b3;
      }
      &:after {
        content: " }";
        color: #b3b3b3;
      }
    }

     ul {
      display: flex;
      flex-wrap: wrap;
      a {
        display: inline-block;
        padding: 5px 10px;
        background: rgba(204, 204, 204, 0.4);
        border: 1px solid #f4f4f4;
        padding: 4px 10px;
        border-radius: 4px;
        margin: 4px;
      }
    }
  `}>
    {children}
  </div>
);

export default Box;
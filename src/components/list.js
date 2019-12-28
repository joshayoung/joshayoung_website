import React from "react";
import { css } from '@emotion/core';

const List = ({ children }) => (
  <div css={css`
    margin-bottom: 50px;
    &.last {
      margin-bottom: 0;
    }
    header {
      font-family: 'Acme', sans-serif;
      color:#3385ff;
      padding: 3px;
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
      list-style-type: square;
      margin-left: 30px;
    }
  `}>
    {children}
  </div>
);

export default List;
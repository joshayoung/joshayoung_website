import { css } from "@emotion/core";
import React from "react";

const blue = "#3385ff";

const AnchorList = ({ children }) => (
  <ul
    css={css`
      list-style-type: none;
      margin-left: 0;
      li {
        display: inline-block;
      }

      a {
        display: block;
        padding: 2px 10px;
        margin: 2px;
        background: ${blue};
        color: #fff;
        border-radius: 4px;
        &:hover {
          background: rgba(204, 204, 204, 0.4);
          color: #000;
        }
      }
    `}
  >
    {children}
  </ul>
);

export default AnchorList;

import { css } from '@emotion/core';
import React from "react";

const Attribution = () => (
  <div css={css`
    color: #999999;
    a {
      color: #999999;
    }
  `}>
    Icons made by
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
    and
    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
    from
    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  </div>
);

export default Attribution;
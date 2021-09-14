import { css } from "@emotion/react";
import React from "react";

const Attribution = () => (
  <div
    css={css`
      color: #999999;
      a {
        color: #999999;
      }
    `}
  >
    Icons made by{" "}
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
      Freepik
    </a>{" "}
    and{" "}
    <a
      href="https://www.flaticon.com/authors/pixel-perfect"
      title="Pixel perfect"
    >
      Pixel perfect
    </a>{" "}
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com
    </a>.
    Also icon(s) from <a href='https://www.iconfinder.com/icons/4691606/pluralsight_icon'>iconfinder</a>.
  </div>
);

export default Attribution;

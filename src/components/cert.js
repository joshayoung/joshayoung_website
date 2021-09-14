import React from "react";
import Image from "./image";
import { css } from "@emotion/react";

const Cert = ({ logo, link, children }) => (
  <>
    <div
      css={css`
        display: flex;
      `}
    >
      {logo ? (
        <div
          css={css`
            flex: 23%;
            padding-right: 10px;
          `}
        >
          <Image filename={logo} />
        </div>
      ) : (
        ""
      )}

      <div
        css={css`
          flex: 77%;
        `}
      >
        {children}
      </div>
    </div>
    <div>
      <a href={link}>About Certification</a>
    </div>
  </>
);

export default Cert;

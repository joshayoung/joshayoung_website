import React from "react";
import Image from "./image";
import { css } from '@emotion/core';

const Cert = ({ logo, link, children }) => (
  <>
    <div
      css={css`
      display: flex;
    `}
    >

      {logo ?
        <div
          css={css`
          width: 450px;
          padding-right: 10px;
        `}
        ><Image filename={logo} /></div>
        : ''
      }

      <div
        css={css`
        `}
      >{children}</div>
    </div>
    <div><a href={link}>About Certification</a></div>
  </>
);

export default Cert;
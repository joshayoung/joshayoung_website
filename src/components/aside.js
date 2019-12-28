import React from "react";
import { css } from '@emotion/core';
import Glance from "../snippets/glance";
import Tags from "../snippets/tags";

const Aside = () => (
  <div className='aside'
    css={css`
      display: none;
      max-width: 300px;
      font-size: 14px;
      padding: 10px;
      padding-left: 40px;
      margin-top: 240px;
      header {
        font-size: 20px;
      }
      @media (min-width: 600px) {
        display: block;
      }
  `}>
    <Glance />
    <Tags />
  </div>
)

export default Aside;
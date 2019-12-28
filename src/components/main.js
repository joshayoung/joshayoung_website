import React from "react";
import { css } from '@emotion/core';

const Main = ({ children }) => (
  <main
    css={css`
    margin: 1rem auto;
    max-width: 90vw;
    width: 700px;
    @media (min-width: 600px) {
        border-left: 1px solid #dedede;
        padding-left: 30px;
    }
    @media (min-width: 700px) {
      margin: 0;
      margin-top: 50px;
    }
    > p:first-of-type {
      line-height: 2;
      font-size: 25px;
      background: #eaeaea;
      border-bottom: 1px solid #3385ff;
      box-shadow: 1px 1px 1px #ccc;
      padding: 0 10px;
      font-family: 'Acme', sans-serif;
      &:first-letter {
        color: #3385ff;
      }
    }
  `}>
    {children}
  </main>
)

export default Main;
import React from "react";
import { css } from '@emotion/core';
import Header from "./header";
import Logo from "../components/logo";
import LeftNav from "../components/left-nav";
import Main from "../components/main";
import Aside from "../components/aside";
import GoToTop from "../components/go-to-top";

const Inner = ({ children }) => (
  <div css={css`
      @media (min-width: 700px) {
        display: flex;
        justify-content: flex-start;
      }
    `}
  >
    <a id="top"></a>
    <Header />
    <LeftNav />
    <Main>
      <Logo />
      {children}
      <GoToTop />
    </Main>
    <Aside />
  </div>
)

export default Inner;
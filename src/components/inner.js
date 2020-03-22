import React from "react";
import { css } from '@emotion/core';
import Header from "./header";
import Logo from "../components/logo";
import Nav from "../components/nav";
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
    <Nav />
    <Main>
      <Logo />
      {children}
      <GoToTop />
    </Main>
    <Aside />
  </div>
)

export default Inner;
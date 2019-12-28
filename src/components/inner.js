import React from "react";
import { css } from '@emotion/core';
import Header from "./header";
import Logo from "../components/logo";
import LeftNav from "../components/left-nav";
import Main from "../components/main";
import Aside from "../components/aside";

const Inner = ({ children }) => (
  <div css={css`
      @media (min-width: 700px) {
        display: flex;
        justify-content: flex-start;
      }
    `}
  >
    <Header />
    <LeftNav />
    <Main>
      <Logo />
      {children}
    </Main>
    <Aside />
  </div>
)

export default Inner;
import React from "react";
import { css } from '@emotion/core';
import Header from "./header";
import Logo from "../components/logo";
import LeftNav from "../components/left-nav";
import Main from "../components/main";
import Aside from "../components/aside";

const Wrap = ({ children, klass }) => (
  <div
    css={css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      padding-bottom: 100px;
  `}
    className={klass}>
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
  </div >
)

export default Wrap;
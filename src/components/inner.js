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
    <button className="hamburger" css={css`
      cursor: pointer;
      z-index: 100;
      outline: none;
      background: transparent;
      display: inline-block;
      padding: 20px;
      border: none;
      position: relative;
      user-select: none;
      /* TODO: Restricts going to full height at wide resolutions. Fix */
      max-height: 62px;
      @media (min-width: 700px) { 
        display: none;
      }
    `}>
      <span css={css`
          display: inline-block;
          background: #000;
          height: 0.25rem;
          position: relative;
          width: 2rem;
          transition: background 0.4s ease;
        &:before,
        &:after {
          display: inline-block;
          background: #000;
          width: 2rem;
          content: "";
          height: 0.25rem;
          position: absolute;
          left: 0;
        }
        &:before,
        &:after {
          transition: top 0.4s 0.4s ease, transform 0.4s ease;
          transform-origin: 50% 50% 0;
        }
        &:before:hover,
        &:after:hover {
          background: #000;
        }
        &:before {
          top: -0.6rem;
        }
        &:after {
          top: 0.6rem;
        }
      `}
      ></span>
    </button>
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
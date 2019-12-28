import React from "react";
import { css } from '@emotion/core';
import Social from "../components/social";
import Quote from "../components/quote";
import Attribution from "../components/attribution";
import { Link } from "gatsby";

const year = new Date().getFullYear();

const Footer = () => (
  <footer
    css={css`
    background: #efefef;
    border-top: solid 1px #3385ff;
    height: 125px;
    margin-top: -100px;
    padding: 0 10px;
    padding-top: 20px;
    @media (min-width: 600px) {
      height: 80px;
      margin-top: -80px;
    }
    .inner {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      @media (min-width: 600px) {
        flex-direction: row;
        align-items: flex-end;
      }

    }

    .social {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 20px;
      @media (min-width: 600px) {
        order: 3;
        margin-bottom: 0px;
      }
    }

    .quote {
      color: #999999;
    }

    .social a {
      margin: 0 4px;
      display: inline-block;
    }
  `}>
    <div className='inner'>
      <div className='social'>
        <Social />
        <Link to="/me">Josh Young - © {year}</Link>
      </div>
      <div css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 12px;
        text-align: right;
        @media (min-width: 600px) {
          align-items: flex-start;
        }
      `}>
        <Attribution />
        <Quote />
      </div>
    </div>
  </footer>
)

export default Footer;
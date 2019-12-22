
import PropTypes from "prop-types";
import React from "react";
import { css } from '@emotion/core';
import Social from "../components/social";

const year = (new Date).getFullYear();

const Footer = ({ siteTitle }) => (
  <footer
    css={css`
    font-size: 14px;
    background: #f2f2f2;
    border-top: solid 1px #3385ff;
    .inner {
      display: flex;
      justify-content: space-between;
      max-width: 90vw;
      width: 700px;
    }

    .social a {
      margin: 0 4px;
      display: inline-block;
    }
  `}>
    <div className='inner'>
      <div className='social'>
        <Social />
      </div>
      <a href="/about">Josh Young - © {year}</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;

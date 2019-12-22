
import PropTypes from "prop-types";
import React from "react";
import { css } from '@emotion/core';

const Footer = ({ siteTitle }) => (
  <footer
    css={css`
    display: flex;
    justify-content: space-between;
    background: red;
    font-size: 14px;
    background: #ccc;
    border-top: 1px solid #3385ff;

    .social a {
      margin: 0 4px;
      display: inline-block;
    }
  `}>
    <div className='social'>
      <a href="https://codepen.io/joshayoung/pens/popular">CP</a>
      <a href="https://www.linkedin.com/in/joshuayoung1">LI</a>
      <a href="https://github.com/joshayoung">GH</a>
    </div>
    <a href="/about">Josh Young - © 2020</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;

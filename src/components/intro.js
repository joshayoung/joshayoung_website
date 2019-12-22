import PropTypes from "prop-types";
import React from "react";
import { css } from '@emotion/core';

const Intro = ({ siteTitle }) => (
  <section className='' css={css`
    padding: 20px 0;
    font-size: 30px;
    font-family: 'Acme', sans-serif;
    margin-bottom: 50px;
    line-height: 1.7;

    &:first-letter {
      color: #3385ff;
      font-weight: bold;
    }

    span:not(.dot) {
      background: #3385ff;
      display: inline-block;
      padding: 0 10px;
      color: #fff;
    }

    .dot {
      color: #3385ff;
      display: inline-block;
      margin-right: 10px;
    }
  `}>
    My name is Josh<span className='dot'>.</span>
    I am a Web Developer<span className='dot'>.</span>
    Here I write about web development and my current tech projects<span className='dot'>.</span>
    Check out my <span>Blog</span> to see what I am writing or my <span>Projects</span> to
    see what I am building<span className='dot'>...</span>
  </section >
)

Intro.propTypes = {
  siteTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: ``,
}

export default Intro;

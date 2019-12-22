import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from '@emotion/core';

const Intro = ({ siteTitle }) => (
  <section className='' css={css`
    padding: 20px;
    font-size: 30px;

    span {
      background: #3385ff;
      display: inline-block;
      padding: 0 10px;
      color: #fff;
    }
  `}>
    My name is <span>Josh</span>.
    I am a Web Developer.
    Here I write about web development and my current tech projects.
    Check out my <span>Blog</span> to see what I am writing or my <span>Projects</span> to
    see what I am building.
  </section >
)

Intro.propTypes = {
  siteTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: ``,
}

export default Intro;

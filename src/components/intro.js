import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Intro = ({ siteTitle }) => (
  <section>
    My name is Josh.
    I am a Web Developer.
    Here I write about web development and my current tech projects.
    Check out my Blog to see what I am writing or my Projects to
    see what I am building.
  </section>
)

Intro.propTypes = {
  siteTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: ``,
}

export default Intro;

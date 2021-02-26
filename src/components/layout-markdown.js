import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/layout";

const LayoutMarkdown = ({ children }) => (
  <>
    <Layout children={children} klass="markdown" />
  </>
);

LayoutMarkdown.propTypes = {
  siteTitle: PropTypes.string,
};

export default LayoutMarkdown;

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const hljs = require('./node_modules/highlight.js');

exports.onClientEntry = () => {
  window.onload = () => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
};

exports.onInitialClientRender = () => { };
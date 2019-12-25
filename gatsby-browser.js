/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const hljs = require('./node_modules/highlight.js');

exports.onClientEntry = () => {
  window.onload = () => {
    debugger;
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
  // document.addEventListener('DOMContentLoaded', (event) => {
  // debugger;
  // document.body.className = document.body.className.replace(/\bno-js\b/, '');
  //   document.querySelectorAll('pre code').forEach((block) => {
  //     hljs.highlightBlock(block);
  //   });
  // });
  // window.addEventListener('load', () => {
  //   document.querySelectorAll('pre code').forEach((block) => {
  //     hljs.highlightBlock(block);
  //   });
  // });

  // document.addEventListener('DOMContentLoaded', (event) => {
  // hljs.initHighlightingOnLoad();
  // hljs.configure({
  //   useBR: true
  // });
  // });
};
exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
  document.addEventListener('DOMContentLoaded', (event) => {
    debugger;
    // document.body.className = document.body.className.replace(/\bno-js\b/, '');
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
};
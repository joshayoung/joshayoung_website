import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import Footer from "./footer";
import Wrap from "../components/wrap";

import "normalize.css";
import "../styles/fonts.scss";
import "highlight.js/styles/solarized-dark.css"

const Layout = ({ children, klass }) => {
  const blue = "#3385ff";

  return (
    <>
      <Global styles={css`
        pre { white-space: pre-wrap; }
        code { white-space: pre-wrap; }
        * { box-sizing: border-box; }

        body {
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          line-height: 1.4;
          background-color: #f2f2f2;
          background-image: -webkit-linear-gradient(10deg, #efefef 50%, #f4f4f4 50%);
          background-image: -webkit-linear-gradient(10deg, #fff59e 50%, #f4f4f4 50%);
        }

        h1 {
          font-size: 28px;
          border-bottom: 1px solid ${blue};
          &:after {
            content: " /";
            color: ${blue};
          }
          &:before {
            content: "/ ";
            color: ${blue};
          }
        }

        h3 {
          color: ${blue};
          font-size: 1.29rem;
          &:before {
            content: "{ ";
            color: #b3b3b3;
          }
          &:after {
            content: " }";
            color: #b3b3b3;
          }
        }

        a {
          text-decoration: none;
          color: #000;
          &:hover {
            color: ${blue};
          }
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .home .aside {
            display: none;
        }

        .warning {
          padding: 10px;
          background: red;
        }
      `} />
      <Wrap children={children} klass={klass} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

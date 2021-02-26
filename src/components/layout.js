import React from "react";
import { Global, css } from "@emotion/core";
import PropTypes from "prop-types";
import Footer from "./footer";
import Wrap from "../components/wrap";

import "normalize.css";
import "../styles/fonts.css";
import "../styles/overrides.scss";
import "../styles/code-styles.scss";

const Layout = ({ children, klass }) => {
  const blue = "#3385ff";

  return (
    <>
      <Global
        styles={css`
          pre {
            white-space: pre-wrap;
          }
          code {
            white-space: pre-wrap;
          }
          * {
            box-sizing: border-box;
          }
          fieldset {
            border: none;
          }

          body {
            font-family: "Work Sans", sans-serif;
            font-size: 18px;
            line-height: 1.4;
            background-color: #f2f2f2;
            background-image: -webkit-linear-gradient(
              10deg,
              #efefef 50%,
              #f4f4f4 50%
            );
            background-image: -webkit-linear-gradient(
              10deg,
              #fff59e 50%,
              #f4f4f4 50%
            );
            background-image: -webkit-linear-gradient(
              10deg,
              #ffbb33 50%,
              #f4f4f4 50%
            );
            background-image: -webkit-linear-gradient(
              9deg,
              rgba(255, 187, 51, 0.16) 50%,
              #f4f4f4 50%
            );
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

          h4 {
            margin-bottom: 0;
          }

          h6 {
            margin: 10px 0;
          }

          h5 {
            margin: 10px 0;
          }

          span {
            font-size: 14px;
          }

          a {
            text-decoration: none;
            color: #000;
            &:hover {
              color: ${blue};
            }
          }

          ul {
            list-style-type: square;
            padding: 0;
            margin: 0 0 0 30px;
            font-size: 14px;
          }

          /* Reset the margin for indented list item in markdown */
          li > p {
            margin: 0;
          }

          li span:last-child {
            margin-left: 5px;
          }

          dl {
            dd {
              margin: 0 0 10px 0;
              font-style: italic;
              font-size: 14px;
            }
            dt {
              display: inline-block;
              font-weight: bold;
              color: ${blue};
              &:after {
                content: ": ";
              }
            }
          }
        `}
      />
      <Wrap children={children} klass={klass} />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

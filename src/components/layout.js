import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import Logo from "../components/logo";
import LeftNav from "../components/left-nav";
import SEO from "../components/seo";
import Glance from "../snippets/glance";
import Tags from "../snippets/tags";
import Main from "../components/main";

import "normalize.css";
import "../styles/fonts.scss";
import "highlight.js/styles/solarized-dark.css"

const Layout = ({ children, klass }) => {
  const blue = "#3385ff";

  return (
    <>
      <Global styles={css`
        .warning {
          padding: 10px;
          background: red;
        }

        pre {
          white-space: pre-wrap;
        }
        code {
          white-space: pre-wrap;
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Acme', sans-serif;
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

        nav {
          li {
            display: inline-block;
          }
        }

        .Wrap {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          padding-bottom: 100px;
          &Inside {
            @media (min-width: 700px) {
              display: flex;
              justify-content: flex-start;
            }
          }
        }

        .aside {
          display: none;
          max-width: 300px;
          font-size: 14px;
          padding: 10px;
          padding-left: 40px;
          margin-top: 240px;
          header {
            font-size: 20px;
          }
          @media (min-width: 600px) {
            display: block;
          }
        }

        .home .aside {
            display: none;
        }

        footer {
          padding: 0 10px;
          padding-top: 20px;
        }
      `} />
      <div className={klass ? "Wrap " + klass : 'Wrap'}>
        <div className='WrapInside'>
          <Header />
          <LeftNav />
          <Main>
            <Logo />
            {children}
          </Main>
          <div className='aside'>
            <Glance />
            <Tags />
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

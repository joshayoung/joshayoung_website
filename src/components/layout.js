import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import Logo from "../components/logo";
import SEO from "../components/seo";

import "normalize.css";

import "../styles/global.scss";

const Layout = ({ children }) => {
  const blue = "#3385ff";

  return (
    <>
      <Global styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Acme', sans-serif;
          font-size: 18px;
          line-height: 1.4;
          background-color: #f2f2f2;
          background-image: -webkit-linear-gradient(10deg, #efefef 50%, #f4f4f4 50%);
        }

        h1 {
          font-size: 40px;
          &.header {
            border-bottom: 1px solid ${blue};
          }
        }

        h3 {
          color: ${blue};
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
          &-Inside {
            flex-grow: 1;
          }
        }

        main {
          @media (min-width: 600px) {
              border-left: 1px solid #dedede;
              padding-left: 30px;
          }
        }

        footer {
          padding: 0 10px;
          padding-top: 20px;
        }

      `} />
      <SEO title="test" />
      <div className='Wrap'>
        <div className='WrapInside'>
          <Header />
          <main
            css={css`
              margin: 1rem auto;
              max-width: 90vw;
              width: 700px;
            `}
          >
            <Logo />
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

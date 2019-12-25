import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import Logo from "../components/logo";
import LeftNav from "../components/left-nav";
import SEO from "../components/seo";

// import "normalize.css";

// import "../styles/global.scss";
// import "../styles/markdown.scss";
import "highlight.js/styles/solarized-dark.css"

const Layout = ({ children, klass }) => {
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
      <div className="Wrap">
        <div className='WrapInside'>
          <Header />
          <LeftNav />
          <main
            className={klass ? klass : ''}
            css={css`
              margin: 1rem auto;
              max-width: 90vw;
              width: 700px;
              @media (min-width: 700px) {
                margin: 0;
                margin-top: 50px;
              }
            `}
          >
            <Logo />
            {children}
          </main>
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

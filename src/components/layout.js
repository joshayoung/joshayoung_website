import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import Header from "./header";
import Glance from "./glance";
import Tags from "./tags";
import Footer from "./footer";
import Logo from "../components/logo";
import Stats from "../components/stats";
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
          background: #f4f4f4;
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
          margin-bottom: 100px;
          &-Inside {
            flex-grow: 1;
          }
        }

        section {
          margin-bottom: 20px;
        }

        footer {
          height: 40px;
          margin-top: -40px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
        }

      `} />
      <SEO />
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
            <Glance />
            <Tags />
            <Stats />
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

import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Glance from "./glance";
import Tags from "./tags";
import Repos from "./repos";
import Posts from "./posts";

import "normalize.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery2 {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

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
        }

        a {
          text-decoration: none;
          color: #000;
          &:hover {
            color: blue;
          }
        }

        nav {
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          li {
            display: inline-block;
          }
        }

        .Wrap {
          display: flex;
          min-height: 100vh;
          flex-direction: column;;
          &-Inside {
            flex-grow: 1;
          }
        }

        footer {
          height: 20px;
          margin-top: -20px;
        }

      `} />
      <div className='Wrap'>
        <div className='WrapInside'>
          <main
            css={css`
              margin: 1rem auto;
              max-width: 90vw;
              width: 500px;
            `}
          >
            <Header />
            <div>Josh A. Young</div>
            <div className='title'>Full Stack Software Engineer</div>
            {children}
            <Glance />
            <Tags />
            <Repos />
            <Posts />
          </main>
        </div>
      </div>
      <footer>
        <a href="https://codepen.io/joshayoung/pens/popular">CodePen</a>
        <a href="https://www.linkedin.com/in/joshuayoung1">linkedin</a>
        <a href="https://github.com/joshayoung">Github</a>
        <a href="/about">© 2020 - Josh Young</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

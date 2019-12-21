import React from "react";
import { Global, css } from '@emotion/core';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./nav";
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
          <Nav></Nav>
          <div className='title'>
            Josh A. Young
          </div>
          <div className='title'>Full Stack Software Engineer</div>
          <main>
            {children}
            <Glance></Glance>
            <Tags></Tags>
            <Repos></Repos>
            <Posts></Posts>
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

export default Layout

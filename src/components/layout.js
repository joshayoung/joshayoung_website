import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Glance from "./Glance";

import "normalize.css";
import "../styles/layout.scss";

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
          </main>
        </div>
      </div>
      <footer>
        <a href="https://codepen.io/joshayoung/pens/popular">CodePen</a>
        <a href="https://www.linkedin.com/in/joshuayoung1">linkedin</a>
        <a href="https://github.com/joshayoung">Github</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

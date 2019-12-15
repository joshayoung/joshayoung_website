import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"

import "normalize.css"
import "../styles/new_design.scss"

const Layout2 = ({ children }) => {
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
      <div className='wrap'>
        <div className='wrapInside'>
          <header>Josh A. Young</header>
          <Nav></Nav>
          <div className='title'>
            Josh A. Young
          </div>
          <div className='title'>Full Stack Software Engineer</div>
          <main>{children}main</main>
        </div>
      </div>
      <footer>footer</footer>
    </>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2

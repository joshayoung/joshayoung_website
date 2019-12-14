import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
    <div>
      <div className=''>
        <header>Josh A. Young</header>
        <nav>
          <ul>
            <li>Thoughts</li>
            <li>Certs</li>
            <li>Projects</li>
            <li>Classes</li>
            <li>Resume</li>
            <li>About</li>
            <li>Snippets</li>
            <li>Definitions</li>
            <li>Resources</li>
          </ul>

        </nav>
        <div className='title'>
          Josh A. Young
        </div>
        <div className='title'>Full Stack Software Engineer</div>
        <main>{children}main</main>
        <footer>footer</footer>
      </div>
    </div>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2

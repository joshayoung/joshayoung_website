import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Nav = ({ siteTitle }) => (
  <nav
    style={{
      backgroundColor: `green`
    }}
  >
    <ul>

      <Link to="/">Go back to the homepage</Link>
      <li><a href='thoughts'>Thoughts</a></li>
      <li><a href='certs'>Certs</a></li>
      <li><a href='projects'>Projects</a></li>
      <li><a href='classes'>Classes</a></li>
      <li><a href='resume'>Resume</a></li>
      <li><a href='about'>About</a></li>
      <li><a href='snippets'>Snippets</a></li>
      <li><a href='definitions'>Definitions</a></li>
      <li><a href='resources'>Resources</a></li>
    </ul>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

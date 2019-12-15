import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav
    style={{
      backgroundColor: `green`
    }}
  >
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
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

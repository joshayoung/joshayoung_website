import PropTypes from "prop-types"
import React from "react"

const Tags = ({ siteTitle }) => (
  <>
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >Tags
    </header>
    <ul aria-labelledby="tags">
      <li><a href="/tags?Jekyll">Jekyll</a></li>
      <li><a href="/tags?GitHub">GitHub</a></li>
      <li><a href="/tags?Atom">Atom</a></li>
      <li><a href="/tags?Vim">Vim</a></li>
      <li><a href="/tags?Docker">Docker</a></li>
      <li><a href="/tags?VSCode">VSCode</a></li>
      <li><a href="/tags?React">React</a></li>
      <li><a href="/tags?JavaScript">JavaScript</a></li>
      <li><a href="/tags?Laravel">Laravel</a></li>
      <li><a href="/tags?PHP">PHP</a></li>
      <li><a href="/tags?PostgreSQL">PostgreSQL</a></li>
      <li><a href="/tags?Security">Security</a></li>
      <li><a href="/tags?CSP">CSP</a></li>
      <li><a href="/tags?Programming">Programming</a></li>
      <li><a href="/tags?Databases">Databases</a></li>
      <li><a href="/tags?Standards">Standards</a></li>
      <li><a href="/tags?Rails">Rails</a></li>
      <li><a href="/tags?Ruby">Ruby</a></li>
      <li><a href="/tags?MVC">MVC</a></li>
    </ul>
  </>
);

Tags.propTypes = {
  siteTitle: PropTypes.string,
}

Tags.defaultProps = {
  siteTitle: ``,
}

export default Tags;

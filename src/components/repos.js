import PropTypes from "prop-types";
import React from "react";

const Repos = ({ siteTitle }) => (
  <>
    <div>
      <h3>Recently Updated Repos</h3>
      <ul id="github_repos">
        <li>
          <a href="https://github.com/joshayoung/joshayoung_website">joshayoung_website</a>
        </li>
        <li>
          <a href="https://github.com/joshayoung/js-jest-examples">js-jest-examples</a>
        </li>
        <li>
          <a href="https://github.com/joshayoung/josh_website">josh_website</a>
        </li>
      </ul>
    </div>
  </>
)

Repos.propTypes = {
  siteTitle: PropTypes.string,
}

Repos.defaultProps = {
  siteTitle: ``,
}

export default Repos;

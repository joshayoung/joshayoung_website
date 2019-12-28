import React from "react";
import List from "../components/list";

const Repos = () => (
  <List>
    <header>Recently Updated Repos</header>
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
  </List>
)

export default Repos;

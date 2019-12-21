import PropTypes from "prop-types";
import React from "react";

const Glance = ({ siteTitle }) => (
  <section>
    <header>Glance</header>
    <ul>
      <li><a href="/me#books">Books</a></li>
      <li><a href="/me#books_i_recommend">Great Books</a></li>
      <li><a href="https://codepen.io/joshayoung/pens/popular">CodePen</a></li>
      <li><a href="/me#hobbies">Hobbies</a></li>
      <li><a href="https://github.com/joshayoung">GitHub</a></li>
      <li><a href="/quotes">Quotes</a></li>
      <li><a href="https://www.freecodecamp.org/joshayoung">FreeCodeCamp</a></li>
      <li><a href="https://www.linkedin.com/in/joshuayoung1">LinkedIn</a></li>
      <li><a href="/tech-spectrum">Spectrum</a></li>
      <li><a href="/me#podcasts">Podcasts</a></li>
    </ul>
  </section>
);

Glance.propTypes = {
  siteTitle: PropTypes.string,
}

Glance.defaultProps = {
  siteTitle: ``,
}

export default Glance;

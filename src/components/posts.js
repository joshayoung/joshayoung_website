import PropTypes from "prop-types";
import React from "react";

const Posts = ({ siteTitle }) => (
  <section className='list'>
    <header>Latest Posts</header>
    <ul>
      <li>
        <a href="/2018/many-to-many-association/">Many-to-Many Association in Rails</a>
      </li>
      <li>
        <a href="/2018/one-to-many-associations/">One-to-Many Association in Rails</a>
      </li>
      <li>
        <a href="/2018/one-to-many-associations/">All about Rails</a>
      </li>
    </ul>
  </section>
)

Posts.propTypes = {
  siteTitle: PropTypes.string,
}

Posts.defaultProps = {
  siteTitle: ``,
}

export default Posts;
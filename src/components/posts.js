
import PropTypes from "prop-types";
import React from "react";

const Posts = ({ siteTitle }) => (
  <>
    <div>
      <h3>Latest Posts</h3>
      <ul>
        <li>
          <a href="/2018/many-to-many-association/">Many-to-Many Association in Rails</a>
        </li>
        <li>
          <a href="/2018/one-to-many-associations/">One-to-Many Association in Rails</a>
        </li>
      </ul>
    </div>
  </>
)

Posts.propTypes = {
  siteTitle: PropTypes.string,
}

Posts.defaultProps = {
  siteTitle: ``,
}

export default Posts;
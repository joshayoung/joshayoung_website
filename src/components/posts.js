import React from "react";
import List from "../components/list";

const Posts = () => (
  <List>
    <header>Latest Posts</header>
    <ul>
      <li>
        <a href="/many-to-many-association/">Many-to-Many Association in Rails</a>
      </li>
      <li>
        <a href="/one-to-many-associations/">One-to-Many Association in Rails</a>
      </li>
      <li>
        <a href="/one-to-many-associations/">All about Rails</a>
      </li>
    </ul>
  </List>
)

export default Posts;
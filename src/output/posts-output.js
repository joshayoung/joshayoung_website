import React from "react";
import List from "../components/list";
import PostData from "../hooks/post-data";
import { Link } from "gatsby";

export default () => {
  const posts = PostData();

  return (
    <List>
      <header>Latest Posts</header>
      <ul>
        {posts.map(post => (
          <li key={post.path}>
            <Link to={post.path}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </List>
  );
};

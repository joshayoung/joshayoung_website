import React from 'react';
import { Link } from 'gatsby';

const Thought = ({ post }) => (
  <>
    <h3><Link to={post.path}>{post.title}</Link></h3>
    <p>{post.description}</p>
    <div>{post.date}</div>
  </>
);

export default Thought;
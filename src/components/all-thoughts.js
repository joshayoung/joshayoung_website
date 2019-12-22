import React from 'react';
import { Link } from 'gatsby';
import CustomLink from '../pages/custom-link';

const AllThoughts = ({ post }) => (
  <article>
    {/*<pre>{JSON.stringify(post)}</pre>*/}
    <h3><Link to={post.path}>{post.title}</Link></h3>
    <h3>{post.date}</h3>
    <CustomLink to={post.path}>read</CustomLink>
  </article>
);

export default AllThoughts;
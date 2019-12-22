import React from 'react';
import { Link } from 'gatsby';
import CustomLink from '../pages/custom-link';

const AllThoughts = ({ post }) => (
  <article className='box'>
    {/*<pre>{JSON.stringify(post)}</pre>*/}
    <h3><Link to={post.path}>{post.title}</Link></h3>
    <p>{post.description}</p>
    <div>{post.date}</div>
    {/* <CustomLink to={post.path}>read</CustomLink> */}
  </article>
);

export default AllThoughts;
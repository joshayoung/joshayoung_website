import React from "react";
import Layout from "../components/layout";
import listThoughts from "../hooks/list-thoughts";
import AllThoughts from "../components/all-thoughts";

export default () => {
  const posts = listThoughts();
  return (
    <Layout>
      <h1 className='header'>Thoughts</h1>
      {posts.map(post => (
        <AllThoughts key={post.path} post={post} />
      ))}
    </Layout>
  );
};
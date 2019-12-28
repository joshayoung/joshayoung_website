import React from "react";
import Layout from "../components/layout";
import listThoughts from "../hooks/list-thoughts";
import AllThoughts from "../components/all-thoughts";

export default () => {
  const posts = listThoughts();
  return (
    <Layout>
      <SEO title="Thoughts" />
      <h1>Thoughts</h1>
      <p>Here I document concise posts about web development or programming that I am learning or have recently discovered. Many times these entries are very short, as I am not a prolific blogger. However, hopefully something I list here will be helpful to others.</p>
      {posts.map(post => (
        <AllThoughts key={post.path} post={post} />
      ))}
    </Layout>
  );
};
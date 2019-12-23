import React from "react";
import Layout from "../components/layout";
import listThoughts from "../hooks/list-thoughts";
import AllThoughts from "../components/all-thoughts";
import ListTreehouse from "../hooks/list-treehouse";

export default () => {
  const posts = listThoughts();
  const treehouse = ListTreehouse();
  return (
    <Layout>
      <h1 className='header'>Thoughts</h1>
      <article className='introduction'>
        <p>Here I document concise posts about web development or programming that I am learning or have recently discovered. Many times these entries are very short, as I am not a prolific blogger. However, hopefully something I list here will be helpful to others.</p>
      </article>
      {posts.map(post => (
        <AllThoughts key={post.path} post={post} />
      ))}

      {treehouse.map(treehouse => (
        <h3>{treehouse.title}</h3>
      ))}
    </Layout>
  );
};
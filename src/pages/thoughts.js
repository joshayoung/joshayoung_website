import React from "react";
import Layout from "../components/layout";
import ThoughtData from "../hooks/thought-data";
import SEO from "../components/seo";
import AllThoughts from "../components/all-thoughts";

export default () => {
  const thoughts = ThoughtData();
  return (
    <Layout>
      <SEO title="Thoughts" />
      <h1>Thoughts</h1>
      <p>Here I document concise posts about web development or programming that I am learning or have recently discovered. Many times these entries are very short, as I am not a prolific blogger. However, hopefully something I list here will be helpful to others.</p>
      {thoughts.map(thought => (
        <AllThoughts key={thought.path} post={thought} />
      ))}
    </Layout>
  );
};
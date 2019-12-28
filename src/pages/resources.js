import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ListResources from "../hooks/list-resources";
import Resource from "../components/resource";

export default () => {
  const resources = ListResources();
  return (
    <SEO title="Resources" />
    <Layout>
      <SEO title="Resources" />
      <h1>Development Resources</h1>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>
            <a href={"#" + resource.class}>
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
      <p>Here, I will be listing helpful resources, documentation, and tools that I use in my daily web development
      workflow. I will continually update this page as I discover more tools that are beneficial. I have include a list grouped into categories below.</p>
      <ul>
        {resources.map(resource => (
          <Resource key={resource.id} klass={resource.class} title={resource.title} post={resource.data} />
          // <pre>{JSON.stringify(resource)}</pre>
        ))}
      </ul>
    </Layout >
  );
};

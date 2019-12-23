import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ListResources from "../hooks/list-resources";
import Resource from "../components/resource";

export default () => {
  const resources = ListResources();
  return (
    <Layout>
      <SEO title="Resources" />
      <h1 className='header'>Web Development Resources</h1>
      <section>
        <div>
          <article>
            <ul>
              {resources.map(resource => (
                <li key={resource.id}>
                  <a href={"#" + resource.class}>
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <p>Here, I will be listing helpful resources, documentation, and tools that I use in my daily web development
      workflow. I will continually update this page as I discover more tools that are beneficial. I have include a list grouped into categories below.</p>
          </article>
          <article>
            <ul>
              {resources.map(resource => (
                <Resource key={resource.id} klass={resource.class} title={resource.title} post={resource.data} />
                // <pre>{JSON.stringify(resource)}</pre>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </Layout >
  );
};

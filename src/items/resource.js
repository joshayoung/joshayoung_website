import React from "react";

const Resource = ({ klass, title, post }) => (
  <>
    <a id={klass} href="#top">
      <h3>{title}</h3>
    </a>
    {post.map((resource, i) => (
      <div key={i}>
        {resource.display ? <a href={resource.url}>{resource.title}</a> : ""}
      </div>
    ))}
  </>
);

export default Resource;

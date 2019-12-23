import React from 'react';

const Resource = ({ klass, title, post }) => (
  <article className='box'>
    {/* <pre>{JSON.stringify(post)}</pre> */}
    <h3>{title}</h3>
    <a name={klass}></a>
    {post.map((resource, i) => (
      <div key={i}>
        {/* <pre>{JSON.stringify(resource)}</pre> */}
        {resource.display ?
          <a href={resource.url}>{resource.title}</a>
          :
          ''
        }
      </div>
      // <pre>{JSON.stringify(resource)}</pre>
    ))}
  </article>
);

export default Resource;
import React from "react"

export default ({results, repos}) => {
  return (
    <>
      {results ? (
        <ul>
          {repos.map(val => (
            <li key={val.raw_url || val}>
              <div dangerouslySetInnerHTML={{ __html: val.url || val }} />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>loading...</li>
        </ul>
      )}
    </>
  )
}

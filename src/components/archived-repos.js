import React, { useState, useEffect } from "react"

const getData = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data")
  const [results, setResults] = useState(false)

  async function getRepoList() {
    let token = process.env.GATSBY_GITHUB_TOKEN
    const response = await fetch(
      "https://api.github.com/users/joshayoung/repos",
      { headers: { Authorization: "token " + token } }
    )
    const json = await response.json()
    let tags = []
    for (var i = 0; i < json.length; i++) {
      tags.push(json[i].tags_url)
    }
    let tall = []
    let json2
    for (var i = 0; i < tags.length; i++) {
      const response2 = await fetch(tags[i], {
        headers: { Authorization: "token " + token },
      })
      json2 = await response2.json()

      if (json2.length > 0) {
        tall.push(json2[0])
      }
    }
    setRecentlyUpdatedRepos(tall)
    setResults(true)
  }

  useEffect(() => {
    getRepoList()
  }, [])

  return { repos, results }
}

export default () => {
  const { repos, results } = getData()
  return (
    <>
      {/* <pre>{JSON.stringify(repos)}</pre> */}
      {results ? (
        <ul>
          {repos.map(val => (
            <li key={val.commit.sha}>
              <div dangerouslySetInnerHTML={{ __html: val.name }} />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>nothing</li>
        </ul>
      )}
    </>
  )
}

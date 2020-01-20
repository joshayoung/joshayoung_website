import React, { useState, useEffect } from "react"

const getTheTags = async (url) => {
    let token = process.env.GATSBY_GITHUB_TOKEN
      const response2 = await fetch(url, {
        headers: { Authorization: "token " + token },
      })
      return response2.json();
}
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
      tags.push({name: json[i].name, url: json[i].tags_url})
    }
    let tall = []
    let json2
    for (var k = 0; k < tags.length; k++) {
      json2 = await getTheTags(tags[k].url);

      for(var j = 0; j < json2.length; j++) {
        if (json2[j].name === "archived") {
          tall.push(tags[k].name)
          break;
        }
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
            <li key={val}>
              <div dangerouslySetInnerHTML={{ __html: val }} />
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

import React, { useState, useEffect } from "react"
import RepoResults from "./repo-results";

const top = function(data) {
  let all = []
  data.forEach((repo, value) => {
    all.push({
      name: repo.name,
      url: "<a href='" + repo.html_url + "'>" + repo.name + "</a>",
      raw_url: repo.url,
      updated: repo.updated_at,
      language: repo.language,
      created_at: repo.created_at.split("T")[0],
    })
  })
  all.sort(function(a, b) {
    return new Date(b.updated) - new Date(a.updated)
  })
  return all.slice(0, 3)
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
    let t = top(json)
    setRecentlyUpdatedRepos(t)
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
    <RepoResults repos={repos} results={results} />
  )
}

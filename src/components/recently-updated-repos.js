import React, { useState, useEffect } from "react"
import RepoResults from "./repo-results";
import { REPO_URL, top, getData } from "../utilities/api_requests"

const GetStuff = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data")
  const [results, setResults] = useState(false)

  async function getRepoList() {
    const json = await getData(REPO_URL);
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
  const { repos, results } = GetStuff()
  return (
    <RepoResults repos={repos} results={results} />
  )
}

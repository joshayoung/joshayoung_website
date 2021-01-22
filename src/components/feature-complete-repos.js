import React, { useState, useEffect } from "react";
import RepoResults from "../components/repo-results";
import { REPO_URL, getData } from "../utilities/api_requests"

const top = function(data) {
  let all = [];
  return all;
};

const GetStuff = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data");
  const [results, setResults] = useState(false);

  async function getFeatureCompleteList() {
    const data = await getData(REPO_URL);
    let t = top(data);
    setRecentlyUpdatedRepos(t);
    setResults(true);
  }

  useEffect(() => {
    getFeatureCompleteList();
  }, []);

  return { repos, results };
};

export default () => {
  const { repos, results } = GetStuff();
  return <RepoResults repos={repos} results={results} />;
};

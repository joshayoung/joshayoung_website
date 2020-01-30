import React, { useState, useEffect } from "react";
import RepoResults from "../components/repo-results";

const top = function(data) {
  let all = [];
  return all;
};

const getData = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data");
  const [results, setResults] = useState(false);

  async function getFeatureCompleteList() {
    let token = process.env.GATSBY_GITHUB_TOKEN;
    const response = await fetch(
      "https://api.github.com/users/joshayoung/repos",
      { headers: { Authorization: "token " + token } }
    );
    const json = await response.json();
    let t = top(json);
    setRecentlyUpdatedRepos(t);
    setResults(true);
  }

  useEffect(() => {
    getFeatureCompleteList();
  }, []);

  return { repos, results };
};

export default () => {
  const { repos, results } = getData();
  return <RepoResults repos={repos} results={results} />;
};

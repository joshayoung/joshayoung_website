import React, { useState, useEffect } from "react";
import RepoResults from "./repo-results";
import { REPO_URL, featureCompleteRepos, completedTags, tags, getData } from "../utilities/api_requests"

const GetStuff = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data");
  const [results, setResults] = useState(false);

  async function getFeatureCompleteList() {
    const data = await getData(REPO_URL);
    let tagsUrl = tags(data);
    featureCompleteRepos(tagsUrl).then(ar => {
      const results = completedTags(ar);
      setRecentlyUpdatedRepos(results);
      setResults(true);
    })
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

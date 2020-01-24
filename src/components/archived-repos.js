import React, { useState, useEffect } from "react";
import { REPO_URL, tags, archivedRepos, getData, archivedTags } from "../utilities/api_requests"
import RepoResults from "../components/repo-results";

const getTheData = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data");
  const [results, setResults] = useState(false);

  async function getRepoList() {
    const data = await getData(REPO_URL);
    let tagsUrl = tags(data);
    archivedRepos(tagsUrl).then(ar => {
      const results = archivedTags(ar);
      setRecentlyUpdatedRepos(results);
      setResults(true);
    });
  }

  useEffect(() => {
    getRepoList();
  }, []);

  return { repos, results };
};

export default () => {
  const { repos, results } = getTheData();
  return (
    <RepoResults repos={repos} results={results} />
  );
};

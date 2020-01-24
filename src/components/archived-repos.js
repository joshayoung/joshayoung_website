import React, { useState, useEffect } from "react";
import { tags, archivedRepos, REPO_URL, getData, archivedTags } from "../utilities/api_requests"

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
          <li>loading...</li>
        </ul>
      )}
    </>
  );
};

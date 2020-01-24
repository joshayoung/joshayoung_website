import React, { useState, useEffect } from "react";
import { getData } from "../utilities/api_requests"

const repoName = name => {
  return name.zipball_url.split("/")[5];
};

const archivedTags = data => {
  let archived = [];
  data.forEach(tg => {
    let repo = tg.filter(value => value.name === "archived");
    if (repo.length > 0) {
      archived.push(repoName(repo[0]));
    }
  });
  return archived;
};

const tags = data => {
  let allTags = [];
  data.forEach(tag => {
    allTags.push({ name: tag.name, url: tag.tags_url });
  });
  return allTags;
};

const getTheData = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data");
  const [results, setResults] = useState(false);

  async function getRepoList() {
    const data = await getData('https://api.github.com/users/joshayoung/repos');
    let allTags = tags(data);
    let tagsUrl = [];
    allTags.forEach(tag => {
      tagsUrl.push(getData(tag.url));
    });

    let archived_repos = Promise.all(tagsUrl).then(all => {
      let archived = [];
      all.forEach(t => {
        archived.push(t);
      });
      return archived.filter(a => a.length !== 0);
    });

    archived_repos.then(ar => {
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

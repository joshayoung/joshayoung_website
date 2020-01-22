import React, { useState, useEffect } from "react";

const getRepos = async () => {
  let token = process.env.GATSBY_GITHUB_TOKEN;
  const response = await fetch(
    "https://api.github.com/users/joshayoung/repos",
    { headers: { Authorization: "token " + token } }
  );
  return response.json();
};

const getTheTags = async url => {
  let token = process.env.GATSBY_GITHUB_TOKEN;
  const response = await fetch(url, {
    headers: { Authorization: "token " + token },
  });
  return response.json();
};

const archivedTags = (name, data) => {
  let tags = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "archived") {
      tags.push(name);
      continue;
    }
  }
  return tags;
};

const getData = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data");
  const [results, setResults] = useState(false);

  async function getRepoList() {
    const data = await getRepos();
    let tags = [];
    data.forEach(val => {
      tags.push({ name: val.name, url: val.tags_url });
    });
    let archived = [];
    let data_tags;
    for (let i = 0; i < tags.length; i++) {
      data_tags = await getTheTags(tags[i].url);
      let archived_repo = archivedTags(tags[i].name, data_tags);
      if (archived_repo.length > 0) {
        archived.push(archived_repo);
      }
    }
    setRecentlyUpdatedRepos(archived);
    setResults(true);
  }

  useEffect(() => {
    getRepoList();
  }, []);

  return { repos, results };
};

export default () => {
  const { repos, results } = getData();
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

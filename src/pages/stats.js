import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

const getIt = (url) => {
  let token = window.localStorage.getItem('token');
  return fetch(url,
    { headers: { 'Authorization': 'token ' + token } }
  ).then(response => response.json())
    .then(result => {
      return result[0].name;
    })
};

const githubData = async () => {
  const data = await getIt('https://api.github.com/users/joshayoung/repos');
  return data;
};

const Stats = () => {
  const [repos, setRecentlyUpdatedRepos] = useState(0)
  useEffect(() => {
    const data = githubData();
    data.then((res) => {
      setRecentlyUpdatedRepos(res);
    });
  }, []);

  return (
    <Layout>
      <div>Data: {repos}</div>
    </Layout>
  );
}

export default Stats;
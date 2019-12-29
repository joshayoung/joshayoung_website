import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

const getIt = (url) => {
  let token = window.localStorage.getItem('token');
  return fetch(url,
    { headers: { 'Authorization': 'token ' + token } }
  ).then(response => { return response.json() })
};

const Stats = () => {
  const [repos, setRecentlyUpdatedRepos] = useState("no data")
  useEffect(async () => {
    const data = await getIt('https://api.github.com/users/joshayoung/repos');
    setRecentlyUpdatedRepos(data[0].name);
  }, []);

  return (
    <Layout>
      {/* TODO: Create a component here that you can use to loop through the result set */}
      <div>Data: {repos}</div>
    </Layout>
  );
}

export default Stats;
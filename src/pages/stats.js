import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

const getIt = (url) => {

};

const Stats = () => {
  const [repos, setRecentlyUpdatedRepos] = useState(0)
  let token = window.localStorage.getItem('token');
  useEffect(() => {
    fetch('https://api.github.com/users/joshayoung/repos',
      { headers: { 'Authorization': 'token ' + token } }
    ).then(response => response.json())
      .then(result => {
        setRecentlyUpdatedRepos(result[0].name);
      })
  }, []);

  return (
    <Layout>
      <div>Data: {repos}</div>
    </Layout>
  );
}

export default Stats;
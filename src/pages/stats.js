import React from "react";
import Layout from "../components/layout";
import List from "../components/list";

export default () => {
  return (
    <Layout>
      <List>
        <header>Recently Updated Repos</header>
        {/* TODO: Move this API call to the backend: */}
        {/* <RecentlyUpdatedRepos /> */}

        <header>Archived Repos</header>
        {/* TODO: Move this API call to the backend: */}
        {/* <ArchivedRepos /> */}

        <header>Feature Complete Repos</header>
        {/* TODO: Move this API call to the backend: */}
        {/* <FeatureComplete /> */}
      </List>
    </Layout>
  );
};

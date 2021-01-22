import React from "react";
import Layout from "../components/layout";
import RecentlyUpdatedRepos from "../components/recently-updated-repos";
import ArchivedRepos from "../components/archived-repos";
import FeatureComplete from "../components/feature-complete-repos";
import List from "../components/list";

export default () => {
  return (
    <Layout>
      <List>
        <header>Recently Updated Repos</header>
        <RecentlyUpdatedRepos />

        <header>Archived Repos</header>
        {/* <ArchivedRepos /> */}

        <header>Feature Complete Repos</header>
        <FeatureComplete />
      </List>
    </Layout>
  );
};

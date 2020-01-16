import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import TopRepos from "../components/top-repos"
import ArchivedRepos from "../components/archived-repos"
import List from "../components/list"

export default () => {
  return (
    <Layout>
      <List>
        <header>Recently Updated Repos</header>
        <TopRepos />

        <header>Archived Repos</header>
        <ArchivedRepos />
      </List>
    </Layout>
  )
}

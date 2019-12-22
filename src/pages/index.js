import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/intro";
import Stats from "../components/stats";
import Glance from "../components/glance";
import Tags from "../components/tags";

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Glance />
    <Tags />
    <Stats />
  </Layout>
)

export default Index;

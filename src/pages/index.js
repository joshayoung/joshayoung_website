import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/intro";
import Stats from "../components/stats";
import Glance from "../snippets/glance";
import Tags from "../snippets/tags";

const Index = () => (
  <Layout klass='home'>
    <SEO title="Home" />
    <Intro />
    <Glance />
    <Tags />
    <Stats />
  </Layout>
)

export default Index;
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechSpec from "../snippets/tech-spectrum";

const TechSpectrum = () => (
  <Layout klass='tech-spectrum'>
    <SEO title="Tech Spectrum" />
    <h1>Tech Spectrum</h1>
    <p>Here I have outlined my skills and my level of experience with each skillset. I have also outlined the certifications and the classes that correspond to each skill acquired.</p>
    <TechSpec />
  </Layout>
)

export default TechSpectrum;
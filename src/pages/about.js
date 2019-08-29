import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import "../styles/about.scss";

const AboutPage = () => (
  <div className='wrap'>
    <div className='top'>Josh A. Young</div>
    <ul className='nav'>
      <li className='intro'>My name is Josh. I am a Web Developer. Here I write about web development and my current tech projects. Check out my Blog to see what I am writing or my Projects to see what I am building</li>
      <li><a href=''>Thoughts</a></li>
      <li><a href=''>Certs</a></li>
      <li><a href=''>Projects</a></li>
      <li><a href=''>Classes</a></li>
      <li><a href=''>Resume</a></li>
      <li><a href=''>About</a></li>
      <li><a href=''>Snippets</a></li>
      <li><a href=''>Definitions</a></li>
      <li><a href=''>Resources</a></li>
      <li><a href=''>Books</a></li>
      <li><a href=''>Quotes</a></li>
      <li><a href=''>Spectrum</a></li>
    </ul>
  </div>
)
export default AboutPage
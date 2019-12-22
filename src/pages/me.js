import React from "react";
import Layout from "../components/layout";

export default ({ children }) => {
  return (
    <Layout>
      <h1 className='header'>About</h1>
      {children}
      <img width="100" height="100" src='certs/resized/SecurityPlus_Logo_Certified_CE.png' />
    </Layout>
  )
}
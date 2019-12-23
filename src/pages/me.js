import React from "react";
import Layout from "../components/layout";
import ListTreehouse from "../hooks/list-treehouse";

export default ({ children }) => {
  const treehouse = ListTreehouse();
  return (
    <Layout>
      <h1 className='header'>About</h1>
      {children}
      <img width="100" height="100" src='certs/resized/SecurityPlus_Logo_Certified_CE.png' />
      {treehouse.map(treehouse => (
        <h3>{treehouse.title}</h3>
      ))}
    </Layout>
  )
}
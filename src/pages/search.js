import React from "react";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <h1>Search</h1>
      <p>To search this, site type your query in the search box below. If you are not able to find your query, please try the site navigation.</p>
      <form>
        <fieldset>
          <label>Search:</label>
          <input type='text' value=''></input>
        </fieldset>
      </form>
    </Layout>
  );
};

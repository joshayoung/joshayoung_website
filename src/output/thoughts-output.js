import React from "react";
import ThoughtData from "../hooks/thought-data";
import AllThoughts from "../components/all-thoughts";

export default () => {
  const thoughts = ThoughtData();

  return (
    <>
      {thoughts.map(thought => (
        <AllThoughts key={thought.path} post={thought} />
      ))}
    </>
  );
};

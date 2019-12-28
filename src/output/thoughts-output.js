import React from "react";
import ThoughtData from "../hooks/thought-data";
import Thought from "../items/thought";

export default () => {
  const thoughts = ThoughtData();

  return (
    <>
      {thoughts.map(thought => (
        <Thought key={thought.path} post={thought} />
      ))}
    </>
  );
};

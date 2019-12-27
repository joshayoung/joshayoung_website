import PropTypes from "prop-types";
import React from "react";
import ListCodeschool from "../hooks/list-code-school";

export default () => {
  const codeschool = ListCodeschool();

  return (
    <ul>
      <>
        {codeschool.map(codeschool => (
          <li><a href={codeschool.url}>{codeschool.title}</a></li>
        ))}
      </>
    </ul>
  );
};

import PropTypes from "prop-types";
import React from "react";
import CodeSchoolData from "../hooks/code-school-data";

export default () => {
  const codeschool = CodeSchoolData();

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

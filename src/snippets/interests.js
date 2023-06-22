import React from "react";
import Box from "../components/box";
import { css } from "@emotion/react";


const Interests = () => (
  <Box>
    <header>Interests</header>
    <ul
    css={css`
      padding-bottom: 10px;
      border-bottom: 3px solid #3385ff;
      margin-bottom: 50px;
      &:last-child {
        border-bottom: none;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        margin-left: 0;
        li {
          display: inline-block;
          padding: 5px 10px;
          background: rgba(204, 204, 204, 0.4);
          background: #b377005c;
          background: #ffbb33;
          background: #ffbb33a3;
          border: 1px solid #f4f4f4;
          padding: 4px 10px;
          border-radius: 4px;
          margin: 4px;
        }
      }
    `}
    >
      <li>C#</li>
      <li>.NET</li>
      <li>Architecture</li>
      <li>Docker</li>
      <li>Spring MVC</li>
      <li>Java</li>
      <li>APIs</li>
      <li>Spring</li>
      <li>Microservices</li>
      <li>ASP.NET Core</li>
      <li>Design Patterns</li>
      <li>SOLID</li>
      <li>REST</li>
      <li>ASP.NET MVC</li>
    </ul>
  </Box>
);

export default Interests;
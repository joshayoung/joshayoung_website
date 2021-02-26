import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const Intro = () => (
  <section
    className=""
    css={css`
      padding: 20px 0;
      font-size: 30px;
      font-family: "Acme", sans-serif;
      margin-bottom: 50px;
      line-height: 1.7;

      span:not(.dot) {
        background: #3385ff;
        display: inline-block;
        padding: 0 10px;
        font-size: 28px;
        color: #fff;
        a {
          color: #fff;
        }
      }

      .dot {
        color: #3385ff;
        display: inline-block;
        margin-right: 10px;
      }
    `}
  >
    My name is Josh<span className="dot">.</span>I am a Full Stack Software
    Engineer<span className="dot">.</span>
    Here I write about development and my current tech projects
    <span className="dot">.</span>
    Check out my{" "}
    <span>
      <Link to="/thoughts">Blog</Link>
    </span>{" "}
    to see what I am writing or my{" "}
    <Link to="/projects">
      <span>Projects</span>
    </Link>{" "}
    to see what I am building<span className="dot">...</span>
  </section>
);

export default Intro;

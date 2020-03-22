import React, { Component } from "react";
import NavLinks from "./nav-links";
import { css } from '@emotion/core';

const blue = "#3385ff";

class Nav extends Component {

  componentDidMount() {
    let navButton = document.querySelector(".hamburger");
    navButton.addEventListener("click", (e) => { 
      e.preventDefault();
      document.body.classList.toggle("open");
    });

    // document.body.addEventListener("click", (e) => {
    //   if (e.target.tagName === "BUTTON" || 
    //       e.target.tagName === "NAV" ||
    //       !document.body.classList.contains('open')) {
    //       return;
    //   }
    //   document.body.classList.toggle("open");
    // });
  }

  render() {
    return (
      <>
      <nav css={css`
        transform: translateX(-100%);
        transition: transform 0.7s, visibility 0.7s;
        perspective: 1000px;
        position: fixed;
        background: ${blue};
        left: 0;
        visibility: hidden;
        height: 100%;
        top: 0;
        padding-top: 80px;
        width: 150px
      `}
        className="nav">
          <ul css={css`
            transform-origin: left center;
            transform: rotateY(90deg);
            transition: transform 0.7s;
            list-style-type: none;
            position: relative;
            a {
              padding: 10px 7px 10px 3px;
              display: block;
              color: #fff;
              &:hover {
                background: #fff;
                color: #000;
              }
            }
          `}>
            <NavLinks />
          </ul>
      </nav >
      </>
    )
  };
}
export default Nav;
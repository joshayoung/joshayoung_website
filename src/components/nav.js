import React, { Component } from "react";
import NavLinks from "./nav-links";
import { css } from '@emotion/core';

const blue = "#3385ff";

class Nav extends Component {

  componentDidMount() {
    if (document.body.classList.contains('open')) {
      document.body.classList.remove("open");
    }
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
        width: 150px;
        @media (min-width: 700px) { 
          visibility: visible;
          transform: translateX(0);
          position: static;
          width: 130px;
          margin: 90px 10px 0 52px;
          background: none;
        }
      `}
        className="nav">
          <ul css={css`
            transform-origin: left center;
            transform: rotateY(90deg);
            transition: transform 0.7s;
            list-style-type: none;
            position: relative;
            @media (min-width: 700px) { 
              transform: rotateY(0deg);
            }
            a {
              padding: 10px 7px 10px 3px;
              display: block;
              color: #fff;
              &.active {
                background: #fff;
                color: ${blue};
                @media (min-width: 700px) { 
                  background: none;
                }
              }
              @media (min-width: 700px) { 
                text-align: right;
                padding: 10px;
                color: #000;
              }
              &:hover {
                background: #fff;
                color: #000;
                @media (min-width: 700px) { 
                  color: ${blue};
                  background: none;
                }
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
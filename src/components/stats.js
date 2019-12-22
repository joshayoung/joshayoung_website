import PropTypes from "prop-types";
import React from "react";
import Repos from "./repos";
import Posts from "./posts";
import { css } from '@emotion/core';

const Stats = ({ siteTitle }) => (
  <div css={css`
    @media (min-width: 600px) {
      display: flex;
      flex-direction: wrap;
      justify-content: space-between;
    }
  `}>
    <Posts />
    <Repos />
  </div>
)

Stats.propTypes = {
  siteTitle: PropTypes.string,
}

Stats.defaultProps = {
  siteTitle: ``,
}

export default Stats;

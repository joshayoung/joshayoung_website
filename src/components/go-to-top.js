import React, { Component } from 'react';
import { css } from '@emotion/core';

const blue = "#3385ff";

class GoToTop extends Component {
  constructor() {
    super();

    this.state = {
      offScreen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    if (window.pageYOffset > 200) {
      this.setState({ offScreen: true });
    } else {
      this.setState({ offScreen: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <>
        <a
          style={{ position: this.state.offScreen ? 'fixed' : 'relative' }}
          css={css`
        bottom: 0;
        left: 200px;
        display: block;
        background: ${blue};
        padding: 2px 10px;
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
        font-size: 14px;
        color: #fff;
        &:hover {
          background: rgba(204,204,204,0.4);
        }
      `}
          href='#top'>Go To Top</a>
      </>
    );
  };
};


export default GoToTop;
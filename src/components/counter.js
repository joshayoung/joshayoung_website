import React, { useState } from 'react';
import { css } from '@emotion/core';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      css={css`
        background: red;
    `}
      onClick={() => setCount(count + 1)}
    >
      I have been clicked {count} times
    </button>

  );
};

export default Counter;
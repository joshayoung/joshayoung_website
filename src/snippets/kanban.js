import React, { useState } from 'react';

export default () => (
  <dl>
    <dt>Swim Lanes</dt>
    <dd>Rows</dd>
    <dt>WIP</dt>
    <dd>Work In Progress</dd>
    <dt>WIP Limit</dt>
    <dd>The maximum amount of cards allowed in one column on the board</dd>
    <dt>Blocker</dt>
    <dd>Something that is preventing you from moving your card forward</dd>
    <dt>Hidden Work</dt>
    <dd>Something you are working on that is not visible on the Kanban Board</dd>
  </dl>
);
import React, { useState } from 'react';

export default () => (
  <dl>
    <dt>Logging:</dt>
    <dd>`console.log('test string');`</dd>
    <dt>Log Variable as an Object:</dt>
    <dd>`console.dir(paragraph);`</dd>
    <dt>Log an object as a table:</dt>
    <dd>`console.table(all_animals);`</dd>
  </dl>
);
import React from 'react';

export default () => (
  <dl>
    <dt>Split Window Vertically:</dt>
    <dd>`Ctrl-b %`</dd>
    <dt>Open New Window</dt>
    <dd>`Ctrl-b + c`</dd>
    <dt>Previous Window</dt>
    <dd>`Ctrl-b + l`</dd>
    <dt>Navigate Between Windows</dt>
    <dd>`Ctrl-b + 0/1/2,etc`</dd>
    <dt>Split Window Horizontally:</dt>
    <dd>`Ctrl-b "`</dd>
    <dt>Navigate Between Windows:</dt>
    <dd>`Ctrl-b &lt;ARROW KEYS&gt;`</dd>
    <dt>Detach from tmux:</dt>
    <dd>`Ctrl-b + d`</dd>
    <dt>Re-attach to tmux:</dt>
    <dd>`tmux attach -t &lt;SESSION&gt;` (i.e. tmux attach -t 0)</dd>
    <dt>Show running tmux sessions:</dt>
    <dd>`tmux ls`</dd>
    <dt>Rename tmux Session:</dt>
    <dd>`Ctrl-b + $`</dd>
    <dt>Full Screen</dt>
    <dd>`Ctrl-b + z`</dd>
    <dt>Next Window</dt>
    <dd>`Ctrl-b + n`</dd>
    <dt>Previous Window</dt>
    <dd>`Ctrl-b + p`</dd>
    <dt>Open a Specific Session</dt>
    <dd>`Ctrl-b + &lt;number&gt;`</dd>
    <dt>Detach Current Session</dt>
    <dd>`Ctrl-b + d`</dd>
    <dt>Start Session with Name</dt>
    <dd>`tmux new -s [name]`</dd>
    <dt>Close a Session with Name</dt>
    <dd>`tmux kill-session -t [name]`</dd>
    <dt>Rename Session</dt>
    <dd>`tmux rename-session -t 0 [new name]`</dd>
  </dl>
);
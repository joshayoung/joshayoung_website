import React from "react";

export default () => (
  <dl>
    <dt>Split Window Vertically:</dt>
    <dd>
      <code>Ctrl-b %</code>
    </dd>
    <dt>Open New Window</dt>
    <dd>
      <code>Ctrl-b + c</code>
    </dd>
    <dt>Previous Window</dt>
    <dd>
      <code>Ctrl-b + l</code>
    </dd>
    <dt>Navigate Between Windows</dt>
    <dd>
      <code>Ctrl-b + 0/1/2,etc</code>
    </dd>
    <dt>Split Window Horizontally:</dt>
    <dd>
      <code>Ctrl-b "</code>
    </dd>
    <dt>Navigate Between Windows:</dt>
    <dd>
      <code>Ctrl-b &lt;ARROW KEYS&gt;</code>
    </dd>
    <dt>Detach from tmux:</dt>
    <dd>
      <code>Ctrl-b + d</code>
    </dd>
    <dt>Re-attach to tmux:</dt>
    <dd>
      <code>tmux attach -t &lt;SESSION&gt;</code> (i.e. tmux attach -t 0)
    </dd>
    <dt>Show running tmux sessions:</dt>
    <dd>
      <code>tmux ls</code>
    </dd>
    <dt>Rename tmux Session:</dt>
    <dd>
      <code>Ctrl-b + $</code>
    </dd>
    <dt>Full Screen</dt>
    <dd>
      <code>Ctrl-b + z</code>
    </dd>
    <dt>Next Window</dt>
    <dd>
      <code>Ctrl-b + n</code>
    </dd>
    <dt>Previous Window</dt>
    <dd>
      <code>Ctrl-b + p</code>
    </dd>
    <dt>Open a Specific Session</dt>
    <dd>
      <code>Ctrl-b + &lt;number&gt;</code>
    </dd>
    <dt>Detach Current Session</dt>
    <dd>
      <code>Ctrl-b + d</code>
    </dd>
    <dt>Start Session with Name</dt>
    <dd>
      <code>tmux new -s [name]</code>
    </dd>
    <dt>Close a Session with Name</dt>
    <dd>
      <code>tmux kill-session -t [name]</code>
    </dd>
    <dt>Rename Session</dt>
    <dd>
      <code>tmux rename-session -t 0 [new name]</code>
    </dd>
  </dl>
);

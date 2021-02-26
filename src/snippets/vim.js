import React from "react";

export default () => (
  <dl>
    <dt>Remove all folds</dt>
    <dd>zR</dd>
    <dt>Toggle fold inside current indent</dt>
    <dd>za</dd>
    <dt>Find Character Before</dt>
    <dd>
      <code>t}</code>
    </dd>
    <dt>Find Character Before Backwards</dt>
    <dd>
      <code>T{"{"}</code>
    </dd>
    <dt> Change to Found Char Before</dt>
    <dd>
      <code>ct}</code>
    </dd>
    <dt>Find Character</dt>
    <dd>
      <code>f}</code>
    </dd>
    <dt>Find Character Backwards</dt>
    <dd>
      <code>F{"{"}</code>
    </dd>
    <dt>Change to Found Char</dt>
    <dd>
      <code>cf}</code>
    </dd>
    <dt>Re-run the last 'f' or 't' command</dt>
    <dd>
      <code>;</code>
    </dd>
    <dt>Re-run the last 'F' or 'T' command</dt>
    <dd>
      <code>,</code>
    </dd>
    <dt>End of Current Word</dt>
    <dd>
      <code>ea</code>
    </dd>
    <dt>Change Line</dt>
    <dd>
      <code>cc</code>
    </dd>
    <dt>Split Editor</dt>
    <dd>
      <code>:split(:sp) new_file_name</code>
    </dd>
    <dt>Vertical Split Editor</dt>
    <dd>
      <code>:vsplit(:vs)</code> new_file_name
    </dd>
    <dt>Switch Between Splits</dt>
    <dd>
      <code>Ctrl + w</code>
    </dd>
    <dt>Mark Current Line</dt>
    <dd>
      <code>m[a-z]</code> (i.e. <code>ma</code>)
    </dd>
    <dt>Go to Mark "h"</dt>
    <dd>
      <code>'h</code>
    </dd>
    <dt>Show all marks</dt>
    <dd>
      <code>:marks</code>
    </dd>
    <dt>Mark Across Files</dt>
    <dd>
      Use an uppercase mark: <code>m[A-Z]</code>
    </dd>
    <dt>Previous location (insert mode)</dt>
    <dd>
      <code>gi</code>
    </dd>
    <dt>Go to file under cursor</dt>
    <dd>
      <code>gf</code>
    </dd>
    <dt>Open shell from vi</dt>
    <dd>
      <code>:shell</code>
    </dd>
    <dt>Close shell</dt>
    <dd>
      <code>Ctrl + d</code>
    </dd>
    <dt>Open file browser</dt>
    <dd>
      <code>:E</code>
    </dd>
    <dt>Show Registers</dt>
    <dd>
      <code>:reg</code>
    </dd>
    <dt>Paste from # registers</dt>
    <dd>
      <code>"[0-9]p</code> (i.e. <code>0p</code>, <code>"1p</code>, etc.)
    </dd>
    <dt>Yank to register</dt>
    <dd>
      <code>"[a-z]yy</code> (then: <code>"ap</code> to paste)
    </dd>
    <dt>Append to register</dt>
    <dd>
      <code>"[A-Z]yy</code> (then: <code>"Ap</code> to paste)
    </dd>
    <dt>Paste from Clipboard</dt>
    <dd>
      <code>"+p</code>
    </dd>
    <dt>Record Macro</dt>
    <dd>
      <code>q[a-z]</code> (i.e. <code>qm</code> - records to <code>m</code>)
    </dd>
    <dt>Stop Macro Recording</dt>
    <dd>
      <code>q</code>
    </dd>
    <dt>Execute Macro</dt>
    <dd>
      <code>@[a-z]</code> (i.e. <code>@m</code> or <code>20 @m</code> to run 20
      times
    </dd>
    <dt>Increment Number</dt>
    <dd>
      <code>Ctrl + a</code>
    </dd>
    <dt>Search / Replace Globally</dt>
    <dd>
      <code>:%s/searchfor/replacewith/g</code>
    </dd>
    <dt>Search / Replace Current Line</dt>
    <dd>
      <code>:s/searchfor/replacewith/g</code>
    </dd>
    <dt>Search / Replace (confirmation)</dt>
    <dd>
      <code>:%s/searchfor/replacewith/gc</code>
    </dd>
    <dt>High, Middle, Low</dt>
    <dd>
      <code>H, M, L</code>
    </dd>
    <dt>Move up/down</dt>
    <dd>
      <code>Ctrl + U / Ctrl + D</code>
    </dd>
    <dt>Move to line 11</dt>
    <dd>
      <code>11 + G</code>
    </dd>
    <dt>Indent to surroundings</dt>
    <dd>
      <code>==</code>
    </dd>
    <dt>Delete around and within</dt>
    <dd>
      <code>daw / diw</code>
    </dd>
    <dt>Delete inner paragraph</dt>
    <dd>
      <code>dip</code>
    </dd>
    <dt>Indent a paragraph</dt>
    <dd>
      <code>&gt;ip</code>
    </dd>
    <dt>Reverse paragraph indent</dt>
    <dd>
      <code>=ip</code>
    </dd>
    <dt>Change between html tags</dt>
    <dd>
      <code>cit</code>
    </dd>
    <dt>Delete html tag</dt>
    <dd>
      <code>dat</code>
    </dd>
    <dt>Open New Window</dt>
    <dd>
      <code>:new</code> file_name.txt
    </dd>
    <dt>Open Vertical Window</dt>
    <dd>
      <code>:vnew</code> file_name.txt
    </dd>
    <dt>Go to file</dt>
    <dd>
      <code>gf</code>
    </dd>
    <dt>Go Back to prev file</dt>
    <dd>
      <code>Ctrl + o</code>
    </dd>
    <dt>Open New Tab</dt>
    <dd>
      <code>:tabnew</code>
    </dd>
    <dt>Edit File in Tab</dt>
    <dd>
      <code>:tabedit</code> file_name.txt
    </dd>
    <dt>Move forward in tabs</dt>
    <dd>
      <code>gt</code>
    </dd>
    <dt>Move backward in tabs</dt>
    <dd>
      <code>gT</code>
    </dd>
    <dt>Open Visual Block mode</dt>
    <dd>
      <code>Ctrl + V</code>
    </dd>
    <dt>Move to beggining of line</dt>
    <dd>
      <code>0</code>
    </dd>
    <dt>Open NETRW file exporer</dt>
    <dd>
      <code>:e .</code>
    </dd>
    <dt>Open a file at a line number</dt>
    <dd>vim /path/to/file.conf +120</dd>
  </dl>
);

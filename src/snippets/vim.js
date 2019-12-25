import React from 'react';

export default () => (
  <dl>
    <dt>Remove all folds</dt>
    <dd>zR</dd>
    <dt>Toggle fold inside current indent</dt>
    <dd>za</dd>
    <dt>Find Character Before:</dt>
    <dd>`t}`</dd>
    <dt>Change to Found Char Before:</dt>
    <dd>`ct}`</dd>
    <dt>Find Character:</dt>
    <dd>`f}`</dd>
    <dt>Change to Found Char:</dt>
    <dd>`cf}`</dd>
    <dt>Re-run the last 'f' or 't' command</dt>
    <dd>`;`</dd>
    <dt>Re-run the last 'F' or 'T' command</dt>
    <dd>`,`</dd>
    <dt>End of Current Word:</dt>
    <dd>`ea`</dd>
    <dt>Change Line</dt>
    <dd>`cc`</dd>
    <dt>Split Editor:</dt>
    <dd>`:split(:sp)` new_file_name`</dd>
    <dt>Vertical Split Editor:</dt>
    <dd>`:vsplit(:vs)` new_file_name</dd>
    <dt>Switch Between Splits:</dt>
    <dd>`Ctrl + w`</dd>
    <dt>Mark Current Line:</dt>
    <dd>`m[a-z]` (i.e. `ma`)</dd>
    <dt>Go to Mark "h":</dt>
    <dd>`'h`</dd>
    <dt>Show all marks:</dt>
    <dd>`:marks`</dd>
    <dt>Mark Across Files</dt>
    <dd>Use an uppercase mark: `m[A-Z]`</dd>
    <dt>Previous location (insert mode):</dt>
    <dd>`gi`</dd>
    <dt>Go to file under cursor:</dt>
    <dd>`gf`</dd>
    <dt>Open shell from vi:</dt>
    <dd>`:shell`</dd>
    <dt>Close shell:</dt>
    <dd>`Ctrl + d`</dd>
    <dt>Open file browser:</dt>
    <dd>`:E`</dd>
    <dt>Show Registers:</dt>
    <dd>`:reg`</dd>
    <dt>Paste from # registers:</dt>
    <dd>`"[0-9]p` (i.e. `0p`, `"1p`, etc.)</dd>
    <dt>Yank to register:</dt>
    <dd>`"[a-z]yy` (then: `"ap` to paste)</dd>
    <dt>Append to register:</dt>
    <dd>`"[A-Z]yy` (then: `"Ap` to paste)</dd>
    <dt>Paste from Clipboard</dt>
    <dd>`"+p`</dd>
    <dt>Record Macro:</dt>
    <dd>`q[a-z]` (i.e. `qm` - records to `m`)</dd>
    <dt>Stop Macro Recording:</dt>
    <dd>`q`</dd>
    <dt>Execute Macro:</dt>
    <dd>`@[a-z]` (i.e. `@m` or `20 @m` to run 20 times</dd>
    <dt>Increment Number:</dt>
    <dd>`Ctrl + a`</dd>
    <dt>Search / Replace Globally:</dt>
    <dd>`:%s/searchfor/replacewith/g`</dd>
    <dt>Search / Replace Current Line:</dt>
    <dd>`:s/searchfor/replacewith/g`</dd>
    <dt>Search / Replace (confirmation):</dt>
    <dd>`:%s/searchfor/replacewith/gc`</dd>
    <dt>High, Middle, Low</dt>
    <dd>`H, M, L`</dd>
    <dt>Move up/down</dt>
    <dd>`Ctrl + U / Ctrl + D`</dd>
    <dt>Move to line 11</dt>
    <dd>`11 + G`</dd>
    <dt>Indent to surroundings</dt>
    <dd>`==`</dd>
    <dt>Delete around and within:</dt>
    <dd>`daw / diw`</dd>
    <dt>Delete inner paragraph</dt>
    <dd>`dip`</dd>
    <dt>Indent a paragraph</dt>
    <dd>`&gt;ip`</dd>
    <dt>Reverse paragraph indent</dt>
    <dd>`=ip`</dd>
    <dt>Change between html tags</dt>
    <dd>`cit`</dd>
    <dt>Delete html tag</dt>
    <dd>`dat`</dd>
    <dt>Open New Window</dt>
    <dd>`:new` file_name.txt</dd>
    <dt>Open Vertical Window</dt>
    <dd>`:vnew` file_name.txt</dd>
    <dt>Go to file</dt>
    <dd>`gf`</dd>
    <dt>Go Back to prev file</dt>
    <dd>`Ctrl + o`</dd>
    <dt>Open New Tab</dt>
    <dd>`:tabnew`</dd>
    <dt>Edit File in Tab</dt>
    <dd>`:tabedit` file_name.txt</dd>
    <dt>Move forward in tabs</dt>
    <dd>`gt`</dd>
    <dt>Move backward in tabs</dt>
    <dd>`gT`</dd>
    <dt>Open Visual Block mode</dt>
    <dd>`Ctrl + V`</dd>
    <dt>Move to beggining of line</dt>
    <dd>`0`</dd>
    <dt>Open NETRW file exporer</dt>
    <dd>`:e .`</dd>
  </dl>
);
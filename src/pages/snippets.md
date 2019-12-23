import Bash from "../snippets/bash.js";

# Code Snippets

* [Bash](#bash)
* [CSS](#css)
* [Curl](#curl)
* [Dev Tools](#dev_tools)
* [Docker](#docker)
* [HTTP](#http)
* [HTML5](#html5)
* [Firewalld](#firewalld)
* [Gatsby](#gatsby)
* [Git](#git)
* [JavaScript](#javascript)
* [Kanban](#kanban)
* [Laravel](#laravel)
* [Linux](#linux)
* [Arch](#arch)
* [Slackware](#slackware)
* [CentOS/RHEL](#centos-rhel)
* [Ubuntu/Debian](#ubuntu-debian)
* [FreeBSD](#freebsd)
* [Mac](#mac)
* [MySQL](#mysql)
* [Netstat](#netstat)
* [PHP](#php)
* [PostgreSQL](#psql)
* [Python](#python)
* [Rails](#rails)
* [Ruby](#ruby)
* [RubyMine](#rubymine)
* [SCP](#scp)
* [SSH](#ssh)
* [SQLite](#sqlite)
* [Security](#security)
* [SVG](#svg)
* [Security](#security)
* [Testing](#testing)
* [Tmux](#tmux)
* [UFW](#ufw)
* [Vim](#vim)
* [VS Code](#vs_code)
* [Windows](#windows)
* [Yarn](#yarn)
* [ZFS](#zfs)

### <a id="bash"></a>Bash

#### If/Else
```bash
  if [ expression ]
    ...
  then
    ...
  else
    ...
  fi
```

#### Assign Variable (spacing is important)
```bash
  the_var="a string"
  echo $the_var
```

#### Show a process running on a particular port
```bash
  netstat -na | grep -i LISTEN | grep '2000\|3000'
```

### <a id="curl"></a>Curl
#### Get HTTP Response
```bash
  curl -I example.com
```

#### Get Just Response Code
```bash
  curl -s -o /dev/null -w "%{http_code}" example.com
```

#### Curl POST
```bash
curl --data "information=to&send=to the server" http://example.com
```

### <a id="css"></a>CSS

#### Switch to box sizing</h4>
```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

#### Clear Floats
```css
.clearfix:after {
  content: '';
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
```

#### Margin/Padding Shorthand</h4>
```css
//top right bottom left:
margin (or padding): 10px 20px 10px 20px;

//top/bottom left/right:
margin (or padding): 10px 20px;

//top left/right bottom:
margin (or padding): 10px 20px 10px;
```

###------------####


### <a id="dev_tools"></a>Dev Tools

#### Chrome

<dl>
  <dt>Logging:</dt>
  <dd><code>console.log('test string');</code></dd>
  <dt>Log Variable as an Object:</dt>
  <dd><code>console.dir(paragraph);</code></dd>
  <dt>Log an object as a table:</dt>
  <dd><code>console.table(all_animals);</code></dd>
</dl>

### <a id="docker"></a>Docker

<dl>
  <dt>Show containers</dt>
  <dd><code>docker-compose ps</code></dd>
  <dt>Start containers in docker-compose</dt>
  <dd><code>docker-compose up</code></dd>
  <dt>Stop a container</dt>
  <dd><code>docker stop [container name]</code></dd>
  <dt>Start a container</dt>
  <dd><code>docker start [container name]</code></dd>
  <dt>Connect to a running container</dt>
  <dd><code>docker exec -it [container name] /bin/bash</code></dd>
  <dt>Docker compose - bust the cache</dt>
  <dd><code>docker-compose build --no-cache</code></dd>
  <dt>Spin up container</dt>
  <dd><code>docker-compose up</code></dd>
  <dt>Turn off container</dt>
  <dd><code>docker-compose down</code></dd>
  <dt>List running containers</dt>
  <dd><code>docker-compose ps</code></dd>
  <dt>Attach to running container</dt>
  <dd><code>docker exec -it [container name] /bin/bash</code></dd>
</dl>

### <a id="html5"></a>HTML5

#### Unicode/Emojis

You can get the unicode emoji's from this page: <a href='http://unicode.org/emoji/charts/full-emoji-list.html'>emoji list</a>.
All you have to do is remove the 'U+' from the first part of the code and replace it with '&#x'. End the unicode string with a semicolon.
For example, to use the smiley emoji, change it from: U+1F600 to '&amp;#x1F600;'.
To use a unicode character with the css 'before' or 'after' sudo-selector, remove the 'U+' from and replace it with '\'. So for the css ':before' or ':after', it would be '\1F600'. Of course, to use unicode on your site, you have to have the utf8 tag in your site header:

```html
  &lt;meta charset='utf-8' /&gt;
```
[Reference](https://www.w3.org/International/tutorials/tutorial-char-enc)

##### Code Pen
<p data-height="265" data-theme-id="0" data-slug-hash="vrbzGq" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="UTF8" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/vrbzGq/">UTF8</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### HTML5 Doctype
```html
<!DOCTYPE html>
```

#### Tags

* &lt;cite&gt; - cite a source
* &lt;kdb&gt;  - text entered from a keyboard (i.e. `cd`, `pwd`)
* &lt;pre&gt;  - preserves white space in html output
* &lt;var&gt;  - used for outputting a variable in html
* &lt;del&gt;  - show removed text (sometimes styled with strike-through mark)

### <a id="http"></a>HTTP

<dl>
  <dt>200:</dt>
  <dd>Success</dd>
  <dt>301:</dt>
  <dd>Moved</dd>
  <dt>403:</dt>
  <dd>Forbidden</dd>
  <dt>404:</dt>
  <dd>Not Found</dd>
</dl>

### <a id="ufw"></a>UFW

UFW by default will allow all outgoing connections but deny any incoming connections.

```bash
  # Show firewall status/rules:
  ufw status

  # Enable firewall
  ufw enable
```

#### Application Profiles

```bash
#Show all application profiles:
ufw app list

#Show which ports/protocols a rule will enable:
ufw app info 'OpenSSH'
```

#### Set default egress/ingress rules
```bash
#Deny egress and ingress:
ufw default deny outgoing
ufw default deny incoming
```

#### Open Up Ports

```bash
#Allow HTTP Service:
ufw allow http
#or:
ufw allow 80/tcp
#or allow application profile (nginx, apache, etc):
ufw allow 'Nginx HTTP'

#Allow a specific port:
ufw allow 8080/tcp

#Allow a specific IP:
sudo ufw allow from 192.168.3.100

#Limit to one port:
sudo ufw allow from 192.168.3.100 to any port 80

#Allow the whole subnet:
ufw allow from 192.168.3.0/24 to any port 80
```

#### Close Ports/Delete Rules
```bash
#Close port 80
ufw deny 80/tcp

#Deny from specific IP:
ufw deny from 192.168.3.100

#Deny IP and Port:
ufw deny from 192.168.3.100 to any port 80

#Delete HTTP rule:
ufw delete allow www
#or:
ufw delete allow 80/tcp
```

### <a id="firewalld"></a>Firewalld

Firewalld is manipulating iptables behind the scene. Firewalld does have extended features in comparison to just using iptables. In the future iptables will be replaced with nftables. Firewalld will also serve as a font-end for nftables.

#### Default Zones
* block - ingress rejected, egress allowed
* dmz - for DMZ servers
* drop - ingress dropped, egress allowed
* external - use when you have NAT masquerading
* home - other machines trusted
* internal - use when server is a router/gateway machine
* public - other machines untrusted
* trusted - connections accepted and machines trusted
* work - other machines trusted

#### Firewalld Main Commands
```bash
#Show all zones:
firewall-cmd --get-zones

#Show active zones:
firewall-cmd --get-active-zones

#Show default zone:
firewall-cmd --get-default-zone

#Show all services:
firewall-cmd --get-services
```

#### Change Zones/Interfaces

Each network inteface can be assigned to a different zone.
```bash
#Change 'eth0' to 'work' zone:
firewall-cmd --zone=work --change-interface=eth0
```

#### Show Current Settings
```bash
#List current settings on 'public' zone:
sudo firewall-cmd --zone=public --list-all

#Show open ports:
sudo firewall-cmd --zone=public --list-ports
```

#### Open Ports/Services

Without `--permanent`, the firewall rule will take affect but will not persist after a reboot.

```bash
#Open port 80:
firewall-cmd --permanent --zone=public --add-port=80/tcp

#Add FTP Service:
firewall-cmd --permanent --zone=public --add-service=ftp

#Reload the firewall for these to take affect:
firewall-cmd --reload
```

#### Remove Service/Port

```bash
#Remove the open port:
firewall-cmd --zone=public --remove-port=80/tcp

#Remove the service:
firewall-cmd --zone=public --remove-service=ftp

#Add the '--permanent' flag to make the removal permanent:
firewall-cmd --zone=public --remove-port=80/tcp --permanent
firewall-cmd --zone=public --remove-service=ftp --permanent
```

### <a id="gatsby"></a>Gatsby

#### Starting Local Server

```bash
gatsby develop
```

### <a id="git"></a>Git

#### Contributing to an open source project

1. Fork the project on github.
2. Create a feature branch: `git checkout -b "feature-branch-name"`.
3. Commit changes to your feature branch: `git commit -am "commit message"`.
4. Push the feature branch up: `git push origin feature-branch-name`.
5. Creating a PR from this branch will open up a PR in the forked repo.

#### Remove File from Repo, and File System

This will remove the file from your repo, and the filesystem.

```git
git rm file_name
```

#### Remove File from Repo, not File System

This will remove the file from your repo, but not from the file system.
```git
git rm --cached file_name
```

#### Remove Folder from Repo, and File System

This will remove the directory from your repo, and the filesystem.

```git
git rm -rvf file_name
```

#### Remove Folder from Repo, not File System

This will remove the directory from your repo, but not from the file system.

      <pre><code class='git'>
      git rm -r --cached my_folder_name
      </code></pre>
      <h4>Show Contents of Commit</h4>
      <pre><code class='git'>
        git show [commit hash]
      </code></pre>
      <h4>Change Base Branch</h4>
      <pre><code class='git'>
        git rebase --onto new_branch old_branch branch_you_are_moving
      </code></pre>
      <h4>Turn off the pager</h4>
      <p>Add `--no-pager` to a command</p>
      <h4>Restore a Deleted File</h4>
      <pre><code class='git'>
        git checkout [removed commit]^ -— [path to flle]
      </code></pre>
      <h4>Delete Branches</h4>
      <pre><code class='git'>
        #Delete a local branch:
        git branch -d my_local_branch

        # Delete a remote branch:
        git push origin --delete my_remote_branch
      </code></pre>
      <h4>Show which Remote Branch</h4>
      <p>This shows which remote branch you are tracking and how far behind your local version is from the remote.</p>
      <pre><code class='git'>
        git branch -vv
      </code></pre>
      <h4>Push changes, then revert locally</h4>
      <p>This will allow you to push up a feature branch and then revert your local changes to see the diff.</p>
      <pre><code class='git'>
        git push origin my_feature_branch

        #Revert changes so you can see the diff (locally):
        git reset HEAD~
      </code></pre>

      <h4>HEAD</h4>
      <p>HEAD is the most recent commit on your present branch.</p>

      <h4>Checkout Previous Commit</h4>
      <p>This will put you in a detached HEAD state.</p>
      <pre><code class='git'>
        git checkout [hash of previous commit]
      </code></pre>

      <h4>Checkout Remote Branch</h4>
      <pre><code class='git'>
        git fetch origin
        git checkout -b my_branch_name orgin/my_branch_name

        #or:

        git fetch
        git checkout my_branch_name

        #if we have local branch with same name do
        #this to prevent conflicts with the local branch:

        git fetch origin
        git checkout --track origin/my_branch_name
      </code></pre>

      <h4>Git Reset</h4>
      <pre><code class='git'>
        git reset --soft HEAD^3

        "'mixed' is the default if you run `git reset`:
        git reset --mixed HEAD^3

        git reset --hard HEAD^3
      </code></pre>
      <ul>
        <li>--soft (keeps staged changes)</li>
        <li>--mixed (changes present, not staged)</li>
        <li>--hard (does not preserve uncommitted changes)</li>
      </ul>

      <h4>Edit Commit Message</h4>
      <pre><code class='git'>
        git commit --amend
      </code></pre>

      <h4>Revert a file to state at previous commit</h4>
      <pre><code class='git'>
        git checkout -- my_file.txt
      </code></pre>

      <h4>Commit Messages</h4>
      <p>Try to use present tense for your commit message (i.e. "<strong>Add</strong> new class for students" not: "Added new class for students")</p>
      <pre><code class='git'>
        git commit -m "Correct site map"
      </code></pre>
      <h4>Pick Files to Stash</h4>
      <pre><code class='git'>
        git stash -p
      </code></pre>
      <h4>Show File in Stash</h4>
      <pre><code class='git'>
        git stash show stash@{0}
      </code></pre>
      <h4>Checkout a file that is stashed</h4>
      <pre><code class='git'>
        git checkout stash@{0} -- path/to/file
      </code></pre>
      <h4>Revert Uncommitted Changes</h4>
      <p>Leaving out the `stash@{2} variable below will run the stash command on top stash on the stack.</p>
      <pre><code class='git'>
        git stash apply stash@{1}
        git stash drop stash@{2}
      </code></pre>
      <h4>Retrieve a stashed file</h4>
      <pre><code class='git'>
        git checkout [name of stash] -- [filename]
      </code></pre>
      <h4>Stash all files (including files in .gitignore)</h4>
      <pre><code class='git'>
        git stash --all
      </code></pre>
      <h4>Stash tracked and untracked files</h4>
      <pre><code class='git'>
        git stash save --include-untracked
      </code></pre>
      <h4>Revert One File</h4>
      <pre><code class='git'>
        git checkout -- path/to/file.txt
      </code></pre>
      <h4>Show Files in Commit</h4>
      <pre><code class='git'>
        git diff-tree --no-commit-id --name-only -r [commit hash]
      </code></pre>
      <h4>Show Diff in Staged Files</h4>
      <pre><code class='git'>
        git diff --staged
      </code></pre>
      <h4>Rename a Local Branch</h4>
      <pre><code class='git'>
        git branch -m &lt;oldname&gt; &lt;newname&gt;
      </code></pre>
      <h4>Move Remote PR Branch Locally</h4>
      <pre><code class='git'>
        git fetch origin pull/ID/head:BRANCHNAME
      </code></pre>
      <h4>Saves Current Changes with Stash</h4>
      <pre><code class='git'>
        git stash
        or:
        git stash save "Name for the stash"
      </code></pre>
      <h4>Files in stash</h4>
      <pre><code class='git'>
        git stash list --stat
      </code></pre>
      <h4>Show files in stash</h4>
      <pre><code class='git'>
        git stash show stash@{2}
      </code></pre>
      <h4>Remove all stashes</h4>
      <pre><code class='git'>
        git stash clear
      </code></pre>
      <h4>Restores Most Recently Stashed Changes</h4>
      <p>This command will run `git stash apply` and then `git stash drop`.</p>
      <pre><code class='git'>
        git stash pop
      </code></pre>
      <h4>List Stashes</h4>
      <pre><code class='git'>
        git stash list
      </code></pre>
      <h4>Restore Specific Stash</h4>
      <pre><code class='git'>
        git stash pop stash@{3}
      </code></pre>
      <h4>Create and switch to branch</h4>
      <pre><code class='git'>
        git checkout -b new_branch_name
      </code></pre>
      <h4>Show Remote Branches</h4>
      <pre><code class='git'>
        git branch -r
      </code></pre>
      <h4>Delete local branch</h4>
      <pre><code class='git'>
        git branch -d local_branch_name
      </code></pre>
      <h4>Git Tags</h4>
      <pre><code class='git'>
        #show all tags
        git tag
        #checks out the code with this tag
        git checkout [name of tag]
        #adds a tag
        git tag -a [tag name] -m tag description]
        #pushes tags
        git push --tags
      </code></pre>
      <h4>Show Diffs</h4>
      <pre><code class='git'>
        git diff HEAD^ (parent)
        git diff HEAD^^ (grandparent)
        git diff HEAD~6 (six commits ago)
      </code></pre>
      <h4>Compare Commits</h4>
      <pre><code class='git'>
        git diff HEAD^..HEAD
        git diff 58786f..98f7f0
        git diff master another_branch
      </code></pre>
      <h4>Stop tracking in Repo</h4>
      <pre><code class='git'>
        git rm --cached errors.txt
      </code></pre>
      <h4 markdown='1'>Remove one file from `git add`</h4>
      <pre><code class='git'>
        git reset HEAD &lt;file&gt;
      </code></pre>
      <h4 markdown='1'>Remove files added with `git add .`</h4>
      <pre><code class='git'>
        git reset
      </code></pre>
      <h4>Restore a deleted file</h4>
      <pre><code class='git'>
        #First find the hash:
        git reflog
        git log --walk-reflogs (more detail)

        #Then:
        git reset --hard 7980f
        #or:
        git reset --hard HEAD@{1}

        #Create a new branch with reflog hash:
        git branch [new branch name] 890fs4
        or:
        git branch [new branch name] HEAD@{1}
      </code></pre>
      <h4>Clone a local repo as a backup</h4>
      <pre><code class='git'>
        git clone local_repo local_repo_backup
      </code></pre>
      <h4>Rewrite History</h4>
      <p>Once a file is added to git (after the commit) it is permanently in the repo. The only way to remove it is to rewrite history. However, do this with extreme care! Make a backup of your code first with `clone`.</p>
      <pre><code class='git'>
        git filter-branch --tree-filter 'rm -f old_file.sh -- --all'

        #or you can just remove the file from the repo:
        git filter-branch --index-filter 'git rm --cached --ignore-unmatch old_file.sh'

        #Sometimes when you re-write you will get empty commits, to delete these do:
        git filter-branch -f --prune-empty -- --all
      </code></pre>
      <h4>Commit Order Differences</h4>
      <p>Order from top to bottom:</p>
      <pre><code class='git'>
        git log (newest to oldest)
        git rebase -i HEAD~3 (oldest to newest)
      </code></pre>
      <h4>Roll back previous commit (preserving file changes)</h4>
      <pre><code class='git'>
        git reset --soft HEAD~1
        or
        git reset --soft HEAD^
      </code></pre>
      <h4>Cherry Pick</h4>
      <pre><code class='git'>
        git cherry-pick 97589f

        #Edit Commit:
        git cherry-pick --edit 987df0

        #Combine two commits:
        git cherry-pick --no-commit 9876f 78979f
        git commit -m "Combine two commits"
      </code></pre>
      <h4>Add file to last commit</h4>
      <pre><code class='git'>
        git add newfile.sh
        git commit --amend -m "Add file to repo"
        or:
        git commit --amend --no-edit
      </code></pre>
      <h4>Roll back previous commit (discarding file changes)</h4>
      <pre><code class='git'>
        git reset --hard HEAD~1
        #or:
        git reset --hard HEAD^
        #or the two previous  commits:
        git reset --hard HEAD^^
      </code></pre>

      <h4>Add Remote</h4>
      <pre><code class='git'>
        git push -u origin master
        git push -u [the name] [the branch]
        #After using '-u', you can use use `git push` next time:
        git push
      </code></pre>

      <h4>Revert a Commit</h4>
      <pre><code class='git'>
        git revert [the commit hash you want to revert]
      </code></pre>

      <h4>How Git Pull Works</h4>
      <p>When you run `git pull`, you are actually performing a series of commands:</p>
      <ul>
        <li>Updates the local origin/master branch by fetching updates from the origin with: `git fetch`.</li>
        <li>Then the newly updated local origin/master is merged into the local master with: `git merge origin/master`.</li>
      </ul>
      <p>Therefore, just running a `git fetch` will pull down all of the updated code from the origin, but it will not merge any of this with the local master.</p>
      <h4>Rebase (run from feature branch)</h4>
      <pre><code class='git'>
        git rebase master
      </code></pre>
      <h4>Interactive Rebase (the last 4 commits)</h4>
      <p>Using 'squash' will combine this commit in with the previous commit.</p>
      <pre><code class='git'>
        git rebase -i HEAD~4
      </code></pre>
    </article>

    <article>
      <a name='javascript'></a>
      <h3>JavaScript</h3>
      <h4>Capitalize Function</h4>
      <pre>
      <code>
        var cap = function(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
      </code>
      </pre>
      <h4>Destructuring</h4>
      <pre>
        <code>
          //Object Destructuring:
          let foods = {
            vegetable: 'spinach',
            fruit: 'apple',
            nut: 'almond',
          };
          const { vegetable, fruit } = foods;

          //Array Destructuring:
          let dirty_dozen = [ 'Strawberries', 'Spinach', 'Nectarines', 'Apples',
                              'Peaches', 'Pears', 'Cherries', 'Grapes', 'Celery',
                              'Tomatoes', 'Sweet bell peppers', 'Potatoes' ];

          const [ one_item ] = dirty_dozen;

        </code>
      </pre>

      <h4>Only display content when JavaScript is enabled</h4>
      <pre>
        <code class='javascript'>
          document.getElementsByTagName('body')[0].className += ' js';
        </code>
        <code class='css'>
          /* Only set when JavaScript is enabled in browser: */
          body.js .only-js {
            border: 1px solid #a0a0a0;
            display: block;
            ...
          }
        </code>
      </pre>

      <h4>ES2015 Function Syntax</h4>
      <pre>
        <code class='javascript'>
          const output_log = () => { alert('This is an example.'); };
        </code>
        <code class='javascript'>
          const add_nums = (x, y) => { return x + y };
        </code>
      </pre>

      <h4>Detect Keyboard Input</h4>
      <p data-height="265" data-theme-id="dark" data-slug-hash="vZjKVr" data-default-tab="css,result" data-user="joshayoung" data-embed-version="2" data-pen-title="Detect Keyboard Input" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/vZjKVr/">Detect Keyboard Input</a> by Josh (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

      <h4>Basic Class Structure</h4>
      <pre><code class='javascript'>
        var Shape = function(sides) {
          this.sides = sides;
        }

        Shape.prototype.area = function() {
          calculate ...
        }

        var square = new Shape(4);
      </code></pre>
      <h4>Immediately Invoked Function Expression (IIFE)</h4>
      <pre><code class='javascript'>
        (function() {
          ...executed immediately
        })();
      </code></pre>
      <h4>String Object vs Literal</h4>
      <p>A string literal is immutable.</p>
      <pre><code class='javascript'>
        //String Object:
        typeof new String(); //'object'
        var str = new String('Hello');
        str.x = 'World';
        console.log(str.x); //Outputs 'World'

        //String Literal:
        typeof ''; //'string'
      </code></pre>
    </article>

    <article>
      <a name='laravel'></a>
      <h3>Laravel</h3>
      <h4>Basic Migration</h4>
      <pre><code class='bash'>
        php artisan make:migration the_users_table --create=users
      </code></pre>
      <h4>Refresh Auto Load Files</h4>
      <pre><code class='bash'>
        composer dump-autoload
      </code></pre>
      <h4>Run the Migrations</h4>
      <pre><code class='bash'>
        php artisan migrate
      </code></pre>
      <h4>Open Laravel Shell</h4>
      <pre><code class='bash'>
        php artisan tinker
      </code></pre>
      <h4>Create the Model along with the Migration</h4>
      <pre><code class='bash'>
        php artisan make:model User -m
      </code></pre>
      <h4>Create Controller</h4>
      <pre><code class='bash'>
        php artisan make:controller UserController
      </code></pre>
      <h4>Create Model, Controller, and Migration</h4>
      <pre><code class='bash'>
        php artisan make:model User -mc
      </code></pre>
      <h4>Create Resoureful Controller</h4>
      <pre><code class='bash'>
        php artisan make:controller UsersController -r
      </code></pre>
    </article>

    <article>
      <a name='freebsd'></a>
      <h3>FreeBSD</h3>
      <h4>Edit Hostname</h4>
      <pre><code class='bash'>
        #Edit:
        vi /etc/rc.conf

        #Rename references to old hostname:
        vi /etc/hosts

        #Set the hostname
        hostname your-new-hostname

        reboot
      </code></pre>

      <h4>Shutdown Server</h4>
      <pre><code>
        poweroff
        #or
        shutdown -p now
      </code></pre>
      <h4>Show Version</h4>
      <pre><code>
        freebsd-version
      </code></pre>

      <h4>Update OS</h4>
      <pre><code>
        freebsd-update fetch
        freebsd-update install
      </code></pre>

      <h4>Ports</h4>
      <p>Ports are groups of 'make' files that allow software to be installed from source. They can be managed by 'portsnap'.</p>

      <h4>Packages</h4>
      <p>These packages are pre-compiled. They are similar to .deb or .rpm packages on Debian and RHEL respectively.</p>
      <pre><code>
        #Package Info:
        pkg info

        #Install package:
        pkg install package_name

        #Update:
        pkg update

        #Upgrade:
        pkg upgrade

        #Uninstall package:
        pkg remove package_name
      </code></pre>
    </article>

    <article>
    <a name='slackware'></a>
    <h3>Slackware</h3>
      <h4>Slackware Linux Commands</h4>
      <p>Use slackpkg to keep system updated.</p>
      <pre><code>
        #Download slackpkg .tar.gz file with wget
        wget https://slackpkg.org/stable/slackpkg-2.60-noarch-1.tgz

        #Install slackpkg with 'installpkg'
        installpkg slackpkg-2.60-noarch-1.tgz

        #Uncomment and select a mirror:
        vi /etc/slackpkg/mirrors

        #Initialize slackpkg:
        slackpkg update

        #Install package
        slackpkg install package_name

        #Update to the latest slackpkg packages:
        slackpkg update
        slackpkg upgrade-all
      </code></pre>
    </article>

    <article>
      <a name='ubuntu-debian'></a>
      <h3>Ubuntu/Debian</h3>
      <p markdown='1' class='no-mb'>Add or edit the lines below in this file `/etc/network/interfaces`.</p>
      <pre><code>
        ...
        auto eth0
        iface eth0 inet static
        address 192.168.3.100
        netmask 255.255.255.0
        gateway 192.168.3.1
        broadcast 192.168.3.255
        dns-nameservers 192.168.3.1
        ...
      </code></pre>
      <h4>Show Ubuntu Version</h4>
      <pre><code class='bash'>
        lsb_release -a
        #or:
        cat /etc/*release
      </code></pre>
    </article>

    <article>
      <a name='centos-rhel'></a>
      <h3>CentOS/RHEL</h3>

      <h4>Change Hostname</h4>
      <pre><code class='bash'>
        hostnamectl set-hostname my-new-hostname
      </code></pre>

      <h4>Show Version</h4>
      <pre><code class='bash'>
        cat /etc/*release
      </code></pre>

      <h4>Add Static IP</h4>
      <p markdown='1' class='no-mb'>Add modify the entries below within: `/etc/sysconfig/network-scripts/ifcfg-eth0` (change IP addresses according to your network). The name for your network connection could differ from `ifcfg-eth0`.</p>
      <pre><code class='bash'>
        ...
        DEVICE="eth0"
        BOOTPROTO="static"
        IPADDR="192.168.3.100"
        NETMASK="255.255.255.0"
        GATEWAY="192.168.3.1"
        DNS1="192.168.3.1"
        DNS2="192.168.3.2"
        ONBOOT="yes"
        ...
      </code></pre>
    </article>

    <article>
    <a name='arch'></a>
    <h3>Arch</h3>
      <h4>Pacman Commands</h4>
      <pre><code>
        #Sync and Update:
        pacman -Syu

        #Install a package:
        pacman -S package_name

        #Remove a package:
        pacman -R package_name
      </code></pre>

      <h4>Show Version</h4>
      <pre><code>
        lsb_release -a
      </code></pre>
    </article>

    <article>
      <a name='linux'></a>
      <h3>Linux</h3>

      <h4>Init Systems</h4>
      <h5>SystemD</h5>
      <p>Systemd is managed my 'systemctl'. To start sshd, we would run: <code>systemctl start sshd</code>.</p>

      <h5>Upstart</h5>
      <p>Upstart is managed by 'initctl'. To start sshd we would run: <code>initctl start sshd</code>. Upstart was invented as a replace for System V by Ubuntu.</p>

      <h5>System V (SysV)</h5>
      <p>To start sshd, we would run: '/etc/init.d/ssh start'. This was primarily used by older versions of Linux.</p>

      <h5>BSD Init</h5>
      <p>The BSD based init system is configured under /etc/rc.conf. To start sshd, we would run: '/etc/rc.d/sshd start'. BSD and Slackware use the BSD init system</p>

      <h4>Linux partition/format with Parted</h4>
      <pre><code class='bash'>
        parted /dev/sdb # Open device with gparted:
        print # Print device info:
        print free # Show free space
        help mklabel # Print available label types:
        mklabel msdos # 'msdos' good option, select 'gpt' for uefi support
        help mkpart # Partitioning help:
        mkpart # Start partitioning:

        # You will usually select 'primary' for the partition type.

        # Select filesystem type, examples:
        # ext2, ext3, ext4, ntfs, exfat, fat32

        # Start/End need adjustment if not partitioning whole drive:
        # Start partition from '2048s'
        # End on '-1s'

        quit # Exit:

        # Format your partition with 'mkfs', examples:
        mkfs.ext2 /dev/sdb1
        mkfs.ext3 /dev/sdb1
        mkfs.ext4 /dev/sdb1
        mkfs.vfat /dev/sdb1
        mkfs.ntfs /dev/sdb1

        # Use '-L' to add a label:
        mkfs.ext4 -L mydrive /dev/sdb1

        eject /dev/sdb1 # Eject partition:
      </code></pre>

      <h4>Show Directory Size</h4>
      <pre><code class='bash'>
        du -sh directory_path
      </code></pre>

      <h4>SystemD</h4>
      <pre><code class='bash'>
        #'enable' will create a symbolic link so that the service starts on reboot
        #'disable' will remove the symbolic link
        #'is-active' will tell you if the service is running
        #'is-enable' will tell you if it starts on boot
        systemctl [status, enable, disable, is-active, is-enabled start, restart, reload, stop] application.service
      </code></pre>

      <h4>Change Username</h4>
      <p>If you want to switch user 'joe' to 'sally', below are the steps:</p>
      <pre><code class='bash'>
        usermod -l sally joe

        #Verify that the new user exists and the old one does not:
        id sally
        id joe

        #Swap out the new user's group:
        groupmod -n sally joe

        #Swap the home directory:
        usermod -d /home/sally -m sally

        #If the above command does not work, delete the old dir and re-create it:
        rm -rvf /home/joe
        mkhomedir_helper sally

        #If you search these two files, you should not see the 'joe' user/group:
        cat /etc/group | grep joe
        cat /etc/passwd | grep joe

      </code></pre>

      <h4>Rsync</h4>
      <pre><code class='bash'>
        rsync -avz --delete /original/folder/location /new/folder/location
      </code></pre>

      <h4>Reload Bash Config</h4>
      <pre><code class='bash'>
        source .bashrc
      </code></pre>

      <h4>Check Drive for Errors</h4>
      <pre><code class='bash'>
        #Health Summary:
        smartctl -H /dev/sdb
        #Time required to run HDD Test:
        smartctl -c /dev/sdb

        #Run Short Test:
        smartctl -t short /dev/sdb

        #Run Long Test:
        smartctl -t long /dev/sdb

        #Print Test Results Summary:
        smartctl -l selftest /dev/sdb

        #Print Details of Latest Test:
        smartctl -a /dev/sdb
      </code></pre>

      <h4>Check Drive for Bad Blocks</h4>
      <pre><code class='bash'>
        #Test for bad block:
        badblocks -vs /dev/sdb > badblocks_results.txt
      </code></pre>

      <h4>Correct Bad Blocks</h4>
      <pre><code class='bash'>
        #ext(2/3/4) filesystem:
        e2fsck -l badblocks_results.txt /dev/sdb

        #other filesystems:
        fsck -l badblocks_results.txt /dev/sdb
      </code></pre>

      <h4 markdown='1'>Show Security Settings with `ls`</h4>
      <pre><code class='bash'>
        ls -Z
      </code></pre>
      <h4 markdown='1'>Crontab</h4>
      <pre><code class='bash'>
        *  *  *  *  *         command
        -  -  -  -  -
        |  |  |  |  |
        |  |  |  |  +---------------------- day of week (0 - 6) (0 - Sunday)
        |  |  |  +--------------------- month (1 - 12)
        |  |  +------------------- day of month (1 - 31)
        |  +------------- hour (0 - 23)
        +------------ minute (0 - 59)
      </code></pre>

      <h4 markdown='1'>Write ISO/IMG to Disk or USB</h4>
      <p>The command below could also be executed with 'bs=4M'.</p>
      <pre><code class='bash'>
        fdisk -l
        umount /dev/sdb
        dd if=/path/to/iso/or/img of=/dev/sdb bs=1M status=progress && sync
        eject /dev/sdb
      </code></pre>

      <h4 markdown='1'>Find Linux Version</h4>
      <h5>Kernel:</h5>
      <pre><code class='bash'>
        uname -mrs
      </code></pre>
      <h5>Distribution:</h5>
      <pre><code class='bash'>
        cat /etc/*-release
      </code></pre>
      <h4>Prevent Command from Being Recorded in Terminal History</h4>
      <pre><code class='bash'>
        &lt;space&gt; command
      </code></pre>
      <h4>Logged In User History (last 10)</h4>
      <pre><code class='bash'>
        last -10
      </code></pre>
      <h4>Wipe HDD with 'dd' Command</h4>
      <pre><code class='bash'>
        #With Zeros:
        dd if=/dev/zero of=/dev/sdb bs=1M status=progress && sync

        #With Random Data:
        dd if=/dev/urandom of=/dev/sdb bs=1M status=progress && sync
      </code></pre>
      <h4>Terminal Calculator</h4>
      <pre><code class='bash'>
        bc -l
      </code></pre>
      <h4>System Uptime</h4>
      <pre><code class='bash'>
        uptime
      </code></pre>
      <h4>Clear Terminal</h4>
      <pre><code class='bash'>
        CTRL + l
      </code></pre>
      <h4>Extract a .tar File</h4>
      <pre><code class='bash'>
        tar -xvf file.tar
      </code></pre>
      <h4>Extract a .tar.gz File</h4>
      <pre><code class='bash'>
        tar -xzvf file.tar.gz
      </code></pre>
      <h4>Extract a .tar.bz2 File</h4>
      <pre><code class='bash'>
        tar -xjvf file.tar.bz2
      </code></pre>
      <h4>Finding a File</h4>
      <pre><code class='bash'>
        find / -name [file name you are searching] 2> /dev/null
      </code></pre>
      <h4>Bring Job Into the Foreground</h4>
      <pre><code class='bash'>
        fg
      </code></pre>
      <h4>Pause Job</h4>
      <pre><code class='bash'>
        Ctrl + Z
      </code></pre>
      <h4>Resume Paused Job in Background</h4>
      <pre><code class='bash'>
        bg
      </code></pre>
      <h4>Continue Execution after Shell Exit</h4>
      <pre><code class='bash'>
        nohup ./script.sh &
      </code></pre>
      <h4>List Background Jobs</h4>
      <pre><code class='bash'>
        jobs
      </code></pre>
      <h4>Start Program in Background</h4>
      <pre><code class='bash'>
        ./script.sh &
      </code></pre>
      <h4>Direct All Output to Log File</h4>
      <pre><code class='bash'>
        ./script.sh 1> ~/tmp/log.txt 2> ~/tmp/log.txt &
      </code></pre>
      <h4>Direct All Output to Null</h4>
      <pre><code class='bash'>
        ./script.sh 1> /dev/null 2> /dev/null &
      </code></pre>
      <h4>Run 256 Checksum</h4>
      <pre><code class='bash'>
        sha256sum /the/path/to/file.iso
      </code></pre>
    </article>

    <article>
      <a name='mac'></a>
      <h3>Mac</h3>
      <h4>Run 256 Checksum</h4>
      <pre><code class='bash'>
        shasum -a 256 /the/path/to/file.iso
      </code></pre>
      <h4>Change Time Machine Backup Frequency</h4>
      <p>The interval is set in seconds.</p>
      <pre><code class='bash'>
        defaults write /System/Library/Launch Daemons/com.apple.backupd-auto StartInterval -int 1800
      </code></pre>
      <h4>Find IP</h4>
      <pre><code class='bash'>
        ifconfig |  grep -oE "\w* \b([0-9]{1,3}\.){3}[0-9]{1,3}\b"
      </code></pre>
      <h4>Flush DNS</h4>
      <pre><code class='bash'>
        killall -HUP mDNSResponder
      </code></pre>
      <h4 markdown='1'>Write ISO/IMG to Disk or USB</h4>
      <p>The command below could also be executed with 'bs=4m'.</p>
      <pre><code class='bash'>
        diskutil list
        umount /dev/disk2
        dd if=/path/to/iso/or/img/file of=/dev/disk2 bs=1m && sync
        diskutil eject /dev/disk2
      </code></pre>
    </article>

    <article>
      <a name='mysql'></a>
      <h3>MySQL</h3>
      <h5>Connect to Database</h5>
      <pre><code class='bash'>
        mysql -u [username] -p [password] -h [hostname]
      </code></pre>
    </article>

    <article>
      <a name='netstat'></a>
      <h3>Netstat</h3>
      <h4>Find Listening Port (Bash)</h4>
      <pre><code class='bash'>
        netstat -nao | find "80"
      </code></pre>
      <h4>Find Listening Port (Windows)</h4>
      <pre><code class='bash'>
        netstat -nao | findstr "0.0.80"
      </code></pre>
    </article>

    <article>
      <a name='mysql'></a>
      <h3>MySQL</h3>
      <h5>Connect to Database</h5>
      <pre><code class='bash'>
        mysql -u [username] -p [password] -h [hostname]
      </code></pre>
    </article>

    <article>
      <a name='psql'></a>
      <h3>PostGresql</h3>
      <div class='code'>
        <dl>
          <dt>Connect to Database</dt>
          <dd><code>\c DATABASE_NAME</code></dd>
          <dt>List Databases</dt>
          <dd><code>\l</code></dd>
          <dt>Tables in database:</dt>
          <dd><code>\dt</code></dd>
          <dt>Describe Table</dt>
          <dd><code>\dt+</code></dd>
          <dt>Leave SQL Server</dt>
          <dd><code>\q</code></dd>
          <dt>Connect to Postgres</dt>
          <dd><code>psql postgres</code></dd>
          <dt>Create User</dt>
          <dd><code>CREATE USER myuser WITH PASSWORD 'my password';</code></dd>
          <dt>Create Role</dt>
          <dd><code>CREATE ROLE myuser WITH LOGIN PASSWORD 'my password';</code></dd>
          <dt>Alter Role</dt>
          <dd><code>ALTER USER myuser WITH CREATEDB;</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='kanban'></a>
      <h3>Kanban</h3>
      <div class='code'>
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
      </div>
    </article>

    <article>
      <a name='python'></a>
      <h3>Python</h3>
      <h4>Start Simple Server</h4>
      <pre><code class='bash'>
        python -m SimpleHTTPServer
      </code></pre>

      <h4>Start Simple Server with Python 3</h4>
      <pre><code class='bash'>
        python -m http.server
      </code></pre>
    </article>

    <article>
      <a name='rails'></a>
      <h3>Rails</h3>

      <h4>Inheriting Directly from ActionController::Base</h4>
      <p>Inheriting directly from: "ActionController::Base" instead of: "ApplicationController" will circumvent any code in your application_controller.rb file. Essentially it is like "skip running anything in the application_controller.rb file". "ApplicationController" inherits from "ActionController::Base".</p>

      <h4>Output image path from console</h4>
      <pre><code class='bash'>
        ActionController::Base.helpers.asset_path('image.jpg')

        #Or:
        include ActionView::Helpers::AssetUrlHelper
        asset_path('image.jpg')
      </code></pre>
      <h4>Open Rails Database Console</h4>
      <pre><code class='bash'>
        rails dbconsole
      </code></pre>
      <h4>Clear Test Log File</h4>
      <pre><code class='bash'>
        rails log:clear LOGS=test
      </code></pre>
      <h4>Rails Controller Methods Are Typically Ordered</h4>
      <ol>
        <li>index</li>
        <li>show</li>
        <li>new</li>
        <li>edit</li>
        <li>create</li>
        <li>update</li>
        <li>destroy</li>
      </ol>
      <h4>Rollback in Steps</h4>
      <pre><code class='bash'>
        rails db:rollback STEP=1
      </code></pre>
      <h4>Show Migration Status</h4>
      <pre><code class='bash'>
        rails db:migrate:status
      </code></pre>
      <h4>Run Migrations on Test Database</h4>
      <pre><code class='bash'>
        bin/rails db:migrate RAILS_ENV=test
      </code></pre>
      <h4>Rails CRUD forms with no form plugin</h4>
      <a href='https://github.com/joshayoung/rails-basic-forms'>github.com/joshayoung/rails-basic-forms</a>
      <h4>Start Local Server</h4>
      <pre><code class='bash'>
        rails server (rails s)
      </code></pre>
      <h4>Start Local Server on any IP</h4>
      <pre><code class='bash'>
        rails s -b 0.0.0.0
      </code></pre>
      <h4>Start Local Server on different port</h4>
      <p>The default port is 3000 if unspecified.</p>
      <pre><code class='bash'>
        rails s -b 0.0.0.0 -P tmp/pids/srv1.pid
        rails s -b 0.0.0.0 -p 3001 -P tmp/pids/srv2.pid
        rails s -b 0.0.0.0 -p 3002 -P tmp/pids/srv3.pid
      </code></pre>
      <h4>Active Record Errors</h4>
      <pre><code class='ruby'>
        #Model validations:
        class Student
          validates :name, :grade, :act_score, presence: true
          ...
        end

        new_student = Student.create(name: 'James', grade: '2nd.')

        #Show errors:
        new_student.errors

        #Show errors as sentences:
        new_student.errors.full_messages
      </code></pre>
      <h4>Route Syntax</h4>
      <pre><code class='ruby'>
        verb "the_url" => "controller#action"
        get "tickets" => "tickets#index"
        get "tickets/:id" => "tickets#show"
      </code></pre>
      <h4>Open SQLite from Rails</h4>
      <pre><code class='bash'>
        rails dbconsole
      </code></pre>
      <h4>Show Rail Project Info</h4>
      <pre><code class='bash'>
        rails about
      </code></pre>
      <h4>Open Rails Console</h4>
      <pre><code class='bash'>
        rails console
        or:
        rails c

        #reload the console to pull in any code changes made:
        reload!
      </code></pre>
      <h4>Rails Tasks</h4>
      <pre><code class='bash'>
        rails -T (commands than can be run)
        rails -T db (database related commands that can be run)
      </code></pre>
      <h4>Create Migration</h4>
      <p>Older versions of rails used the 'rake' command instead of 'rails' below.</p>
      <pre><code class='bash'>
        rails g migration [migration name] field:type field:type...

        rails db:migrate

        rails db:status

        rails db:rollback (rolls back the previous migration)

        rails db:migrate VERSION=XXX (rolls back to this migration)
      </code></pre>
      <h4>Add More Columns</h4>
      <p>Using this convention, rails will know that you want to add the fields listed to the table defined by 'YYY' or 'yyy' below.</p>
      <pre><code class='bash'>
        rails g migration AddXXXToYYY ...
        rails g migration AddFieldsToTownships title:string moved_to:date

        rails g migration add_xxx_to_yyy
        rails g migration add_fields_to_townships
      </code></pre>
      <h4>Show Rails Generators</h4>
      <pre><code class='bash'>
        rails g
      </code></pre>
      <h4>Create Scaffolding</h4>
      <pre><code class='bash'>
        rails generate scaffold [name] attribute:type
      </code></pre>
      <pre><code class='bash'>
        rails generate scaffold Product title:string price:decimal
      </code></pre>
      <h4>Create Model (includes migration)</h4>
      <p>Model names should be singular.</p>
      <p>String is the default type, so that can be left off if the type is a string.</p>
      <a href='http://api.rubyonrails.org/v5.2.0/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-add_column'>Column Types</a>
      <pre><code class='bash'>
        rails generate model [model name] [field[:type][:index] field[:type][:index]] [options]

        #or:

        rails g model [model name] [field[:type][:index] field[:type][:index]] [options]

        #i.e.
        rails g model ticket title:string priority:string the_date:datetime

        #Run Migration:
        rails db:migrate

        #Migration Status:
        rails db:migrate:status
      </code></pre>
      <p>Example: A model named 'Student' would point to a table named 'students' by default.</p>
      <h4>Create Controller and View</h4>
      <p>Controller name is plural.</p>
      <pre><code class='bash'>
        rails generate controller [controller name]
        or:
        rails g controller [controller name]
      </code></pre>
      <h4>Remove Controller and other files created above.</h4>
      <pre><code class='bash'>
        rails destroy controller [controller name]
      </code></pre>

      <h4>Basic Controller Methods</h4>
      <pre><code class='ruby'>
        class TicketsController < ApplicationController
          def index; end
          def create; end
          def show; end
          def update; end
          def destroy; end
        end
      </code></pre>

      <h4>Views</h4>
      <p>When you do not point the controller action to a specific view it will try to render the view with the same name as the action.</p>
      <p>def 'index; end' would try to render the 'index.html.erb' view.</p>

      <h4>Create resourceful routes.</h4>
      <p>This will create:</p>
      <ul>
        <li>Database migration for the 'students' table.</li>
        <li>The Student model with the 'belongs_to' line pointing to 'course'.</li>
        <li>A Student controller.</li>
        <li>All of the resourceful routes for student.</li>
      </ul>
      <pre><code class='bash'>
        rails g resource [resource name] field:type field:type...

        rails g resource student first_name:string last_name:string course:references
      </code></pre>
      <h4>Show Routes</h4>
      <p>Show routes from the browser app by going to this path: http://[url of app][:port]/rails/info/routes.</p>
      <pre><code class='bash'>
        rails routes
        or:
        rake routes
      </code></pre>

      <h4>Resourceful Routes in route.rb</h4>
      <pre><code class='ruby'>
        Rails.application.routes.draw
          root "students#index"
          get "students" => "students#index", as: "students"
          post "students" => "students#create"
          get "students/new" => "students#new", as: "new_student"
          get "students/:id/edit" => "students#edit", as: "edit_student"
          get "students/:id" => "students#show", as: "student"
          patch "students/:id" => "students#update"
          put "students/:id" => "students#update"
          delete "students/:id" => "students#destroy"
        end

        #This is actually the same thing as the above:

        Rails.application.routes.draw
          root "students#index"
          resources :students
        end
      </code></pre>

      <h4>One-to-Many Nested Rotues in route.rb</h4>
      <pre><code class='ruby'>
        get '/lists/:list_id/notes' => 'notes#index', as: 'list_notes'
        post '/lists/:list_id/notes' => 'notes#create'
        get 'lists/:list_id/notes/new' => 'notes#new', as: 'new_list_note'
        get '/lists/:list_id/notes/:id/edit' => 'notes#edit', as: 'edit_list_note'
        get '/lists/:list_id/notes/:id' => 'notes#show', as: 'list_note'
        patch 'lists/:list_id/notes/:id' => 'notes#update'
        patch 'lists/:list_id/notes/:id' => 'notes#update'
        delete 'lists/:list_id/notes/:id' => 'notes#destroy'
      </code></pre>


      <h4>List of Resourceful routes</h4>
      <table class='rails-resourceful-routes'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Verb</th>
            <th>URL</th>
            <th>controller#action</th>
            <th>Task</th>
            <th>SQL**</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>students</td>
            <td>GET</td>
            <td>/students</td>
            <td>students#index</td>
            <td>Show Students</td>
            <td>SELECT *</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>POST</td>
            <td>/students</td>
            <td>students#create</td>
            <td>Create a new Student</td>
            <td>CREATE</td>
          </tr>
          <tr>
            <td>new_student</td>
            <td>GET</td>
            <td>/students/new</td>
            <td>students#new</td>
            <td>Show new Student form</td>
            <td>Display a HTML form</td>
          </tr>
          <tr>
            <td>edit_student</td>
            <td>GET</td>
            <td>/students/:id/edit</td>
            <td>students#edit</td>
            <td>Show edit Student form</td>
            <td>SELECT where id =</td>
          </tr>
          <tr>
            <td>student</td>
            <td>GET</td>
            <td>/students/:id</td>
            <td>students#show</td>
            <td>Show a Student</td>
            <td>SELECT where id =</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>PATCH</td>
            <td>/students/:id</td>
            <td>students#update</td>
            <td>Update Student (partial)</td>
            <td>UPDATE tbl SET (name = 'Josh')</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>PUT</td>
            <td>/students/:id</td>
            <td>students#update</td>
            <td>Update Student (complete)</td>
            <td>UPDATE tbl SET (name = 'Josh', day = 'Wed', state = 'AL' ...)</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>DELETE</td>
            <td>/students/:id</td>
            <td>students#destroy</td>
            <td>Remove a Student</td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>
      <p>** There are exceptions to the SQL displayed here. These example serve as the most common implementations in my experience.</p>
      <p>Each of the 'name's listed in the table above is appended with either '_url' or '_path' in rails.</p>
      <p>In the rails app, use '_path' for your views and '_url' for controller redirects.</p>
      <h5>_url (full path to page)</h5>
      <ul>
        <li>i.e. students_url: http://www.joshyoung.me/students</li>
        <li>i.e. student_url(4): ttp://www.joshyoung.me/students/4</li>
      </ul>
      <h5>_path (relative path to page)</h5>
      <ul>
        <li>i.e. students_path: /students</li>
        <li>i.e. student_path(4): /students/4</li>
      </ul>
      <h4>Naming</h4>
      <p>By convention the name of the model is singular and the name of the table is plural.</p>
      <h4>Create New Table Entry</h4>
      <pre><code class='ruby'>
        township = Township.new
        township.city = 'London'
        township.country = 'England'
        township.save

        #Or:

        township = Township.new(city: 'London', country: 'England')
        township.save

        #Or:

        Township.create(city: 'London', country: 'England')

      </code></pre>
      <h4>Update Table Value</h4>
      <pre><code class='ruby'>
        township = Township.find(2)
        township.city = 'London'
        township.country = 'England'
        township.save

        #or:

        township.update(city: 'London', country: 'England')

      </code></pre>
      <h4>Delete Table Value</h4>
      <pre><code class='ruby'>
        township = Township.find_by(city: 'Jacksonville')
        township.destroy
      </code></pre>

      <h4>One-to-Many Relationships</h4>
      <pre><code class='ruby'>
        #One (parent):
        class Student < ApplicationRecord
          has_many :movies
        end

        #Many (has a foreign key to reference parent):
        class Movie < ApplicationRecord
          belongs_to :student
        end
      </code></pre>

      <pre><code class='ruby'>
        #Setup the cascade to delete movies, then the student it removed:
        class Student < ApplicationRecord
          has_many :devices, dependent: :destroy
        end
      </code></pre>

      <p>Generate the relationship:</p>
      <pre><code class='bash'>
        rails g resource Device name:string student:references
      </code></pre>


      <div style='display: flex;'>
        <div style='margin-right:20px;'>
          <h5>One (parent):</h5>
          <table>
            <thead>
              <tr>
                <th colspan='3'>students</th>
              </tr>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Frank</td>
                <td>35</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sally</td>
                <td>28</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h5>Many (child):</h5>
          <table>
            <thead>
              <tr>
                <th colspan='3'>devices</th>
              </tr>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>student_id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>iPhone</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>iPad</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Laptop</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>In the above example, 'student_id' is a foreign key pointing to the 'id' field in the 'students' table.</p>
      <p>The foreign key will always be the parent's table name in singular form (student) with an '_id' appended to the end. So in this case it is 'student_id' since the parent table is 'students'.</p>

      <p>In the ruby console, <strong>student.devices</strong> would return all of the devices that student possesses. On the other hand, <strong>device.student</strong> would return the student who is the owner of the device selected.</p>

      <h4>Many-to-Many Relationships</h4>
      <pre><code class='ruby'>
        class Student < ApplicationRecord
          has_many :devices
        end

        class Device < ApplicationRecord
          belongs_to :student
          belongs_to :colors
        end

        class Color < ApplicationRecord
          has_many :devices
        end
      </code></pre>

      <div style='display: flex;'>
        <div style='margin-right:5px;'>
          <table>
            <thead>
              <tr>
                <th colspan='3'>students</th>
              </tr>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Frank</td>
                <td>35</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sally</td>
                <td>28</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style='margin-right: 5px;'>
          <table>
            <thead>
              <tr>
                <th colspan='4'>devices</th>
              </tr>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>student_id</th>
                <th>color_id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>iPhone</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>iPad</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Laptop</td>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th colspan='3'>colors</th>
              </tr>
              <tr>
                <th>id</th>
                <th>color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Green</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Silver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>

    <article>
      <a name='ruby'></a>
      <h3>Ruby</h3>

      <h4>Output just a class' own methods</h4>
      <pre><code class='ruby'>
        klass = Klass.new

        puts klass.methods - methods
      </code></pre>

      <h4>Loads IRB With Active Support</h4>
      <pre><code class='ruby'>
        !rails c
      </code></pre>
      <h4>Struct</h4>
      <pre><code class='ruby'>
        # With Struct you can only define
        # the attributes at object creation
        Student = Struct.new(:name, :grade)
        george = Student.new('george', 95)

        # Outputs: 'george'
        puts george.name

        # Outputs: 95
        puts george.grade
      </code></pre>

      <h4>OpenStruct</h4>
      <pre><code class='ruby'>
        require 'ostruct'
        george = OpenStruct.new(name: 'george', grade: 95)

        # Outputs: 'george'
        puts george.name

        # Outputs: 95
        puts george.grade
      </code></pre>
      <h4>Open documentation for project's gems</h4>
      <pre><code class='ruby'>
        gem serve
      </code></pre>
      <h4>Install to global gemset (when using rvm)</h4>
      <pre><code class='ruby'>
        rvm @global do gem install [gem name]
      </code></pre>
      <h4>Empty Method Returns Nil</h4>
      <pre><code class='ruby'>
        def find_grade; end
        grade = find_grade

        #Outputs nil:
        puts grade
      </code></pre>
      <h4>Naming</h4>
      <pre><code class='ruby'>
        #Class is a Noun:
        class Cards
          #Module is an Adjective:
          include Shuffleable
        end
      </code></pre>
      <h4>Ranges</h4>
      <pre><code class='ruby'>
        #Inclusive:
        5..10
        #Exclusive:
        5...10
      </code></pre>
      <h4>Find Methods</h4>
      <pre><code class='ruby'>
        cat.private_methods
        cat.public_methods
        cat.protected_methods
        cat.singleton_methods

        Cat.private_instance_methods
        Cat.protected_instance_methods
        Cat.public_instance_methods
      </code></pre>
      <h4>Syntactic Sugar</h4>
      <p>At the end of the day, the operators we know like `+`, `-`, etc are actually methods in ruby. So these two will do the same thing:</p>
      <pre><code class='ruby'>
        y = 5 + 6;
        y = 5.+(6)
      </code></pre>
      <h4>Methods and Code Blocks</h4>
      <p>By default all methods will accept a code block. However, they will not yield to the block unless the method includes a `yield` keyword.</p>
      <pre><code class='ruby'>
        #These are both valid ways to call a method:
        my_method
        my_method { puts "Test" }
        my_method() { puts "Test" }
      </code></pre>
      <h4>Accept Multiple Arguments</h4>
      <pre><code class='ruby'>
        def lots_of(*a)
        end

        #Outpus: [1, 2, 3, 4]
        puts lots_of(1, 2, 3, 4)
      </code></pre>
      <h4>Multiline Comment</h4>
      <pre><code class='ruby'>
      =begin
        def a_function
          puts 'test'
        end
      =end
      </code></pre>
      <h4>Ruby Symbol vs Strings</h4>
      <p>Symbols have the same object ID whereas strings do not.</p>
      <p>Symbols are immutable and strings are mutable.</p>
      <pre><code class='bash'>
        #Open irb:
        >> :pathway.object_id
        => 9854917
        >>
        >> :pathway.object_id
        => 9854917
        >>
        >> "pathway".object_id
        => 97508076985508
        >>
        >> "pathway".object_id
        => 98508075985400
        >>
        >> :pathway == "pathway"
        => false
      </code></pre>
      <h4>Ruby Class Properties</h4>
      <pre><code class='ruby'>
        class RubyStudent
          #readable only:
          attr_reader :name

          #writable only:
          attr_writer :name

          #readable and writable:
          attr_accessor :grade

          def initialize
            @name = 'Josh'
            @grade = 'a'
          end

          #Override the attr_accessor method in your class:
          def grade=(my_grade)
            @grade = my_grade.upcase
          end
          ...
        end

        rstudent = RubyStudent.new

        #Call the accessor method:
        puts rstudent.name
      </code></pre>

      <h4>Static Methods</h4>
      <pre><code class='ruby'>
        class RubyStudent
          def self.my_method
            ...
          end
        end

        #Call static method:
        RubyStudent.my_method
      </code></pre>

      <h4>Multiple Static Methods</h4>
      <pre><code class='ruby'>
        class RubyStudent
          class << self
            def my_method
              ...
            end

            def my_second_method
              ...
            end
          end
        end

        #Call static method:
        RubyStudent.my_method
        RubyStudent.my_second_method
      </code></pre>

      <h4>Ruby Modules</h4>
      <p>Modules are a typically used to create reusable sections of code in the form of Mixins or they can be used to wrap classes thereby action as a Namespace.</p>
      <p>Modules cannot be instantiated, so any methods have to be defined with self.</p>
      <pre><code class='ruby'>
        module Learnable
          ...
          def self.calculate
            ...
          end
        end

        #Call the Module method:
        Learnable::calculate
        #or
        Learnable.calculate
      </code></pre>

      <h4>Ruby Class Inheritance</h4>
      <p>Use inheritance when two class have a 'is-a' relationship. For instance: a MathStudent is a type of Student and a Fox is a type of Animal.</p>
      <pre><code class='ruby'>
        class Student
          ...
          def print_grade
            puts 'A'
          end
        end

        class MathStudent < Student
          def print_grade
            puts 'A+'
          end
        end
        student = MathStudent.new
        #Prints 'A+':
        student.print_grade
      </code></pre>

      <h4>Ruby Namespace</h4>
      <pre><code class='ruby'>
        module CollegeStudent
          class Student
            def self.outp
              puts 'output'
            end
            def out
              puts 'new output'
            end
          end
        end

        CollegeStudent::Student.outp
        student = CollegeStudent::Student.new
        student.out
      </code></pre>

      <h4>Ruby Mixins</h4>
      <p>Ruby Mixins are just ruby modules that are included within a class.</p>
      <pre><code class='ruby'>
        #If a module will be included in a class as a mixin, you do not have to define the method with self.
        #This way you can call the module method with the class instantiation.

        #File 'learnable.rb'
        module Learnable
          def calculate(num1, num2)
            num1 * num2
          end
        end

        #File: student.rb
        require_relative 'learnable'
        class Student
          include Learnable

          def add_up(n1, n2)
            calculate(n1, n2)
          end
        end

        student = Student.new
        puts student.calculate(2, 2)
      </code></pre>
      <p>When you define a mixin, if you know what class it will be included within, you can use class properties in the Module definition, like below:</p>
      <pre><code class='ruby'>
        module Learnable
          def calculate(num1, num2)
            @first_number = 10
          end
        end
      </code></pre>
      <p>However, doing so could cause problems if you ever include the module within a class that does not define '@first_number'. Therefore it is best to use the class access within the module methods, like so:</p>
      <pre><code class='ruby'>
        module Learnable
          def calculate(num1, num2)
            #Here we have to use 'self' otherwise the module will think it is defining a local variable.
            self.first_number = 10
          end
        end
      </code></pre>
      <p>Then when this is included in a class, it will work like this:</p>
      <pre><code class='ruby'>
        require_relative 'learnable'
        class Student
          include Learnable

          attr_accessor :first_number

          def initialize
            calculate(2, 2)
          end
        end

        puts Student.new.first_number
      </code></pre>

      <h4>Unless vs If</h4>
      <pre><code class='ruby'>

        #Prints 'false unless':
        unless false
          puts 'false unless'
        end

        #Prints 'false unless':
        puts 'false unless' unless false

        #Prints 'false if':
        if !false
          puts 'false if'
        end

        #Prints 'false if':
        puts 'false if' if !false
      </code></pre>

      <h4>Memoization</h4>
      <pre><code class='ruby'>
        #If 'x' is false or nil return the value of 'y',
        #otherwise return the value of 'x':
        x ||= y

        #The first time through it will call the 'find_the_pizza' method.
        #For subsequent calls it will return '@pizza'.
        def pizza_special
          @pizza ||= PizzaSpecial.find_the_pizza('cheese')
        end
      </code></pre>

      <h4>When You Must Use 'self'.</h4>
      <h5>For assigning values with the accessor method from within a class:</h5>
      <pre><code>
        class Animal
          attr_accessor :tail

          def change_tail(new_tail)
            #To get this to work as expected, you would have
            #to change the line below to use 'self'
            tail = new_tail

            #Change to this:
            #self.tail = new_tail

            #If you do not use 'self' as shown above, ruby
            #thinks you are assigning to a local variable.

            #This works without 'self' because ruby knows that there is no local
            #variable titled 'tail' therefore it knows to return the value from the
            #accessor method:
            def send_tail
              tail
            end
          end
        end

        the_tail = Animal.new
        the_tail.tail = 'Brown'
        the_tail.change_tail('light brown')

        #This would output 'Brown'.
        puts the_tail.tail
      </code></pre>

      <h5>For defining 'class methods' (a.k.a. Static Methods):</h5>
      <pre><code>
        class Student
          def self.new_grade(grade)
            @grade = grade
          end
        end

        Student.new_grade('A')
      </code></pre>

      <h4>Convenient Methods</h4>
      <pre><code class='ruby'>
        class Test
          ...
        end

        #Prints: Test
        puts Test.inspect

        #Prints: Class
        puts Test.class

        #Prints: 89023478923
        puts test.object_id
      </code></pre>

      <h4>Show Ancestors</h4>
      <pre><code class='ruby'>
        #In a file named 'my_module.rb':
        module MyMod
          ...
        end

        #In another class:
        require_relative 'my_module'
        class Test
          include MyMod
          ...
        end

        #Prints: [Test, MyMod, Object, Kernel, BasicObject]
        puts Test.ancestors
      </code></pre>

      <h4>Function Return</h4>
      <p>Functions always return a value even if they are empty.</p>
      <pre><code>
        def empty_function
        end

        return_value = empty_function

        #Prints 'nil':
        puts return_value.inspect
      </code></pre>

      <h4>Ruby Convert Types</h4>
      <pre><code class='ruby'>
        a_string = 'a string value'

        #Convert to Symbol:
        a_string.to_sym

        #Convert to String:
        123.to_s

        #Convert to Integer:
        "123".to_i
      </code></pre>
      <h4>Look up Ruby Docs from command line</h4>
      <p><a href='http://ruby-doc.org'>Online Documentation</a></p>
      <pre><code class='bash'>
        ri
        #or:
        ri -i (for interactive mode)
      </code></pre>
      <h4>Interpolate code</h4>
      <pre><code class='ruby'>
        variable_value = 'test'
        puts "Print out #{variable_value}"
      </code></pre>
      <h4>Start IRB Session</h4>
      <pre><code class='bash'>
        irb
      </code></pre>
      <h4>If/Else Statement</h4>
      <pre><code class='ruby'>
        if a_value == 1
          puts "Yes"
        elsif a_value == 2
          puts "No"
        else
          puts "Could not find."
        end
      </code></pre>
      <h4>Switch Statement</h4>
      <pre><code class='ruby'>
        the_value = return_a_string()

        case the_value
          when "One"
            puts "It is one!"
          when "Two"
            puts "It is two!"
          else
            puts "Could not find result."
          end
      </code></pre>
      <h4>Objects</h4>
      <p>Ruby objects are always passed by reference</p>
      <h4>Function</h4>
      <pre><code class='ruby'>
        def function_name(parameter)
          ...
        end
      </code></pre>
      <h4>Add to Array</h4>
      <pre><code class='ruby'>
        the_array << "val"

        #Or:
        the_array.push("val")
      </code></pre>
      <h4>Object Instantiation</h4>
      <pre><code class='ruby'>
        new_obj = Person.new
      </code></pre>
      <h4>Iteration</h4>
      <pre><code class='ruby'>
        array.each do |elem| ... end
      </code></pre>

      <h4>Custom Iteration</h4>
      <pre><code class='ruby'>
        #Example 1:
        def output
          yield
          yield
        end

        output { puts "This is output twice" }

        #Example 2:
        def output_num
          yield(100)
          yield(200)
        end

        output_num { |num| puts num }
      </code></pre>

      <h4>Basic Blocks</h4>
      <pre><code class='ruby'>
        2.times { puts 'Josh' }

        2.times do
          puts 'Josh'
        end

        2.times { |i| puts "#{i} - Josh" }

        2.times do |i|
          puts "#{i} - Josh"
        end
      </code></pre>

      <h4>Select Block</h4>
      <pre><code class='ruby'>
        #Returns just the numbers greater than '3':
        [1, 2, 3, 4, 5, 6, 7, 8, 9].select { |n| n > 3 }
      </code></pre>

      <h4>Reject Block</h4>
      <pre><code class='ruby'>
        #Rejects the numbers greater than '3':
        [1, 2, 3, 4, 5, 6, 7, 8, 9].reject { |n| n > 3 }
      </code></pre>

      <h4>Reduce Block</h4>
      <pre><code class='ruby'>
        #Gets the sum with the reduce method:
        [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce { |total, n| total + n }
        #or:
        [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce (:+)
      </code></pre>

      <h4>Sort Lowest to Highest</h4>
      <pre><code class='ruby'>
        [11, 21, 73, 14, 95, 56, 97, 48, 19].sort
      </code></pre>

      <h4>Sort Highest to Lowest</h4>
      <pre><code class='ruby'>
        [11, 21, 73, 14, 95, 56, 97, 48, 19].sort { |a, b| b <=> a }
      </code></pre>

      <h4>Returns boolean if it finds the result</h4>
      <pre><code class='ruby'>
        #This should return false.
        [11, 21, 73, 14, 95, 56, 97, 48, 19].any? { |n| n > 100 }
      </code></pre>

      <h4>Returns the first match</h4>
      <pre><code class='ruby'>
        #This should return 73.
        [11, 21, 73, 14, 95, 56, 97, 48, 19].detect { |n| n > 70 }
      </code></pre>

      <h4>Map the values returned into a new array</h4>
      <pre><code class='ruby'>
        [11, 21, 73, 14, 95, 19].map { |n| n * 3 }
      </code></pre>

      <h4>Hash (associative array / dictionary)</h4>
      <pre><code class='ruby'>
        {key => value}
      </code></pre>
      <pre><code class='ruby'>
        {:sport => "baseball"} (the key can be anything)
      </code></pre>
      <p>These are both the same:</p>
      <pre><code class='ruby'>
        {:sport => "baseball", :time_limit => 60}

        #Or:
        {sport: "baseball", time_limit: 60}
      </code></pre>
      <h4>Loop through a hash</h4>
      <pre><code class='ruby'>
        sports = {:sport => "baseball", :time_limit => 60}
        sports.each { |key, val| puts "#{key} - #{val}" }
      </code></pre>
    </article>

    <article>
      <a name='sqlite'></a>
      <h3>SQLite</h3>
      <h4>Execute a Single Query</h4>
      <pre><code class='bash'>
        sqlite3 -line mydatabase.sqlite3 "select * from students"
      </code></pre>
      <h4>Select Databse</h4>
      <pre><code class='bash'>
        \c [database]
      </code></pre>
      <h4>Describe Table</h4>
      <pre><code class='bash'>
        \dt+
      </code></pre>
      <h4>Connect to DB</h4>
      <pre><code class='bash'>
        sqlite3 /path/to/database_file.db
      </code></pre>
      <h4>Show tables</h4>
      <pre><code class='bash'>
        .tables
      </code></pre>
      <h4>Tables Schema</h4>
      <pre><code class='bash'>
        .schema table_name
      </code></pre>
      <h4>Describe Table</h4>
      <pre><code class='bash'>
        pragma table_info(table_name)
      </code></pre>
      <h4>Select all</h4>
      <pre><code class='bash'>
        select * from table_name
      </code></pre>
    </article>

    <article>
      <a name='security'></a>
      <h3>Security</h3>
      <h4>Ping Sweep</h4>
      <pre><code class='bash'>
        for i in `seq 1 255`; do ping -c 1 [IP ADDRESS].$i ; done
      </code></pre>
    </article>

    <article>
      <a name='testing'></a>
      <h3>Testing</h3>
      <h4>Rspec Fail on First Error</h4>
      <pre><code class='ruby'>
        rspec --fail-fast
      </code></pre>
      <h4>Rspec with Documentation</h4>
      <pre><code class='ruby'>
        rspec -f d
      </code></pre>
      <h4>Test File Setup</h4>
      <p>We have a space between each part below.</p>
      <pre><code class='ruby'>
        # Setup:
        user = create(:user)

        # Exercise:
        Student.addToClass(user)

        # Verify:
        expect(Student.users).to eq([user])
      </code></pre>
    </article>

    <article>
      <a name='ssh'></a>
      <h3>SSH</h3>
      <h4>Remote Port Forwarding</h4>
      <p>Here <strong>9100</strong> is the remote port and <strong>22</strong> is the remote port.</p>
      <pre><code class='bash'>
        ssh -R 9100:127.0.0.1:22 username@192.168.6.7
      </code></pre>
      <h4>Local Port Forward</h4>
      <p>In this case, <strong>9100</strong> would be our local port and <strong>80</strong> would be the remote.</p>
      <pre><code class='bash'>
        ssh -L 9100:www.remotesite.com:80 username@host
      </code></pre>
    </article>

    <article>
      <a name='svg'></a>
      <h3>SVG</h3>
      <h4>SVG viewBox</h4>
      <p>The viewBox has values of x, y, width, and height. The shapes within this box will be set in relation to the size of the viewBox. The viewBox location within the SVG tag can be offset with the first two numbers (x, y).</p>
      <p>In the CodePen below below, you can see that the first and last example are consuming 100% of the width of the viewBox. When the screen is expanded or contracted, the elements within expand or contract accordingly, but always consume 100% of the size of the viewBox because the elements inside are sized to contain 100% of the viewBox width.</p>
      <p>The middle example below internal shapes that total to less than the full width of the viewBox. The viewBox is also shifted from a starting point of 0,0 to demonstrate that the view box can be positioned anywhere within the contining SVG element.</p>
      <p>To adjust the size of the SVG, you can set the outer containing `SVG` tag to be a certain percentage of the width of the browser window or even a fixed width. Within this the inner viewBox can be positioned within it.</p>
      <p data-height="265" data-theme-id="0" data-slug-hash="xzgvKX" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="SVG viewBox" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/xzgvKX/">SVG viewBox</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

      <h4>SVG Links</h4>
      <p data-height="265" data-theme-id="0" data-slug-hash="xzgodE" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="SVG Symbol" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/xzgodE/">SVG Symbol</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

      <h4>SVG Elements</h4>
      <p data-height="265" data-theme-id="0" data-slug-hash="wXgNvg" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="SVG Stuff" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/wXgNvg/">SVG Stuff</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

      <h4>Set SVG to Scale with Browser Width</h4>
      <p>By default an SVG element will take up the full width of the browser unless it has a defined width. To circumvent this, you can give it a definined with such as 300px or a percentage. Below is an example of a way to set the SVG element to be half of the browser width.</p>
      <p>If the SVG tag is set to scale with the browser width, the SVG shapes within the internal viewBox will scale accordingly.</p>
      <pre><code>
        svg {
          height: auto;
          //This could be any percentage:
          width: 50%;
        }
      </code></pre>
    </article>

    <article>
      <a name='rubymine'></a>
      <h3>RubyMine</h3>
      <dl>
        <dt>Open Context Menu</dt>
        <dd><code>Option(alt) + Enter</code></dd>
        <dt>Search for Files</dt>
        <dd><code>SHIFT + SHIFT</code></dd>
        <dt>Search in Files</dt>
        <dd><code>CMD + SHIFT + F</code></dd>
        <dt>MVC Dialog</dt>
        <dd><code>CTRL + CMD + UP-ARROW</code></dd>
      </dl>
    </article>

    <article>
      <a name='scp'></a>
      <h3>SCP</h3>
      <h4>Local to Remote</h4>
      <pre><code class='bash'>
        scp file.txt username@host:/to/myremote/directory
      </code></pre>
      <h4>Remote to Local</h4>
      <pre><code class='bash'>
        scp username@host:file.txt /to/my/local/directory
      </code></pre>
    </article>

    <article>
      <a name='security'></a>
      <h3>Security</h3>
      <h4>Nmap Ping Scan (detect hosts)</h4>
      <pre><code class='bash'>
        nmap -sP 192.168.1.0/24
      </code></pre>
      <h4>Bash Ping Sweep</h4>
      <h4>Usage: <strong>./sweep.sh 192.168.1</strong></h4>
      <pre><code class='bash'>
        #!/bin/bash
        ip=$1
        for i in `seq 0 1 255`; do
            ping -c 3 -t 5 $ip.$i > /dev/null 2>&1 && echo $ip.$i is up;
        done
      </code></pre>
    </article>

    <article>
      <a name='php'></a>
      <h3>PHP</h3>
      <h4>GET/POST Assignment</h4>
      <pre><code class='php'>
        $var = isset($_GET['var']) ? $_GET['var'] : '';
      </code></pre>
    </article>

    <article>
      <a name='tmux'></a>
      <h3>Tmux</h3>
      <div class='code'>
        <dl>
          <dt>Split Window Vertically:</dt>
          <dd><code>Ctrl-b %</code></dd>
          <dt>Open New Window</dt>
          <dd><code>Ctrl-b + c</code></dd>
          <dt>Previous Window</dt>
          <dd><code>Ctrl-b + l</code></dd>
          <dt>Navigate Between Windows</dt>
          <dd><code>Ctrl-b + 0/1/2,etc</code></dd>
          <dt>Split Window Horizontally:</dt>
          <dd><code>Ctrl-b "</code></dd>
          <dt>Navigate Between Windows:</dt>
          <dd><code>Ctrl-b &lt;ARROW KEYS&gt;</code></dd>
          <dt>Detach from tmux:</dt>
          <dd><code>Ctrl-b + d</code></dd>
          <dt>Re-attach to tmux:</dt>
          <dd><code>tmux attach -t &lt;SESSION&gt;</code> (i.e. tmux attach -t 0)</dd>
          <dt>Show running tmux sessions:</dt>
          <dd><code>tmux ls</code></dd>
          <dt>Rename tmux Session:</dt>
          <dd><code>Ctrl-b + $</code></dd>
          <dt>Full Screen</dt>
          <dd><code>Ctrl-b + z</code></dd>
          <dt>Next Window</dt>
          <dd><code>Ctrl-b + n</code></dd>
          <dt>Previous Window</dt>
          <dd><code>Ctrl-b + p</code></dd>
          <dt>Open a Specific Session</dt>
          <dd><code>Ctrl-b + &lt;number&gt;</code></dd>
          <dt>Detach Current Session</dt>
          <dd><code>Ctrl-b + d</code></dd>
          <dt>Start Session with Name</dt>
          <dd><code>tmux new -s [name]</code></dd>
          <dt>Close a Session with Name</dt>
          <dd><code>tmux kill-session -t [name]</code></dd>
          <dt>Rename Session</dt>
          <dd><code>tmux rename-session -t 0 [new name]</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='vim'></a>
      <h3>Vim</h3>
      <div class='code'>
        <dl>
          <dt>Remove all folds</dt>
          <dd>zR</dd>
          <dt>Toggle fold inside current indent</dt>
          <dd>za</dd>
          <dt>Find Character Before:</dt>
          <dd><code>t}</code></dd>
          <dt>Change to Found Char Before:</dt>
          <dd><code>ct}</code></dd>
          <dt>Find Character:</dt>
          <dd><code>f}</code></dd>
          <dt>Change to Found Char:</dt>
          <dd><code>cf}</code></dd>
          <dt>Find Character Backwards</dt>
          <dd><code>F{</code></dd>
          <dt>Find Character Before Backwards</dt>
          <dd><code>T{</code></dd>
          <dt>Re-run the last 'f' or 't' command</dt>
          <dd><code>;</code></dd>
          <dt>Re-run the last 'F' or 'T' command</dt>
          <dd><code>,</code></dd>
          <dt>End of Current Word:</dt>
          <dd><code>ea</code></dd>
          <dt>Change Line</dt>
          <dd><code>cc</code></dd>
          <dt>Split Editor:</dt>
          <dd><code>:split(:sp)</code> new_file_name</dd>
          <dt>Vertical Split Editor:</dt>
          <dd><code>:vsplit(:vs)</code> new_file_name</dd>
          <dt>Switch Between Splits:</dt>
          <dd><code>Ctrl + w</code></dd>
          <dt>Mark Current Line:</dt>
          <dd><code>m[a-z]</code> (i.e. <code>ma</code>)</dd>
          <dt>Go to Mark "h":</dt>
          <dd><code>'h</code></dd>
          <dt>Show all marks:</dt>
          <dd><code>:marks</code></dd>
          <dt>Mark Across Files</dt>
          <dd>Use an uppercase mark: <code>m[A-Z]</code></dd>
          <dt>Previous location (insert mode):</dt>
          <dd><code>gi</code></dd>
          <dt>Go to file under cursor:</dt>
          <dd><code>gf</code></dd>
          <dt>Open shell from vi:</dt>
          <dd><code>:shell</code></dd>
          <dt>Close shell:</dt>
          <dd><code>Ctrl + d</code></dd>
          <dt>Open file browser:</dt>
          <dd><code>:E</code></dd>
          <dt>Show Registers:</dt>
          <dd><code>:reg</code></dd>
          <dt>Paste from # registers:</dt>
          <dd><code>"[0-9]p</code> (i.e. <code>"0p</code>, <code>"1p</code>, etc.)</dd>
          <dt>Yank to register:</dt>
          <dd><code>"[a-z]yy</code> (then: <code>"ap</code> to paste)</dd>
          <dt>Append to register:</dt>
          <dd><code>"[A-Z]yy</code> (then: <code>"Ap</code> to paste)</dd>
          <dt>Paste from Clipboard</dt>
          <dd><code>"+p</code></dd>
          <dt>Record Macro:</dt>
          <dd><code>q[a-z]</code> (i.e. <code>qm</code> - records to `m`)</dd>
          <dt>Stop Macro Recording:</dt>
          <dd><code>q</code></dd>
          <dt>Execute Macro:</dt>
          <dd><code>@[a-z]</code> (i.e. <code>@m</code> or <code>20 @m</code> to run 20 times</dd>
          <dt>Increment Number:</dt>
          <dd><code>Ctrl + a</code></dd>
          <dt>Search / Replace Globally:</dt>
          <dd><code>:%s/searchfor/replacewith/g</code></dd>
          <dt>Search / Replace Current Line:</dt>
          <dd><code>:s/searchfor/replacewith/g</code></dd>
          <dt>Search / Replace (confirmation):</dt>
          <dd><code>:%s/searchfor/replacewith/gc</code></dd>
          <dt>High, Middle, Low</dt>
          <dd><code>H, M, L</code></dd>
          <dt>Move up/down</dt>
          <dd><code>Ctrl + U / Ctrl + D</code></dd>
          <dt>Move to line 11</dt>
          <dd><code>11 + G</code></dd>
          <dt>Indent to surroundings</dt>
          <dd><code>==</code></dd>
          <dt>Delete around and within:</dt>
          <dd><code>daw / diw</code></dd>
          <dt>Delete inner paragraph</dt>
          <dd><code>dip</code></dd>
          <dt>Indent a paragraph</dt>
          <dd><code>&gt;ip</code></dd>
          <dt>Reverse paragraph indent</dt>
          <dd><code>=ip</code></dd>
          <dt>Change between html tags</dt>
          <dd><code>cit</code></dd>
          <dt>Delete html tag</dt>
          <dd><code>dat</code></dd>
          <dt>Open New Window</dt>
          <dd><code>:new</code> file_name.txt</dd>
          <dt>Open Vertical Window</dt>
          <dd><code>:vnew</code> file_name.txt</dd>
          <dt>Go to file</dt>
          <dd><code>gf</code></dd>
          <dt>Go Back to prev file</dt>
          <dd><code>Ctrl + o</code></dd>
          <dt>Open New Tab</dt>
          <dd><code>:tabnew</code></dd>
          <dt>Edit File in Tab</dt>
          <dd><code>:tabedit</code> file_name.txt</dd>
          <dt>Move forward in tabs</dt>
          <dd><code>gt</code></dd>
          <dt>Move backward in tabs</dt>
          <dd><code>gT</code></dd>
          <dt>Open Visual Block mode</dt>
          <dd><code>Ctrl + V</code></dd>
          <dt>Move to beggining of line</dt>
          <dd><code>0</code></dd>
          <dt>Open NETRW file exporer</dt>
          <dd><code>:e .</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='vs_code'></a>
      <h3>VS Code</h3>
      <dl>
        <dt>Output HTML Boilerplate</dt>
        <dd><code>html:5 + TAB</code></dd>
      </dl>
    </article>

    <article>
      <a name='windows'></a>
      <h3>Windows</h3>
      <h4>Switch to C Drive</h4>
      <pre><code class='bash'>
        cd /d C:
      </code></pre>
      <h4>Flush DNS</h4>
      <pre><code class='batch'>
        ipconfig /flushdns
      </code></pre>

      <h4>All Network Info</h4>
      <pre><code class='batch'>
        ipconfig /all
      </code></pre>
    </article>

    <article>
      <a name='yarn'></a>
      <h3>Yarn</h3>
      <h4>Package Version (exclude dependencies)</h4>
      <pre><code>
        yarn list --depth 0 | grep [package name]
      </code></pre>
    </article>

    <article>
    <a name='zfs'></a>
    <h3>ZFS</h3>
      <h4>ZFS Pool Status</h4>
      <pre><code>
        zpool status -v

        zpool history

        #List Datasets:
        zfs list

        #Display all information about all datasets:
        zfs get all

        #Mount filesystem:
         zfs mount /mount_location
      </code></pre>
    </article>

  </div><!-- inner-section -->
</section>

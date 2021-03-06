import Chrome from "../snippets/chrome.js";
import Docker from "../snippets/docker.js";
import HTTP from "../snippets/http.js";
import Postgresql from "../snippets/postgresql.js";
import Kanban from "../snippets/kanban.js";
import Rubymine from "../snippets/rubymine.js";
import TMUX from "../snippets/tmux.js";
import VIM from "../snippets/vim.js";
import VSCode from "../snippets/vs-code.js";
import AnchorList from "../components/anchor-list";
import SnippetAnchorList from "../snippets/snippet-anchor-list";

# Code Snippets

Below, I have listed some common code snippets that I commonly go back to reference. Maybe you will find some of these useful. I update these routinely and add new ones as I run across them.

<AnchorList>
  <SnippetAnchorList />
</AnchorList>

### <a id="ansible"></a>Ansible

#### Ping Command:

```bash
  ansible all --key-file ~/.ssh/my_private_key -i inventory -m ping
```

#### Run gather facts command:

```bash
  ansible all -m gather_facts --limit 192.168.1.100
```

#### Become sudo first:

```bash
  ansible all -m apt -a update_cache=true --become --ask-become-pass
```

#### Run a playbook:

```bash
  ansible-playbook --ask-become-pass playboo.yml
```

### <a id="bash"></a>Bash

#### Services Running on Port

```bash
  sudo lsof -i tcp:3000
```

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

### <a id="text"></a>Text

<!-- Adopted from: https://www.lifewire.com/typing-quotes-apostrophes-and-primes-1074104 -->

#### Keyboard Shortcuts for Quote Marks

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
      <th>Windows</th>
      <th>Mac</th>
      <th>HTML</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>…</th>
      <td>Ellipsis</td>
      <td>alt+0133</td>
      <td>option+;</td>
      <td>&amp;#x2026;</td>
    </tr>
    <tr>
      <th>‘</th>
      <td>Opening Single Apostrophe</td>
      <td>alt+0145</td>
      <td>option+]</td>
      <td>&amp;lsquo;</td>
    </tr>
    <tr>
      <th>’</th>
      <td>Closing Single Apostrophe</td>
      <td>alt+0146</td>
      <td>option+shift+]</td>
      <td>&amp;rsquo;</td>
    </tr>
    <tr>
      <th>“</th>
      <td>Opening Double Quote</td>
      <td>alt+0147</td>
      <td>option+[</td>
      <td>&amp;ldquo;</td>
    </tr>
    <tr>
      <th>”</th>
      <td>Closing Double Quote</td>
      <td>alt+0148</td>
      <td>option+shift+[</td>
      <td>&amp;rdquo;</td>
    </tr>
    <tr>
      <th>'</th>
      <td>Straight Single Apostrophe</td>
      <td>'</td>
      <td>'</td>
      <td>'</td>
    </tr>
    <tr>
      <th>"</th>
      <td>Straight Double Quote</td>
      <td>"</td>
      <td>"</td>
      <td>"</td>
    </tr>
    <tr>
      <th>–</th>
      <td>En Dash</td>
      <td>Ctrl + hyphen</td>
      <td>Option + hyphen</td>
      <td>alt+0150</td>
    </tr>
    <tr>
      <th>—</th>
      <td>Em Dash</td>
      <td>Ctrl + Alt + hyphen</td>
      <td>Shift + Option + hyphen</td>
      <td>alt+0151</td>
    </tr>
  </tbody>
</table>

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

### <a id="bundler"></a>Bundler

#### Install a different version of bundler

```bash
  gem install bundler -v 1.0.10
```

#### Run `bundle` with a different version:

```bash
  bundle _2.0.15_ install
```

### <a id="css"></a>CSS

#### Switch to box sizing

```css
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

#### Clear Floats

```css
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
```

#### Margin/Padding Shorthand

```css
//top right bottom left:
margin(or padding): 10px 20px 10px 20px;

//top/bottom left/right:
margin(or padding): 10px 20px;

//top left/right bottom:
margin(or padding): 10px 20px 10px;
```

### <a id="dev_tools"></a>Dev Tools

#### Chrome

  <Chrome />

### <a id="docker"></a>Docker

  <Docker />

### <a id="html5"></a>HTML5

#### Unicode/Emojis

You can get the unicode emoji's from this page: [emoji list](http://unicode.org/emoji/charts/full-emoji-list.html).
All you have to do is remove the 'U+' from the first part of the code and replace it with '&#x'. End the unicode string with a semicolon.
For example, to use the smiley emoji, change it from: U+1F600 to '&amp;#x1F600;'.
To use a unicode character with the css 'before' or 'after' sudo-selector, remove the 'U+' from and replace it with '\'. So for the css ':before' or ':after', it would be '\1F600'. Of course, to use unicode on your site, you have to have the utf8 tag in your site header:

```html
<meta charset="utf-8" />
```

[Reference](https://www.w3.org/International/tutorials/tutorial-char-enc)

##### Code Pen

<p data-height="265" data-theme-id="0" data-slug-hash="vrbzGq" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="UTF8" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/vrbzGq/">UTF8</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### HTML5 Doctype

```html
<!DOCTYPE html>
```

#### Tags

- &lt;cite&gt; - cite a source
- &lt;kdb&gt; - text entered from a keyboard (i.e. `cd`, `pwd`)
- &lt;pre&gt; - preserves white space in html output
- &lt;var&gt; - used for outputting a variable in html
- &lt;del&gt; - show removed text (sometimes styled with strike-through mark)

### <a id="http"></a>HTTP

  <HTTP />

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
  # Show all application profiles:
  ufw app list

  # Show which ports/protocols a rule will enable:
  ufw app info 'OpenSSH'
```

#### Set default egress/ingress rules

```bash
  # Deny egress and ingress:
  ufw default deny outgoing
  ufw default deny incoming
```

#### Open Up Ports

```bash
  # Allow HTTP Service:

  ufw allow http

  # or:

  ufw allow 80/tcp
  # or allow application profile (nginx, apache, etc):
  ufw allow 'Nginx HTTP'

  # Allow a specific port:
  ufw allow 8080/tcp

  # Allow a specific IP:
  sudo ufw allow from 192.168.3.100

  # Limit to one port:
  sudo ufw allow from 192.168.3.100 to any port 80

  # Allow the whole subnet:
  ufw allow from 192.168.3.0/24 to any port 80
```

#### Close Ports/Delete Rules

```bash
  # Close port 80
  ufw deny 80/tcp

  # Deny from specific IP:
  ufw deny from 192.168.3.100

  # Deny IP and Port:
  ufw deny from 192.168.3.100 to any port 80

  # Delete HTTP rule:
  ufw delete allow www
  # or:
  ufw delete allow 80/tcp
```

### <a id="firewalld"></a>Firewalld

Firewalld is manipulating iptables behind the scene. Firewalld does have extended features in comparison to just using iptables. In the future iptables will be replaced with nftables. Firewalld will also serve as a font-end for nftables.

#### Default Zones

- block - ingress rejected, egress allowed
- dmz - for DMZ servers
- drop - ingress dropped, egress allowed
- external - use when you have NAT masquerading
- home - other machines trusted
- internal - use when server is a router/gateway machine
- public - other machines untrusted
- trusted - connections accepted and machines trusted
- work - other machines trusted

#### Firewalld Main Commands

```bash
  # Show all zones:
  firewall-cmd --get-zones

  # Show active zones:
  firewall-cmd --get-active-zones

  # Show default zone:
  firewall-cmd --get-default-zone

  # Show all services:
  firewall-cmd --get-services
```

#### Change Zones/Interfaces

Each network inteface can be assigned to a different zone.

```bash
  # Change 'eth0' to 'work' zone:
  firewall-cmd --zone=work --change-interface=eth0
```

#### Show Current Settings

```bash
  # List current settings on 'public' zone:
  sudo firewall-cmd --zone=public --list-all

  # Show open ports:
  sudo firewall-cmd --zone=public --list-ports
```

#### Open Ports/Services

Without `--permanent`, the firewall rule will take affect but will not persist after a reboot.

```bash
  # Open port 80:
  firewall-cmd --permanent --zone=public --add-port=80/tcp

  # Add FTP Service:
  firewall-cmd --permanent --zone=public --add-service=ftp

  # Reload the firewall for these to take affect:
  firewall-cmd --reload
```

#### Remove Service/Port

```bash
  # Remove the open port:
  firewall-cmd --zone=public --remove-port=80/tcp

  # Remove the service:
  firewall-cmd --zone=public --remove-service=ftp

  # Add the '--permanent' flag to make the removal permanent:
  firewall-cmd --zone=public --remove-port=80/tcp --permanent
  firewall-cmd --zone=public --remove-service=ftp --permanent
```

### <a id="gatsby"></a>Gatsby

#### Starting Local Server

```bash
  gatsby develop
  # or
  npm run develop
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

```bash
  git rm file_name
```

#### Push up tags:

```bash
 git push --follow-tags
```

#### Remove File from Repo, not File System

This will remove the file from your repo, but not from the file system.

```bash
  git rm --cached file_name
```

#### Remove Folder from Repo, and File System

This will remove the directory from your repo, and the filesystem.

```bash
  git rm -rvf file_name
```

#### Remove Folder from Repo, not File System

This will remove the directory from your repo, but not from the file system.

```bash
  git rm -r --cached my_folder_name
```

#### Show Contents of Commit

```bash
  git show [commit hash]
```

#### Change Base Branch

```bash
  git rebase --onto new_branch old_branch branch_you_are_moving
```

#### Turn off the pager

Add `--no-pager` to a command

#### Restore a Deleted File

```bash
  git checkout [removed commit]^ -— [path to flle]
```

#### Delete Branches

```bash
  # Delete a local branch:
  git branch -d my_local_branch

  # Delete a remote branch:
  git push origin --delete my_remote_branch
```

#### Show which Remote Branch

This shows which remote branch you are tracking and how far behind your local version is from the remote.

```bash
  git branch -vv
```

#### Push changes, then revert locally

This will allow you to push up a feature branch and then revert your local changes to see the diff.

```bash
  git push origin my_feature_branch

  # Revert changes so you can see the diff (locally):
  git reset HEAD~
```

#### HEAD

HEAD is the most recent commit on your present branch.

#### Checkout Previous Commit

This will put you in a detached HEAD state.

```bash
  git checkout [hash of previous commit]
```

#### Checkout Remote Branch

```bash
  git fetch origin
  git checkout -b my_branch_name orgin/my_branch_name

  # or:

  git fetch
  git checkout my_branch_name

  # if we have local branch with same name do
  # this to prevent conflicts with the local branch:

  git fetch origin
  git checkout --track origin/my_branch_name
```

#### Git Reset

```bash
  git reset --soft HEAD^3

  "'mixed' is the default if you run `git reset`:
  git reset --mixed HEAD^3

  git reset --hard HEAD^3
```

- --soft (keeps staged changes)
- --mixed (changes present, not staged)
- --hard (does not preserve uncommitted changes)

#### Edit Commit Message

```bash
  git commit --amend
```

#### Revert a file to state at previous commit

```bash
  git checkout -- my_file.txt
```

#### Commit Messages

Try to use present tense for your commit message (i.e. "**Add** new class for students" not: "Added new class for students")

```bash
  git commit -m "Correct site map"
```

#### Pick Files to Stash

```bash
  git stash -p
```

#### Show File in Stash

```bash
  git stash show stash@{0}
```

#### Checkout a file that is stashed

```bash
  git checkout stash@{0} -- path/to/file
```

#### Revert Uncommitted Changes

Leaving out the `stash@{2} variable below will run the stash command on top stash on the stack.

```bash
  git stash apply stash@{1}
  git stash drop stash@{2}
```

#### Retrieve a stashed file

```bash
  git checkout [name of stash] -- [filename]
```

#### Stash all files (including files in .gitignore)

```bash
  git stash --all
```

#### Stash tracked and untracked files

```bash
  git stash save --include-untracked
```

#### Revert One File

```bash
  git checkout -- path/to/file.txt
```

#### Show Files in Commit

```bash
  git diff-tree --no-commit-id --name-only -r [commit hash]
```

#### Show Diff in Staged Files

```bash
  git diff --staged
```

#### Rename a Local Branch

```bash
  git branch -m &lt;oldname&gt; &lt;newname&gt;
```

#### Move Remote PR Branch Locally

```bash
  git fetch origin pull/ID/head:BRANCHNAME
```

#### Saves Current Changes with Stash

```bash
  git stash
  or:
  git stash save "Name for the stash"
```

#### Files in stash

```bash
  git stash list --stat
```

#### Show files in stash

```bash
  git stash show stash@{2}
```

#### Remove all stashes

```bash
  git stash clear
```

#### Restores Most Recently Stashed Changes

This command will run `git stash apply` and then `git stash drop`.

```bash
  git stash pop
```

#### List Stashes

```bash
  git stash list
```

#### Restore Specific Stash

```bash
  git stash pop stash@{3}
```

#### Create and switch to branch

```bash
  git checkout -b new_branch_name
```

#### Show Remote Branches

```bash
  git branch -r
```

#### Delete local branch

```bash
  git branch -d local_branch_name
```

#### Git Tags

```bash
  # show all tags
  git tag
  # checks out the code with this tag
  git checkout [name of tag]
  # adds a tag
  git tag -a [tag name] -m tag description]
  # pushes tags
  git push --tags
```

#### Show Diffs

```bash
  git diff HEAD^ (parent)
  git diff HEAD^^ (grandparent)
  git diff HEAD~6 (six commits ago)
```

#### Compare Commits

```bash
  git diff HEAD^..HEAD
  git diff 58786f..98f7f0
  git diff master another_branch
```

#### Stop tracking in Repo

```bash
  git rm --cached errors.txt
```

#### Remove one file from `git add`

```bash
  git reset HEAD &lt;file&gt;
```

#### Remove files added with `git add .`

```bash
  git reset
```

#### Restore a deleted file

```bash
  # First find the hash:
  git reflog
  git log --walk-reflogs (more detail)

  # Then:
  git reset --hard 7980f
  # or:
  git reset --hard HEAD@{1}

  # Create a new branch with reflog hash:
  git branch [new branch name] 890fs4
  or:
  git branch [new branch name] HEAD@{1}
```

#### Clone a local repo as a backup

```bash
  git clone local_repo local_repo_backup
```

#### Rewrite History

Once a file is added to git (after the commit) it is permanently in the repo. The only way to remove it is to rewrite history. However, do this with extreme care! Make a backup of your code first with `clone`.

```bash
  git filter-branch --tree-filter 'rm -f old_file.sh -- --all'

  # or you can just remove the file from the repo:
  git filter-branch --index-filter 'git rm --cached --ignore-unmatch old_file.sh'

  # Sometimes when you re-write you will get empty commits, to delete these do:
  git filter-branch -f --prune-empty -- --all
```

#### Commit Order Differences

Order from top to bottom:

```bash
  git log (newest to oldest)
  git rebase -i HEAD~3 (oldest to newest)
```

#### Roll back previous commit (preserving file changes)

```bash
  git reset --soft HEAD~1
  or
  git reset --soft HEAD^
```

#### Cherry Pick

```bash
  git cherry-pick 97589f

  # Edit Commit:
  git cherry-pick --edit 987df0

  # Combine two commits:
  git cherry-pick --no-commit 9876f 78979f
  git commit -m "Combine two commits"
```

#### Add file to last commit

```bash
  git add newfile.sh
  git commit --amend -m "Add file to repo"
  or:
  git commit --amend --no-edit
```

#### Roll back previous commit (discarding file changes)

```bash
  git reset --hard HEAD~1
  # or:
  git reset --hard HEAD^
  # or the two previous  commits:
  git reset --hard HEAD^^
```

#### Add Remote

```bash
  git push -u origin master
  git push -u [the name] [the branch]
  # After using '-u', you can use use `git push` next time:
  git push
```

#### Revert a Commit

```bash
  git revert [the commit hash you want to revert]
```

#### How Git Pull Works

When you run `git pull`, you are actually performing a series of commands:

- Updates the local origin/master branch by fetching updates from the origin with: `git fetch`.
- Then the newly updated local origin/master is merged into the local master with: `git merge origin/master`.

Therefore, just running a `git fetch` will pull down all of the updated code from the origin, but it will not merge any of this with the local master.

#### Rebase (run from feature branch)

```bash
  git rebase master
```

#### Interactive Rebase (the last 4 commits)

Using 'squash' will combine this commit in with the previous commit.

```bash
  git rebase -i HEAD~4
```

### <a id="github"></a>GitHub

#### Close an Issue With a Commit
You can add a number to your commit message to close that particular commit. I have included an example commit below.
```bash
Addressing the problems with the latency. Closes #4.
```

### <a id="javascript"></a>JavaScript

#### Capitalize Function

```javascript
var cap = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
```

#### Destructuring

```javascript
// Object Destructuring:
let foods = {
  vegetable: "spinach",
  fruit: "apple",
  nut: "almond",
};
const { vegetable, fruit } = foods;

// Array Destructuring:
let dirty_dozen = [
  "Strawberries",
  "Spinach",
  "Nectarines",
  "Apples",
  "Peaches",
  "Pears",
  "Cherries",
  "Grapes",
  "Celery",
  "Tomatoes",
  "Sweet bell peppers",
  "Potatoes",
];

const [one_item] = dirty_dozen;
```

#### Only display content when JavaScript is enabled

```javascript
document.getElementsByTagName("body")[0].className += " js";
```

```css
/* Only set when JavaScript is enabled in browser: */
body.js .only-js {
  border: 1px solid #a0a0a0;
  display: block;
  ...;
}
```

#### ES2015 Function Syntax

```javascript
const output_log = () => {
  alert("This is an example.");
};
```

```javascript
const add_nums = (x, y) => {
  return x + y;
};
```

#### Detect Keyboard Input

<p data-height="265" data-theme-id="dark" data-slug-hash="vZjKVr" data-default-tab="css,result" data-user="joshayoung" data-embed-version="2" data-pen-title="Detect Keyboard Input" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/vZjKVr/">Detect Keyboard Input</a> by Josh (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### Basic Class Structure

```javascript
  var Shape = function(sides) {
    this.sides = sides;
  }

  Shape.prototype.area = function() {
    calculate ...
  }

  var square = new Shape(4);
```

#### Immediately Invoked Function Expression (IIFE)

```javascript
  (function() {
  ...executed immediately
  })();
```

#### String Object vs Literal

A string literal is immutable.

```javascript
// String Object:
typeof new String(); // 'object'
var str = new String("Hello");
str.x = "World";
console.log(str.x); // Outputs 'World'

// String Literal:
typeof ""; // 'string'
```

### <a name='laravel'></a>Laravel

#### Basic Migration

```bash
  php artisan make:migration the_users_table --create=users
```

#### Refresh Auto Load Files

```bash
  composer dump-autoload
```

#### Run the Migrations

```bash
  php artisan migrate

```

#### Open Laravel Shell

```bash
  php artisan tinker
```

#### Create the Model along with the Migration

```bash
  php artisan make:model User -m
```

#### Create Controller

```bash
  php artisan make:controller UserController
```

#### Create Model, Controller, and Migration

```bash
  php artisan make:model User -mc
```

#### Create Resoureful Controller

```bash
  php artisan make:controller UsersController -r
```

### <a name='freebsd'></a>FreeBSD

#### Troubleshooting ZPool Drive Errors

```bash
  zpool status
  glabel status
  camcontrol devlist
  geom disk list

  # Grep for info on the drive in question:
  dmesg | grep ^da1 | less

  # Find the serial on the drive in question:
  camcontrol identify da1 | grep serial
```

#### Edit Hostname

```bash
  # Edit:
  vi /etc/rc.conf

  # Rename references to old hostname:
  vi /etc/hosts

  # Set the hostname
  hostname your-new-hostname

  reboot
```

#### Shutdown Server

```bash
  poweroff
  # or
  shutdown -p now
```

#### Show Version

```bash
  freebsd-version
```

#### Update OS

```bash
  freebsd-update fetch
  freebsd-update install
```

#### Ports

Ports are groups of 'make' files that allow software to be installed from source. They can be managed by 'portsnap'.

#### Packages

These packages are pre-compiled. They are similar to .deb or .rpm packages on Debian and RHEL respectively.

```bash
  # Package Info:
  pkg info

  # Install package:
  pkg install package_name

  # Update:
  pkg update

  # Upgrade:
  pkg upgrade

  # Uninstall package:
  pkg remove package_name
```

### <a name='slackware'></a>Slackware

#### Slackware Linux Commands

Use slackpkg to keep system updated.

```bash
  # Download slackpkg .tar.gz file with wget
  wget https://slackpkg.org/stable/slackpkg-2.60-noarch-1.tgz

  # Install slackpkg with 'installpkg'
  installpkg slackpkg-2.60-noarch-1.tgz

  # Uncomment and select a mirror:
  vi /etc/slackpkg/mirrors

  # Initialize slackpkg:
  slackpkg update

  # Install package
  slackpkg install package_name

  # Update to the latest slackpkg packages:
  slackpkg update
  slackpkg upgrade-all
```

### <a name='ubuntu-debian'></a>Ubuntu / Debian

Add or edit the lines below in this file `/etc/network/interfaces`.

```bash
  ...
  auto eth0
  iface eth0 inet static
  address 192.168.3.100
  netmask 255.255.255.0
  gateway 192.168.3.1
  broadcast 192.168.3.255
  dns-nameservers 192.168.3.1
  ...
```

#### Show Ubuntu Version

```bash
  lsb_release -a
  # or:
  cat /etc/*release
  # or:
  cat /etc/os-release
```

### <a name='centos-rhel'></a>CentOS / RHEL

#### Change Hostname

```bash
  hostnamectl set-hostname my-new-hostname
```

#### Show Version

```bash
  cat /etc/*release
```

#### Add Static IP

Add modify the entries below within: `/etc/sysconfig/network-scripts/ifcfg-eth0` (change IP addresses according to your network). The name for your network connection could differ from `ifcfg-eth0`.

```bash
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
```

### <a name='arch'></a>ARCH

#### Pacman Commands

```bash
  # Sync and Update:
  pacman -Syu

  # Install a package:
  pacman -S package_name

  # Remove a package:
  pacman -R package_name
```

#### Show Version

```bash
  lsb_release -a
```

### <a name='linux'></a>Linux

#### Init Systems

##### SystemD

Systemd is managed my 'systemctl'. To start sshd, we would run: `systemctl start sshd`.

##### Upstart

Upstart is managed by 'initctl'. To start sshd we would run: `initctl start sshd`. Upstart was invented as a replace for System V by Ubuntu.

##### System V (SysV)

To start sshd, we would run: '/etc/init.d/ssh start'. This was primarily used by older versions of Linux.

##### BSD Init

The BSD based init system is configured under /etc/rc.conf. To start sshd, we would run: '/etc/rc.d/sshd start'. BSD and Slackware use the BSD init system

#### Linux partition/format with Parted

```bash
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
```

#### Show Directory Size

```bash
  du -sh directory_path
```

#### 32 or 64 Bit OS:

```bash
  uname -m
  # or
  arch
```

#### Print Services Running on Port:

```bash
  lsof -i tcp:8000
```

#### SystemD

```bash
  # 'enable' will create a symbolic link so that the service starts on reboot
  # 'disable' will remove the symbolic link
  # 'is-active' will tell you if the service is running
  # 'is-enable' will tell you if it starts on boot
  systemctl [status, enable, disable, is-active, is-enabled start, restart, reload, stop] application.service
```

#### Scan a Folder for Viruses (ubuntu)

```bash
  sudo apt-get update
  sudo apt-get install clamav clamav-daemon

  # If you get an error here, it might be because freshclam is already running in the background:
  # This command will update the virus signatures:
  sudo freshclam

  # Scan a directory:
  clamscan -r —bell -i /path/to/directory
```

#### Change Username

If you want to switch user 'joe' to 'sally', below are the steps:

```bash
  usermod -l sally joe

  # Verify that the new user exists and the old one does not:
  id sally
  id joe

  # Swap out the new user's group:
  groupmod -n sally joe

  # Swap the home directory:
  usermod -d /home/sally -m sally

  # If the above command does not work, delete the old dir and re-create it:
  rm -rvf /home/joe
  mkhomedir_helper sally

  # If you search these two files, you should not see the 'joe' user/group:
  cat /etc/group | grep joe
  cat /etc/passwd | grep joe
```

#### Rsync

```bash
  rsync -avz --delete /original/folder/location /new/folder/location
```

#### Reload Bash Config

```bash
  source .bashrc
```

#### Check Drive for Errors

```bash
  # Health Summary:
  smartctl -H /dev/sdb
  # Time required to run HDD Test:
  smartctl -c /dev/sdb

  # Run Short Test:
  smartctl -t short /dev/sdb

  # Run Long Test:
  smartctl -t long /dev/sdb

  # Print Test Results Summary:
  smartctl -l selftest /dev/sdb

  # Print Details of Latest Test:
  smartctl -a /dev/sdb
```

#### Check Drive for Bad Blocks

```bash
  # Test for bad block:
  badblocks -vs /dev/sdb > badblocks_results.txt

  # Command with different options:
  badblocks -sw -t random /dev/sdb > badblocks_results.txt

  # If you get an error like: "Value too large for defined data type invalid end block ... must be 32-bit value"
  badblocks -sw -t random -b 4096 /dev/sdb > badblocks_results.txt
```

#### Correct Bad Blocks

```bash
  # ext(2/3/4) filesystem:
  e2fsck -l badblocks_results.txt /dev/sdb

  # other filesystems:
  fsck -l badblocks_results.txt /dev/sdb
```

#### Show Security Settings with `ls`

```bash
  ls -Z
```

#### Crontab

```bash
  *  *  *  *  *         command
  -  -  -  -  -
  |  |  |  |  |
  |  |  |  |  +---------------------- day of week (0 - 6) (0 - Sunday)
  |  |  |  +--------------------- month (1 - 12)
  |  |  +------------------- day of month (1 - 31)
  |  +------------- hour (0 - 23)
  +------------ minute (0 - 59)
```

#### Write ISO/IMG to Disk or USB

The command below could also be executed with 'bs=4M'.

```bash
  sudo fdisk -l
  sudo umount /dev/sdb
  sudo dd if=/path/to/iso/or/img of=/dev/sdb bs=1M status=progress && sync
  sudo eject /dev/sdb
```

#### Find Linux Version

##### Kernel:

```bash
  uname -mrs
```

##### Distribution:

```bash
  cat /etc/*-release
```

#### Prevent Command from Being Recorded in Terminal History

```bash
  <space> command
```

#### Logged In User History (last 10)

```bash
  last -10
```

#### Wipe HDD with 'dd' Command

```bash
  # With Zeros:
  dd if=/dev/zero of=/dev/sdb bs=1M status=progress && sync

  # With Random Data:
  dd if=/dev/urandom of=/dev/sdb bs=1M status=progress && sync
```

#### Terminal Calculator

```bash
  bc -l
```

#### System Uptime

```bash
  uptime
```

#### Clear Terminal

```bash
  CTRL + l
```

#### Extract a .tar File

```bash
  tar -xvf file.tar
```

#### Extract a .tar.gz File

```bash
  tar -xzvf file.tar.gz
```

#### Extract a .tar.bz2 File

```bash
  tar -xjvf file.tar.bz2
```

#### Finding a File

```bash
  find / -name [file name you are searching] 2> /dev/null
```

#### Bring Job Into the Foreground

```bash
  fg
```

#### Pause Job

```bash
  Ctrl + Z
```

#### Resume Paused Job in Background

```bash
  bg
```

#### Continue Execution after Shell Exit

```bash
  nohup ./script.sh &
```

#### List Background Jobs

```bash
  jobs
```

#### Start Program in Background

```bash
  ./script.sh &
```

#### Direct All Output to Log File

```bash
  ./script.sh 1> ~/tmp/log.txt 2> ~/tmp/log.txt &
```

#### Direct All Output to Null

```bash
  ./script.sh 1> /dev/null 2> /dev/null &
```

#### Run 256 Checksum

```bash
  sha256sum /the/path/to/file.iso
```

### <a name='mac'></a>Mac

#### Run 256 Checksum

```bash
  shasum -a 256 /the/path/to/file.iso
```

#### Change Time Machine Backup Frequency

The interval is set in seconds.

```bash
  defaults write /System/Library/Launch Daemons/com.apple.backupd-auto StartInterval -int 1800
```

#### Find IP

```bash
  ifconfig |  grep -oE "\w* \b([0-9]{1,3}\.){3}[0-9]{1,3}\b"
```

#### Flush DNS

```bash
  killall -HUP mDNSResponder
```

#### Write ISO/IMG to Disk or USB

The command below could also be executed with 'bs=4m'.

```bash
  diskutil list
  umount /dev/disk2
  dd if=/path/to/iso/or/img/file of=/dev/disk2 bs=1m && sync
  diskutil eject /dev/disk2
```

### <a name='node'></a>Node

#### NPM Packages Installed Globally:

```bash
  npm list -g --depth 0
```

### <a name='react'></a>React

#### Debugging data:

```javascript
<pre>{JSON.stringify(resource)}</pre>
```

#### Commenting out JSX:

```javascript
{
  /* <ReactComponent></ReactComponent> */
}
```

### <a name='mysql'></a>MySQL

#### Connect to Database

```bash
  mysql -u [username] -p [password] -h [hostname]
```

### <a name='netstat'></a>Netstat

#### Find Listening Port (Bash)

```bash
  netstat -nao | find "80"
```

#### Find Listening Port (Windows)

```bash
  netstat -nao | findstr "0.0.80"
```

### <a name='mysql'></a>MySQL

#### Connect to Database

```bash
  mysql -u [username] -p [password] -h [hostname]
```

### <a name='psql'></a>PostgreSQL

<Postgresql />

### <a name='kanban'></a>Kanban

<Kanban />

### <a name='python'></a>Python

#### Start Simple Server

```bash
  python -m SimpleHTTPServer
```

#### Start Simple Server with Python 3

```bash
  python -m http.server
```

### <a name='rails'></a>Rails

#### Connect to Already Running Rails Instance:

```bash
  rails server -P /app/tmp/pids/server.pid
```

#### Update Gems:

Updating gems that are in your lock file, but not in your Gemfile can be updated with `bundle update [gem name]`. The gem can be upgraded to the next patch version with `bundle update [gem name] --patch`.

Use `bundle update --help` for more info.

#### Start server on a different port:

```bash
  rails s -e development -p 2000
```

#### Start server on a different port with another pid file:

Sometimes when you are running a server on a different port, you will get an error having to do with the pid file (I forgot exactly what it says). Running a command such as the below will allow you to write to a different pid file.

```bash
  rails s -e development -p 2000 -P tmp/pids/srv2.pid
```

#### Start rails listening on your local IP address

```bash
  rails s -b 0.0.0.0
```

#### Inheriting Directly from ActionController::Base

Inheriting directly from: "ActionController::Base" instead of: "ApplicationController" will circumvent any code in your application_controller.rb file. Essentially it is like "skip running anything in the application_controller.rb file". "ApplicationController" inherits from "ActionController::Base".

#### Output image path from console

```bash
  ActionController::Base. \
  helpers.asset_path('image.jpg')

  # Or:
  include ActionView::Helpers::AssetUrlHelper
  asset_path('image.jpg')
```

#### Open Rails Database Console

```bash
  rails dbconsole
```

#### Clear Test Log File

```bash
  rails log:clear LOGS=test
```

#### Rails Controller Methods Are Typically Ordered

1. index
2. show
3. new
4. edit
5. create
6. update
7. destroy

#### Rollback in Steps

```bash
  rails db:rollback STEP=1
```

#### Show Migration Status

```bash
  rails db:migrate:status
```

#### Run Migrations on Test Database

```bash
  bin/rails db:migrate RAILS_ENV=test
```

#### Rails CRUD forms with no form plugin

[github.com/joshayoung/rails-basic-forms](https://github.com/joshayoung/rails-basic-forms)

#### Start Local Server

```bash
  rails server (rails s)
```

#### Start Local Server on any IP

```bash
  rails s -b 0.0.0.0
```

#### Start Local Server on different port

The default port is 3000 if unspecified.

```bash
  rails s -b 0.0.0.0 -P tmp/pids/srv1.pid
  rails s -b 0.0.0.0 -p 3001 -P tmp/pids/srv2.pid
  rails s -b 0.0.0.0 -p 3002 -P tmp/pids/srv3.pid
```

#### Active Record Errors

```ruby
  # Model validations:
  class Student
    validates :name, :grade, :act_score, presence: true
    ...
  end

new_student = Student.create(name: 'James', grade: '2nd.')

  # Show errors:
  new_student.errors

  # Show errors as sentences:
  new_student.errors.full_messages
```

#### Route Syntax

```ruby
  verb "the_url" => "controller#action"
  get "tickets" => "tickets#index"
  get "tickets/:id" => "tickets#show"
```

#### Open SQLite from Rails

```bash
  rails dbconsole
```

#### Show Rail Project Info

```bash
  rails about
```

#### Open Rails Console

```bash
  rails console
  or:
  rails c

  # reload the console to pull in any code changes made:
  reload!
```

#### Rails Tasks

```bash
  rails -T (commands than can be run)
  rails -T db (database related commands that can be run)
```

#### Create Migration

Older versions of rails used the 'rake' command instead of 'rails' below.

```ruby
  rails g migration [migration name] field:type field:type...

  rails db:migrate

  rails db:status

  rails db:rollback (rolls back the previous migration)

  rails db:migrate VERSION=XXX (rolls back to this migration)
```

#### Add More Columns

Using this convention, rails will know that you want to add the fields listed to the table defined by 'YYY' or 'yyy' below.

```bash
  rails g migration AddXXXToYYY ...
  rails g migration AddFieldsToTownships title:string moved_to:date

  rails g migration add_xxx_to_yyy
  rails g migration add_fields_to_townships
```

#### Show Rails Generators

```bash
  rails g
```

#### Create Scaffolding

```bash
  rails generate scaffold [name] attribute:type
```

```bash
  rails generate scaffold Product title:string price:decimal
```

#### Create Model (includes migration)

Model names should be singular.

String is the default type, so that can be left off if the type is a string.

[Column Types](http://api.rubyonrails.org/v5.2.0/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-add_column)

```bash
  rails generate model [model name] [field[:type][:index] field[:type][:index]] [options]

  # or:

  rails g model [model name] [field[:type][:index] field[:type][:index]] [options]

  # i.e.
  rails g model ticket title:string priority:string the_date:datetime

  # Run Migration:
  rails db:migrate

  # Migration Status:
  rails db:migrate:status
```

Example: A model named 'Student' would point to a table named 'students' by default.

#### Create Controller and View

Controller name is plural.

```bash
  rails generate controller [controller name]
  or:
  rails g controller [controller name]
```

#### Remove Controller and other files created above.

```bash
  rails destroy controller [controller name]
```

#### Basic Controller Methods

```ruby
  class TicketsController < ApplicationController
  def index; end
  def create; end
  def show; end
  def update; end
  def destroy; end
  end
```

#### Views

When you do not point the controller action to a specific view it will try to render the view with the same name as the action.

`def index; end` would try to render the `index.html.erb` view.

#### Create resourceful routes

This will create:

- Database migration for the 'students' table.
- The Student model with the 'belongs_to' line pointing to 'course'.
- A Student controller.
- All of the resourceful routes for student.

```bash
  rails g resource [resource name] field:type field:type...

  rails g resource student first_name:string last_name:string course:references
```

#### Show Routes

Show routes from the browser app by going to this path: http://[url of app][:port]/rails/info/routes.

```bash
  rails routes
  # or:
  rake routes
```

#### Resourceful Routes in route.rb

```ruby
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

  # This is actually the same thing as the above:

  Rails.application.routes.draw
    root "students#index"
    resources :students
  end
```

#### One-to-Many Nested Rotues in route.rb

```ruby
  get '/lists/:list_id/notes' => 'notes#index', as: 'list_notes'
  post '/lists/:list_id/notes' => 'notes#create'
  get 'lists/:list_id/notes/new' => 'notes#new', as: 'new_list_note'
  get '/lists/:list_id/notes/:id/edit' => 'notes#edit', as: 'edit_list_note'
  get '/lists/:list_id/notes/:id' => 'notes#show', as: 'list_note'
  patch 'lists/:list_id/notes/:id' => 'notes#update'
  patch 'lists/:list_id/notes/:id' => 'notes#update'
  delete 'lists/:list_id/notes/:id' => 'notes#destroy'
```

#### List of Resourceful routes

| Name         | Verb   | URL                | controller#action | Task                      | SQL\*\*                                                       |
| ------------ | ------ | ------------------ | ----------------- | ------------------------- | ------------------------------------------------------------- |
| students     | GET    | /students          | student#index     | Show Students             | SELECT \*                                                     |
|              | POST   | /students          | students#create   | Create a new Student      | CREATE                                                        |
| new_student  | GET    | /students/new      | students#new      | Show new Student form     | Display a HTML form                                           |
| edit_student | GET    | /students/:id/edit | students#edit     | Show edit Student form    | SELECT where id =                                             |
| student      | GET    | /students/:id      | students#show     | Show a Student            | SELECT where id =                                             |
|              | PATCH  | /students/:id      | students#update   | Update Student (partial)  | UPDATE tbl SET (name = 'Josh')                                |
|              | PUT    | /students/:id      | students#update   | Update Student (complete) | UPDATE tbl SET (name = 'Josh', day = 'Wed', state = 'AL' ...) |
|              | DELETE | /students/:id      | students#destroy  | Remove a Student          | DELETE                                                        |

\*\* There are exceptions to the SQL displayed here. These example serve as the most common implementations in my experience.
Each of the 'name's listed in the table above is appended with either '\_url' or '\_path' in rails.
In the rails app, use '\_path' for your views and '\_url' for controller redirects.

##### \_url (full path to page)

- i.e. students_url: http://www.joshyoung.me/students
- i.e. student_url(4): ttp://www.joshyoung.me/students/4

##### \_path (relative path to page)

- i.e. students_path: /students
- i.e. student_path(4): /students/4

#### Naming

By convention the name of the model is singular and the name of the table is plural.

#### Create New Table Entry

```ruby
  township = Township.new
  township.city = 'London'
  township.country = 'England'
  township.save

  # Or:

  township = Township.new(city: 'London', country: 'England')
  township.save

  # Or:

  Township.create(city: 'London', country: 'England')
```

#### Update Table Value

```ruby
  township = Township.find(2)
  township.city = 'London'
  township.country = 'England'
  township.save

  # or:

  township.update(city: 'London', country: 'England')
```

#### Delete Table Value

```ruby
  township = Township.find_by(city: 'Jacksonville')
  township.destroy
```

#### One-to-Many Relationships

```ruby
  # One (parent):
  class Student < ApplicationRecord
    has_many :movies
  end

  # Many (has a foreign key to reference parent):
  class Movie < ApplicationRecord
    belongs_to :student
  end
```

```ruby
  # Setup the cascade to delete movies, then the student it removed:
  class Student < ApplicationRecord
    has_many :devices, dependent: :destroy
  end
```

Generate the relationship:

```bash
  rails g resource Device name:string student:references
```

##### One (parent):

| students |       |     |
| -------- | ----- | --- |
| id       | name  | age |
| 1        | Frank | 35  |
| 2        | Sally | 28  |

##### Many (child):

| devices |        |            |
| ------- | ------ | ---------- |
| id      | name   | student_id |
| 1       | iPhone | 2          |
| 2       | iPad   | 2          |
| 3       | Laptop | 3          |

In the above example, 'student_id' is a foreign key pointing to the 'id' field in the 'students' table.
The foreign key will always be the parent's table name in singular form (student) with an '\_id' appended to the end. So in this case it is 'student_id' since the parent table is 'students'.

In the ruby console, **student.devices** would return all of the devices that student possesses. On the other hand, **device.student** would return the student who is the owner of the device selected.

#### Many-to-Many Relationships

```ruby
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
```

| students |       |     |
| -------- | ----- | --- |
| id       | name  | age |
| 1        | Frank | 35  |
| 2        | Sally | 28  |

| devices |        |            |          |
| ------- | ------ | ---------- | -------- |
| id      | name   | student_id | color_id |
| 1       | iPhone | 2          | 1        |
| 2       | iPad   | 2          | 1        |
| 3       | Laptop | 1          | 2        |

| colors |        |
| ------ | ------ |
| id     | color  |
| 1      | Green  |
| 2      | Blue   |
| 3      | Silver |

### <a name='ruby'></a>Ruby

#### Write to file from command line:

```ruby
  f = File.new('log.txt', 'w')
  f << log_this_variables_value
  f.close
```

#### Output just a class' own methods

```ruby
  klass = Klass.new

  puts klass.methods - methods
```

#### Loads IRB With Active Support

```bash
  !rails c
```

#### Struct

```ruby
  # With Struct you can only define
  # the attributes at object creation
  Student = Struct.new(:name, :grade)
  george = Student.new('george', 95)

  # Outputs: 'george'
  puts george.name

  # Outputs: 95
  puts george.grade
```

#### OpenStruct

```ruby
  require 'ostruct'
  george = OpenStruct.new(name: 'george', grade: 95)

  # Outputs: 'george'
  puts george.name

  # Outputs: 95
  puts george.grade
```

#### Open documentation for project's gems

```ruby
  gem serve
```

#### Install to global gemset (when using rvm)

```bash
  rvm @global do gem install [gem name]
```

#### Empty Method Returns Nil

```ruby
  def find_grade; end
  grade = find_grade

  # Outputs nil:
  puts grade
```

#### Naming

```ruby
  # Class is a Noun:
  class Cards
    # Module is an Adjective:
    include Shuffleable
  end
```

#### Ranges

```ruby
  # Inclusive:
  5..10
  # Exclusive:
  5...10
```

#### Find Methods

```ruby
  cat.private_methods
  cat.public_methods
  cat.protected_methods
  cat.singleton_methods

  Cat.private_instance_methods
  Cat.protected_instance_methods
  Cat.public_instance_methods
```

#### Syntactic Sugar

At the end of the day, the operators we know like `+`, `-`, etc are actually methods in ruby. So these two will do the same thing:

```ruby
  y = 5 + 6;
  y = 5.+(6)
```

#### Methods and Code Blocks

By default all methods will accept a code block. However, they will not yield to the block unless the method includes a `yield` keyword.

```ruby
  # These are both valid ways to call a method:
  my_method
  my_method { puts "Test" }
  my_method() { puts "Test" }
```

#### Accept Multiple Arguments

```ruby
  def lots_of(*a)
  end

  # Outpus: [1, 2, 3, 4]
  puts lots_of(1, 2, 3, 4)
```

#### Multiline Comment

```ruby
=begin
  def a_function
  puts 'test'
  end
=end
```

#### Ruby Symbol vs Strings

Symbols have the same object ID whereas strings do not.
Symbols are immutable and strings are mutable.

```bash
  # Open irb:
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
```

#### Ruby Class Properties

```ruby
  class RubyStudent
    # readable only:
    attr_reader :name

    # writable only:
    attr_writer :name

    # readable and writable:
    attr_accessor :grade

    def initialize
      @name = 'Josh'
      @grade = 'a'
    end

    # Override the attr_accessor method in your class:
    def grade=(my_grade)
      @grade = my_grade.upcase
    end
    ...
  end

  rstudent = RubyStudent.new

  # Call the accessor method:
  puts rstudent.name
```

#### Static Methods

```ruby
  class RubyStudent
    def self.my_method
      ...
    end
  end

  # Call static method:
  RubyStudent.my_method
```

#### Multiple Static Methods

```ruby
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

  # Call static method:
  RubyStudent.my_method
  RubyStudent.my_second_method
```

#### Ruby Modules

Modules are a typically used to create reusable sections of code in the form of Mixins or they can be used to wrap classes thereby action as a Namespace.

Modules cannot be instantiated, so any methods have to be defined with self.

```ruby
  module Learnable
    ...
    def self.calculate
      ...
    end
  end

  # Call the Module method:
  Learnable::calculate
  # or
  Learnable.calculate
```

#### Ruby Class Inheritance

Use inheritance when two class have a 'is-a' relationship. For instance: a MathStudent is a type of Student and a Fox is a type of Animal.

```ruby
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

  # Prints 'A+':
  student.print_grade
```

#### Ruby Namespace

```ruby
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
```

#### Ruby Mixins

Ruby Mixins are just ruby modules that are included within a class.

```ruby
  # If a module will be included in a class as a mixin, you do not have to define the method with self.
  # This way you can call the module method with the class instantiation.

  # File 'learnable.rb'
  module Learnable
    def calculate(num1, num2)
      num1 * num2
    end
  end

  # File: student.rb
  require_relative 'learnable'
  class Student
    include Learnable

    def add_up(n1, n2)
      calculate(n1, n2)
    end
  end

  student = Student.new
  puts student.calculate(2, 2)
```

When you define a mixin, if you know what class it will be included within, you can use class properties in the Module definition, like below:

```ruby
  module Learnable
    def calculate(num1, num2)
      @first_number = 10
    end
  end
```

However, doing so could cause problems if you ever include the module within a class that does not define '@first_number'. Therefore it is best to use the class access within the module methods, like so:

```ruby
  module Learnable
    def calculate(num1, num2)
      #Here we have to use 'self' otherwise the module will think it is defining a local variable.
      self.first_number = 10
    end
  end
```

Then when this is included in a class, it will work like this:

```ruby
  require_relative 'learnable'
  class Student
    include Learnable

    attr_accessor :first_number

    def initialize
      calculate(2, 2)
    end
  end

  puts Student.new.first_number
```

#### Unless vs If

```ruby
  # Prints 'false unless':
  unless false
    puts 'false unless'
  end

  # Prints 'false unless':
  puts 'false unless' unless false

  # Prints 'false if':
  if !false
    puts 'false if'
  end

  # Prints 'false if':
  puts 'false if' if !false
```

#### Memoization

```ruby
  # If 'x' is false or nil return the value of 'y',
  # otherwise return the value of 'x':
  x ||= y

  # The first time through it will call the 'find_the_pizza' method.
  # For subsequent calls it will return '@pizza'.
  def pizza_special
    @pizza ||= PizzaSpecial.find_the_pizza('cheese')
  end
```

#### When You Must Use 'self'.

##### For assigning values with the accessor method from within a class:

```ruby
  class Animal
    attr_accessor :tail

    def change_tail(new_tail)
      # To get this to work as expected, you would have
      # to change the line below to use 'self'
      tail = new_tail

      # Change to this:
      # self.tail = new_tail

      # If you do not use 'self' as shown above, ruby
      # thinks you are assigning to a local variable.

      # This works without 'self' because ruby knows that there is no local
      # variable titled 'tail' therefore it knows to return the value from the
      # accessor method:
      def send_tail
        tail
      end
    end
  end

  the_tail = Animal.new
  the_tail.tail = 'Brown'
  the_tail.change_tail('light brown')

  # This would output 'Brown'.
  puts the_tail.tail
```

##### For defining 'class methods' (a.k.a. Static Methods):

```ruby
  class Student
    def self.new_grade(grade)
      @grade = grade
    end
  end

  Student.new_grade('A')
```

#### Convenient Methods

```ruby
  class Test
  ...
  end

  # Prints: Test
  puts Test.inspect

  # Prints: Class
  puts Test.class

  # Prints: 89023478923
  puts test.object_id
```

#### Show Ancestors

```ruby
  # In a file named 'my_module.rb':
  module MyMod
    ...
  end

  # In another class:
  require_relative 'my_module'
  class Test
    include MyMod
    ...
  end

  # Prints: [Test, MyMod, Object, Kernel, BasicObject]
  puts Test.ancestors
```

#### Function Return

Functions always return a value even if they are empty.

```ruby
  def empty_function; end

  return_value = empty_function

  # Prints 'nil':
  puts return_value.inspect
```

#### Ruby Convert Types

```ruby
  a_string = 'a string value'

  # Convert to Symbol:
  a_string.to_sym

  # Convert to String:
  123.to_s

  # Convert to Integer:
  "123".to_i
```

#### Look up Ruby Docs from command line

[Online Documentation](http://ruby-doc.org)

```bash
  ri
  # or:
  ri -i (for interactive mode)
```

#### Interpolate code

```ruby
  variable_value = 'test'
  puts "Print out #{variable_value}"
```

#### Start IRB Session

```bash
  irb
```

#### If/Else Statement

```ruby
  if a_value == 1
  puts "Yes"
  elsif a_value == 2
  puts "No"
  else
  puts "Could not find."
  end
```

#### Switch Statement

```ruby
  the_value = return_a_string()

  case the_value
  when "One"
    puts "It is one!"
  when "Two"
    puts "It is two!"
  else
    puts "Could not find result."
  end
```

#### Objects

Ruby objects are always passed by reference

#### Function

```ruby
  def function_name(parameter)
    ...
  end
```

#### Add to Array

```ruby
  the_array << "val"

  # Or:
  the_array.push("val")
```

#### Object Instantiation

```ruby
  new_obj = Person.new
```

#### Iteration

```ruby
  array.each do |elem| ... end
```

#### Custom Iteration

```ruby
  # Example 1:
  def output
    yield
    yield
  end

  output { puts "This is output twice" }

  # Example 2:
  def output_num
    yield(100)
    yield(200)
  end

  output_num { |num| puts num }
```

#### Basic Blocks

```ruby
  2.times { puts 'Josh' }

  2.times do
    puts 'Josh'
  end

  2.times { |i| puts "#{i} - Josh" }

  2.times do |i|
    puts "#{i} - Josh"
  end
```

#### Select Block

```ruby
  # Returns just the numbers greater than '3':
  [1, 2, 3, 4, 5, 6, 7, 8, 9].select { |n| n > 3 }
```

#### Reject Block

```ruby
  # Rejects the numbers greater than '3':
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reject { |n| n > 3 }
```

#### Reduce Block

```ruby
  # Gets the sum with the reduce method:
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce { |total, n| total + n }
  # or:
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce (:+)
```

#### Sort Lowest to Highest

```ruby
  [11, 21, 73, 14, 95, 56, 97, 48, 19].sort
```

#### Sort Highest to Lowest

```ruby
  [11, 21, 73, 14, 95, 56, 97, 48, 19].sort { |a, b| b <=> a }
```

#### Returns boolean if it finds the result

```ruby
  # This should return false.
  [11, 21, 73, 14, 95, 56, 97, 48, 19].any? { |n| n > 100 }
```

#### Returns the first match

```ruby
  # This should return 73.
  [11, 21, 73, 14, 95, 56, 97, 48, 19].detect { |n| n > 70 }
```

#### Map the values returned into a new array

```ruby
  [11, 21, 73, 14, 95, 19].map { |n| n * 3 }
```

#### Hash (associative array / dictionary)

```ruby
  {key => value}
```

```ruby
  {:sport => "baseball"} (the key can be anything)
```

These are both the same:

```ruby
  {:sport => "baseball", :time_limit => 60}

  # Or:
  {sport: "baseball", time_limit: 60}
```

#### Loop through a hash

```ruby
  sports = {:sport => "baseball", :time_limit => 60}
  sports.each { |key, val| puts "#{key} - #{val}" }
```

### <a name='sqlite'></a>SQLite

#### Execute a Single Query

```bash
  sqlite3 -line mydatabase.sqlite3 "select * from students"
```

#### Select Databse

```bash
  \c [database]
```

#### Connect to DB

```bash
  sqlite3 /path/to/database_file.db
```

#### Show databases

```bash
  .database
```

#### Show tables

```bash
  .tables
```

#### Tables Schema

```bash
  .schema table_name
```

#### Describe Table

```bash
  pragma table_info(table_name)
```

#### Select all

```bash
  select * from table_name
```

#### Exit SqLite Command Prompt:

```bash
  .quit
```

### <a name='security'></a>Security

#### Ping Sweep

```bash
  for i in `seq 1 255`; do ping -c 1 [IP ADDRESS].$i ; done
```

### <a name='testing'></a>Testing

#### Rspec Fail on First Error

```bash
  rspec --fail-fast
```

#### Rspec with Documentation

```ruby
  rspec -f d
```

#### Test File Setup

We have a space between each part below.

```ruby
  # Setup:
  user = create(:user)

  # Exercise:
  Student.addToClass(user)

  # Verify:
  expect(Student.users).to eq([user])
```

### <a name='ssh'></a>SSH

#### Remote Port Forwarding

Here **9100** is the remote port and **22** is the remote port.

```bash
  ssh -R 9100:127.0.0.1:22 username@192.168.6.7
```

#### Generate a SSH and transfer it to a server

```bash
  ssh-keygen -t ed25519 -C “key_name”
  ssh-copy-id -i ~/.ssh/key_name.pub 192.168.1.100
```

#### Connect with a specific key

```bash
  ssh -i ~/.ssh/key_name user@192.168.1.100
```

#### Local Port Forward

In this case, **9100** would be our local port and **80** would be the remote.

```bash
  ssh -L 9100:www.remotesite.com:80 username@host
```

### <a name='svg'></a>SVG

#### SVG viewBox

The viewBox has values of x, y, width, and height. The shapes within this box will be set in relation to the size of the viewBox. The viewBox location within the SVG tag can be offset with the first two numbers (x, y).

In the CodePen below below, you can see that the first and last example are consuming 100% of the width of the viewBox. When the screen is expanded or contracted, the elements within expand or contract accordingly, but always consume 100% of the size of the viewBox because the elements inside are sized to contain 100% of the viewBox width.

The middle example below internal shapes that total to less than the full width of the viewBox. The viewBox is also shifted from a starting point of 0,0 to demonstrate that the view box can be positioned anywhere within the contining SVG element.

To adjust the size of the SVG, you can set the outer containing `SVG` tag to be a certain percentage of the width of the browser window or even a fixed width. Within this the inner viewBox can be positioned within it.

<p data-height="265" data-theme-id="0" data-slug-hash="xzgvKX" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="SVG viewBox" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/xzgvKX/">SVG viewBox</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### SVG Links

<p data-height="265" data-theme-id="0" data-slug-hash="xzgodE" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="SVG Symbol" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/xzgodE/">SVG Symbol</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### SVG Elements

<p data-height="265" data-theme-id="0" data-slug-hash="wXgNvg" data-default-tab="html,result" data-user="joshayoung" data-embed-version="2" data-pen-title="SVG Stuff" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/wXgNvg/">SVG Stuff</a> by Josh Young (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### Set SVG to Scale with Browser Width

By default an SVG element will take up the full width of the browser unless it has a defined width. To circumvent this, you can give it a definined with such as 300px or a percentage. Below is an example of a way to set the SVG element to be half of the browser width.

If the SVG tag is set to scale with the browser width, the SVG shapes within the internal viewBox will scale accordingly.

```css
svg {
  height: auto;
  // This could be any percentage:
  width: 50%;
}
```

### <a name='rubymine'></a>RubyMine

<Rubymine />

### <a name='intellij'></a>IntelliJ

- Context menu to add class components
  - **CMD + N**

### <a name='scp'></a>SCP

#### Local to Remote

```bash
  scp file.txt username@host:/to/myremote/directory
```

#### Remote to Local

```bash
  scp username@host:file.txt /to/my/local/directory
```

#### Backup Local Folder to Remote

```bash
  scp -r local_folder/ user@host:/path/to/folder
```

#### Backup Folder Remote to Local

```bash
  scp -r user@host:/path/to/folder/* /to/my/local/directory/
```

### <a name='security'></a>Security

#### Nmap Ping Scan (detect hosts)

```bash
  nmap -sP 192.168.1.0/24
```

#### Bypass a Self-Signed SSL Warning in Chrome

Once you get the warning in the webpage, to continue to the site anyway, type: `thisisunsafe`.

#### Bash Ping Sweep

#### Usage: **./sweep.sh 192.168.1**

```bash
  #!/bin/bash
  ip=$1
  for i in `seq 0 1 255`; do
    ping -c 3 -t 5 $ip.$i > /dev/null 2>&1 && echo $ip.$i is up;
  done
```

### <a name='php'></a>PHP

#### GET/POST Assignment

```php
  $var = isset($_GET['var']) ? $_GET['var'] : '';
```

### <a name='tmux'></a>TMUX

<TMUX />

### <a name='vim'></a>VIM

<VIM />

### <a name='vs_code'></a>VS Code

<VSCode />

### <a name='windows'></a>Windows

#### Switch to C Drive

```bash
  cd /d C:
```

#### Flush DNS

```bash
  ipconfig /flushdns
```

#### All Network Info

```bash
  ipconfig /all
```

### <a name='yarn'></a>YARN

#### Update all packages in `packge.json` to the lates version with:

```bash
  yarn upgrade
```

Upgrade to specific versions with:

```bash
  yarn upgrade package@version
```

Reference: [yarn upgrade](https://classic.yarnpkg.com/en/docs/cli/upgrade)

#### Package Version (exclude dependencies)

```bash
  yarn list --depth 0 | grep [package name]
```

#### Show why a package was installed:

```bash
  yarn why
```

### <a name='zfs'></a>ZFS

#### ZFS Pool Status

```bash
  zpool status -v

  zpool history

  # List Datasets:
  zfs list

  # Display all information about all datasets:
  zfs get all

  # Mount filesystem:
  zfs mount /mount_location
```

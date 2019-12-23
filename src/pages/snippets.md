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

<Bash />

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
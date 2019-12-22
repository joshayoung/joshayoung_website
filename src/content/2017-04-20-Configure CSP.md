---
layout: portfolio_entry
title: Configure CSP
description: Setting up and configuring Content Security Policy (CSP).
date: 2017-04-20
excerpt_separator: <!--more-->
tags: Security CSP
---

After recently learning about Content Security Policy (CSP), I decided to implement it on this site. For the uninitiated, CSP is essentially a way to lock down which scripts, styles, images, etc are allowed to run on your site. This was implemented in an effort to prevent security issues such as Cross Site Scripting (XSS) attacks. 

<!--more-->

If you have more control over your site's hosting, you should be able to setup CSP by configuring the header values that are sent with each request. Since I host this site on GitHub pages, I am unable to specify header values. For these types of situations, you can set CSP values with a `meta` tag on your site. Below, I have displayed the CSP that I used on this site, as of the writing of this post.

```html
<meta http-equiv="Content-Security-Policy"
content="default-src 'none';
img-src 'self';
script-src 'self' https://ajax.googleapis.com 
'sha256-O17JreqETM2ckomgHPckX1pb7B0hzmavSQor2MpT8oU=' 
'sha256-jzxr9xIKu3BOjQ4S2MfeDFmOYaBid7HGKUMtTGBL0Ls=';
style-src 'self' https://fonts.googleapis.com;
font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
connect-src 'self'">
```

As you can see, by default I am allowing nothing to load that is not specified via the `default-src 'none'` declaration. Then I am allowing images to load from the local site by using the `self` keyword. I decided to keep two declarations inline. To allow this to work, I had to include that script's sha256 hash in the `script-src` list. I also had to list other scripts that are loading styles and fonts as well. To allow local `XHRHttpRequests`, I used the `content-src 'self'` tag.

If you decide to implement Content Security Policy on your site, here are a few helpful resources that I used:

* [Implementing Content Security Policy](https://hacks.mozilla.org/2016/02/implementing-content-security-policy)
* [Content Security Policy Cheat Sheet](https://www.owasp.org/index.php/Content_Security_Policy_Cheat_Sheet)
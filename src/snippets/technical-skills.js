import React from "react"
import { css } from '@emotion/core';

const TechnicalSkills = () => (
  <div css={css`
    ul {
      margin-left: 0;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      &:last-child {
        border-bottom: none;
      }
      li {
        flex: 0 1 auto;
        padding: 0 6px;
        font-size: pxToRem(12px);
        padding: 0 pxToRem(6px);
        &:first-of-type {
          font-weight: bold;
          color: $dark_green;
          &:after {
            content: ': ';
          }
        }
      }
    }
  `}>
    <ul className='tech-skills'>
      <li>Server Technologies</li>
      <li>Apache</li>
      <li>IIS</li>
      <li>Nginx</li>
      <li>MS Servers 2008/2012</li>
      <li>Linux (Debian/Red Hat/CentOS)</li>
      <li>FreeBSD</li>
    </ul>
    <ul className='tech-skills'>
      <li>Operating Systems</li>
      <li>Windows 7/8/10</li>
      <li>Mac</li>
      <li>VMware</li>
      <li>Linux (Arch, Fedora, Ubuntu)</li>
    </ul>
    <ul className='tech-skills'>
      <li>Networking</li>
      <li>TCP/IP</li>
      <li>Routing/Switching</li>
      <li>VLANs</li>
      <li>DNS</li>
      <li>DHCP</li>
      <li>SSH</li>
      <li>(S)FTP</li>
      <li>TLS</li>
    </ul>
    <ul className='tech-skills'>
      <li>Programming Languages</li>
      <li>PHP</li>
      <li>Ruby</li>
      <li>C#</li>
      <li>Perl</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>ES2015</li>
      <li>Ruby</li>
      <li>Bash/Batch</li>
      <li>Objective C</li>
    </ul>
    <ul className='tech-skills'>
      <li>Frameworks</li>
      <li>Rails</li>
      <li>Laravel</li>
      <li>ASP.NET</li>
      <li>CoffeeScript</li>
      <li>Bootstrap</li>
      <li>SASS</li>
      <li>Gulp</li>
      <li>Webpack</li>
      <li>CodeIgniter</li>
      <li>React</li>
    </ul>
    <ul className='tech-skills'>
      <li>Design</li>
      <li>Sketch</li>
      <li>Photoshop</li>
      <li>Gimp</li>
      <li>Balsamiq Mockups</li>
    </ul>
    <ul className='tech-skills'>
      <li>Databases</li>
      <li>MySQL</li>
      <li>MS SQL</li>
      <li>Oracle</li>
      <li>SQLite</li>
      <li>NoSQL (MongoDB)</li>
      <li>PostgreSQL</li>
      <li>Firebase</li>
      <li>Normalization</li>
    </ul>
    <ul className='tech-skills'>
      <li>Markup Languages/Protocols</li>
      <li>HTTP(S)</li>
      <li>XHTML/HTML5</li>
      <li>Markdown</li>
      <li>CSS</li>
      <li>XML</li>
      <li>SVG</li>
      <li>REST</li>
      <li>JSON</li>
      <li>YAML</li>
      <li>SASS</li>
    </ul>
    <ul className='tech-skills'>
      <li>Security</li>
      <li>NMAP</li>
      <li>Kali Linux</li>
      <li>Wireshark</li>
      <li>Vulnerability Scanning</li>
      <li>Enumeration</li>
      <li>Footprinting</li>
      <li>Web Security and Testing</li>
    </ul>
  </div>
);

export default TechnicalSkills;
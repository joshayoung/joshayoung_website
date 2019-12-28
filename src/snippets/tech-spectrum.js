import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const SmallTable = styled.table`
  position: absolute;
  top: 20px;
  right: 100px;
  border: none;
  min-width: 220px;
  &.cert_class {
    right: 400px;
    min-width: 145px;
    tr:nth-child(1) td {
      background: #404040;
      color: #fff;
    }
    tr:nth-child(2) td {
      background: #a6a6a6;
    }
  }
  td {
    background: none;
    padding: 6px 16px;
  }
  tr:nth-child(1) td {
    background: #d2143a;
  }
  tr:nth-child(2) td {
    background: #FF7F50;
  }
  tr:nth-child(3) td {
    color: #fff;
    background: #751aff;
  }
  tr:nth-child(4) td {
    color: #fff;
    background: #0080ff;
  }
  tr:nth-child(5) td {
    background: #00e600;
  }
  tr:nth-child(7) td {
    background: #404040;
    color: #fff;
  }
  tr:nth-child(8) td {
    background: #a6a6a6;
  }
`;

const SkillSpectrum = styled.table`
  width: 100%;
  border: none;
  margin-top: 20px;
  font-size: 11px;
  td {
    border: 1px solid #ccc;
    vertical-align: top;
  }
  th, td {
    padding: 2px;
    background: none;
  }
  td {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        margin: 2px 0;
        padding: 0 4px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .five {
      background: #d2143a;
    }
    .four {
      background: #FF7F50;
    }
    .three {
      color: #fff;
      background: #751aff;
    }
    .two {
      color: #fff;
      background: #0080ff;
    }
    .one {
      background: #00e600;
    }
    .cert {
      background: #404040;
      color: #fff;
    }
    .a-class {
      background: #a6a6a6;
    }
  }
`;

export default () => (
  <>
    <SmallTable>
      <tr><td>Expert</td><td>5</td></tr>
      <tr><td>Advanced Intermediate</td><td>4</td></tr>
      <tr><td>Intermediate</td><td>3</td></tr>
      <tr><td>Advanced Beginner</td><td>2</td></tr>
      <tr><td>Beginner</td><td>1</td></tr>
      <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
    </SmallTable>

    <SmallTable className='cert_class'>
      <tr><td>Certifications</td></tr>
      <tr><td>Classes</td></tr>
    </SmallTable>

    <SkillSpectrum>
      <tr>
        <th>Design</th>
        <th>Markup</th>
        <th>Styles</th>
        <th>Client-side</th>
        <th>Back-end</th>
        <th>DBMS</th>
        <th>Dev Ops</th>
        <th>Security</th>
        <th>System Administration</th>
        <th>Networking</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li class='three'>Sketch</li>
            <li class='one'>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li class='three'>Gimp</li>
            <li class='one'>Balsamiq</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='four'>HTML5</li>
            <li class='two'>XML/JSON</li>
            <li class='four'>Markdown</li>
            <li class='two'>YAML</li>
            <li class='one'>Pug</li>
            <li class='two'>Liquid</li>
            <li class='one'>Mustache</li>
            <li class='three'>ERB</li>
            <li class='two'>Blade</li>
            <li class='three'>SVG</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='one'>Bootstrap</li>
            <li>Foundation</li>
            <li class='four'>CSS</li>
            <li class='three'>Sass</li>
            <li>LESS</li>
            <li>Stylus</li>
            <li class='three'>Animation</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='four'>JavaScript</li>
            <li>Ember.js</li>
            <li class='three'>jQuery</li>
            <li class='two'>Jest</li>
            <li class='one'>Elm</li>
            <li class='two'>React</li>
            <li>Angular</li>
            <li class='one'>Vue.js</li>
            <li class='two'>Stimulus</li>
            <li class='one'>Node</li>
            <li class='two'>CoffeeScript</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='three'>Ruby</li>
            <li class='three'>.NET</li>
            <li class='two'>Laravel</li>
            <li class='three'>Objective-C</li>
            <li class='two'>Java</li>
            <li class='three'>Rails</li>
            <li class='three'>RSpec</li>
            <li class='four'>PHP</li>
            <li class='three'>C#</li>
            <li class='three'>CodeIgniter</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='three'>Normalization</li>
            <li class='four'>SQL</li>
            <li class='three'>MySQL</li>
            <li class='three'>SQLite</li>
            <li class='two'>PostgreSQL</li>
            <li class='three'>ORMs</li>
            <li class='two'>Oracle</li>
            <li class='two'>MS SQL</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='three'>IIS</li>
            <li class='three'>Apache</li>
            <li class='two'>Nginx</li>
            <li>Ansible</li>
            <li class='three'>Python/Perl</li>
            <li class='two'>Bash</li>
            <li class='two'>Batch</li>
            <li class='one'>PowerShell</li>
            <li class='one'>Docker</li>
            <li class='two'>AWS</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='two'>Pin Testing</li>
            <li class='two'>Enumeration</li>
            <li class='three'>Kali Linux</li>
            <li class='two'>Scanning</li>
            <li class='one'>Social Engineering</li>
            <li class='three'>Nmap</li>
            <li class='two'>Wireshark</li>
            <li class='three'>Web Security</li>
            <li class='two'>Footprinting</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='four'>macOS</li>
            <li class='two'>FreeBSD</li>
            <li class='four'>Linux</li>
            <li class='four'>Hypervisors/VMs</li>
            <li class='three'>Windows Server</li>
            <li class='two'>Log Management</li>
            <li class='four'>Hardware</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='four'>Firewalls</li>
            <li class='two'>Switching</li>
            <li class='four'>Cabling</li>
            <li class='three'>VLANs</li>
            <li class='four'>Subnetting</li>
            <li class='three'>Routing</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th colspan='10'>
          Certifications / Classes
        </th>
      </tr>
      <tr>
        <td>
          <ul>
            <li class='a-class'>Tree House</li>
            <li class='a-class'>Udemy</li>
            <li class='a-class'>Frontend Masters</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='a-class'>Code School</li>
            <li class='a-class'>PluralSight</li>
            <li class='a-class'>Tree House</li>
            <li class='a-class'>Frontend Masters</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='a-class'>Code School</li>
            <li class='a-class'>Wes Bos</li>
            <li class='a-class'>Frontend Masters</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>
              <li class='a-class'>Laracast</li>
              <li class='cert'>CIW JS</li>
              <li class='a-class'>Code School</li>
              <li class='a-class'>Wes Bos</li>
              <li class='a-class'>Frontend Masters</li>
            </li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='a-class'>Code School</li>
            <li class='cert'>CIW PS</li>
            <li class='a-class'>Pragmatic</li>
            <li class='cert'>ZCPE</li>
            <li class='a-class'>Laracast</li>
            <li class='a-class'>Thoughtbot</li>
            <li class='a-class'>Tree House</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='cert'>CIW DDS</li>
            <li class='a-class'>Tree House</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='a-class'>PluralSight</li>
            <li class='a-class'>Frontend Masters</li>
            <li class='a-class'>Linux Academy</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='a-class'>UAH</li>
            <li class='cert'>Security+</li>
            <li class='a-class'>OSCP</li>
            <li class='cert'>CEH</li>
            <li class='a-class'>FedVTE</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='cert'>A+</li>
            <li class='cert'>LPCI-I</li>
            {/*<!--<li class='cert'>SUSE CLA 11</li>-->*/}
            <li class='a-class'>Steel Pivot</li>
            <li class='cert'>Linux+</li>
            <li class='a-class'>Linux Academy</li>
          </ul>
        </td>
        <td>
          <ul>
            <li class='a-class'>SudoSecure</li>
            <li class='cert'>Network+</li>
            <li class='a-class'>ITPro TV</li>
          </ul>
        </td>
      </tr>
    </SkillSpectrum>
  </>
);

import React from "react";
import styled from "@emotion/styled";

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
    background: #ff7f50;
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
  th,
  td {
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
      background: #ff7f50;
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
      <tr>
        <td>Expert</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Advanced Intermediate</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Intermediate</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Advanced Beginner</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Beginner</td>
        <td>1</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </SmallTable>

    <SmallTable className="cert_class">
      <tr>
        <td>Certifications</td>
      </tr>
      <tr>
        <td>Classes</td>
      </tr>
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
            <li className="two">PlantUML</li>
            <li className="three">Sketch</li>
            <li className="one">Photoshop</li>
            <li className="two">Lucidchart</li>
            <li className="three">Gimp</li>
            <li className="one">Balsamiq</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="four">HTML5</li>
            <li className="two">XML/JSON</li>
            <li className="four">Markdown</li>
            <li className="two">YAML</li>
            <li className="one">Pug</li>
            <li className="two">Liquid</li>
            <li className="one">Mustache</li>
            <li className="three">ERB</li>
            <li className="two">Blade</li>
            <li className="two">XAML</li>
            <li className="three">SVG</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="one">Bootstrap</li>
            <li className="four">CSS</li>
            <li className="three">Sass</li>
            <li className="three">Animation</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="four">JavaScript</li>
            <li className="three">jQuery</li>
            <li className="two">Jest</li>
            <li className="one">Elm</li>
            <li className="two">React</li>
            <li className="one">Vue.js</li>
            <li className="two">Stimulus</li>
            <li className="one">Node</li>
            <li className="two">CoffeeScript</li>
            <li className="two">Xamarin</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="three">Ruby</li>
            <li className="three">.NET</li>
            <li className="two">Laravel</li>
            <li className="three">Objective-C</li>
            <li className="two">Java</li>
            <li className="three">Rails</li>
            <li className="three">RSpec</li>
            <li className="four">PHP</li>
            <li className="three">C#</li>
            <li className="three">CodeIgniter</li>
            <li className="one">Spring</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="three">Normalization</li>
            <li className="four">SQL</li>
            <li className="three">MySQL</li>
            <li className="three">SQLite</li>
            <li className="two">PostgreSQL</li>
            <li className="three">ORMs</li>
            <li className="two">Oracle</li>
            <li className="two">MS SQL</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="three">IIS</li>
            <li className="three">Apache</li>
            <li className="two">Nginx</li>
            <li className="one">Ansible</li>
            <li className="three">Python/Perl</li>
            <li className="two">Bash</li>
            <li className="two">Batch</li>
            <li className="one">PowerShell</li>
            <li className="one">Docker</li>
            <li className="two">AWS</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="two">Pin Testing</li>
            <li className="two">Enumeration</li>
            <li className="three">Kali Linux</li>
            <li className="two">Scanning</li>
            <li className="one">Social Engineering</li>
            <li className="three">Nmap</li>
            <li className="two">Wireshark</li>
            <li className="three">Web Security</li>
            <li className="two">Footprinting</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="four">macOS</li>
            <li className="two">FreeBSD</li>
            <li className="four">Linux</li>
            <li className="four">Hypervisors/VMs</li>
            <li className="three">Windows Server</li>
            <li className="two">Log Management</li>
            <li className="four">Hardware</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="four">Firewalls</li>
            <li className="two">Switching</li>
            <li className="four">Cabling</li>
            <li className="three">VLANs</li>
            <li className="four">Subnetting</li>
            <li className="three">Routing</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th colspan="10">Certifications / Classes</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li className="a-class">Tree House</li>
            <li className="a-class">Udemy</li>
            <li className="a-class">Frontend Masters</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="a-class">Code School</li>
            <li className="a-class">PluralSight</li>
            <li className="a-class">Tree House</li>
            <li className="a-class">Frontend Masters</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="a-class">Code School</li>
            <li className="a-class">Wes Bos</li>
            <li className="a-class">Frontend Masters</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>
              <li className="a-class">Laracast</li>
              <li className="cert">CIW JS</li>
              <li className="a-class">Code School</li>
              <li className="a-class">PluralSight</li>
              <li className="a-class">Wes Bos</li>
              <li className="a-class">Frontend Masters</li>
            </li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="a-class">Code School</li>
            <li className="cert">CIW PS</li>
            <li className="a-class">Pragmatic</li>
            <li className="cert">ZCPE</li>
            <li className="a-class">PluralSight</li>
            <li className="a-class">Laracast</li>
            <li className="a-class">Thoughtbot</li>
            <li className="a-class">Tree House</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="cert">CIW DDS</li>
            <li className="a-class">Tree House</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="a-class">PluralSight</li>
            <li className="a-class">Frontend Masters</li>
            <li className="a-class">Linux Academy</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="a-class">UAH</li>
            <li className="cert">Security+</li>
            <li className="a-class">OSCP</li>
            <li className="cert">CEH</li>
            <li className="a-class">FedVTE</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="cert">A+</li>
            <li className="cert">LPCI-I</li>
            {/*<!--<li className='cert'>SUSE CLA 11</li>-->*/}
            <li className="a-class">Steel Pivot</li>
            <li className="cert">Linux+</li>
            <li className="a-class">Linux Academy</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className="a-class">SudoSecure</li>
            <li className="cert">Network+</li>
            <li className="a-class">ITPro TV</li>
          </ul>
        </td>
      </tr>
    </SkillSpectrum>
  </>
);

import React from 'react';

export default () => (
  <>
    <table class='skill-levels'>
      <tr><td>Expert</td><td>5</td></tr>
      <tr><td>Advanced Intermediate</td><td>4</td></tr>
      <tr><td>Intermediate</td><td>3</td></tr>
      <tr><td>Advanced Beginner</td><td>2</td></tr>
      <tr><td>Beginner</td><td>1</td></tr>
      <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
    </table>

    <table class='skill-levels cert_class'>
      <tr><td>Certifications</td></tr>
      <tr><td>Classes</td></tr>
    </table>

    <section>
      <div class='inner-section skill-level-and-spectrum'>
        <h2>Tech Spectrum and Skill Level</h2>
        <p>Here I have outlined my skills and my level of experience with each skillset. I have also outlined the certifications and the classes that correspond to each skill acquired.</p>

        <table class='skill-spectrum'>
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
        </table>
      </div>
    </section>
  </>
);
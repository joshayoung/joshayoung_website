import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1 className='header'>Resume</h1>
    <ul style={{ display: 'none' }}>
      <li><a href='/docs/Josh_Young_Resume.pdf'>Download Resume (pdf)</a></li>
      <li><a href='/docs/Josh_Young_Resume.txt'>Download Resume (txt)</a></li>
    </ul>

    <article>
      <h3>Experienced - Full Stack Web Developer</h3>
      <p>
        Full Stack Web Developer with 7+ years of experience developing web applications. Using current programming languages to further company productivity. Improving user experience by working with members of my team to maintain and improve our web programs.</p>
    </article>

    <article>
      <h3>Work Experience</h3>
      <h4>Full Stack Developer</h4>
      <h5>Ramsey Solutions - Brentwood, TN (2018 - Present)</h5>
      <ul>
        <li>Developing and maintaining many web properties (Ruby on Rails, JavaScript, CSS, HTML).</li>
        <li>Working with other team members via git and other collaboration tools.</li>
        <li>Writing and updating rspec tests to insure good test coverage for our websites.</li>
      </ul>
      <h4>Systems Analyst (Web Developer)</h4>
      <h5>Huntsville Utilities - Huntsville, AL (2010 - 2018)</h5>
      <ul>
        <li>Supported customers by developing web and mobile applications using PHP, Laravel, CodeIgniter, JavaScript, jQuery, React, HTML5, CSS, and MySQL.</li>
        <li>Improved old code to support newer standards via progressive enhancement.</li>
        <li>Guided other members of the team to deliver quality software to end-users.</li>
        <li>Ensured all details of new software projects were completed prior to final delivery.</li>
        <li>Utilized Balsamiq Mockups to provide visuals that aided in fulfilling design requirements.</li>
        <li>Enhanced application aesthetics by producing creative designs with Sketch.</li>
        <li>Focused on project goals to consistently deliver software on time.</li>
        <li>Attended conferences, workshops, and online training to continually improve skillsets.</li>
        <li>Worked with other technologies including: C#, ASP.NET, Ruby, Perl, Python, MS SQL, Oracle, Red Hat, macOS, and Windows Server.</li>
      </ul>

      <h4>Freelancing Development</h4>
      <h5>Web Developer/Designer (2009 - 2011)</h5>
      <ul>
        <li>Assisted customers by designing and developing web pages using standards-compliant XHTML, CSS, JavaScript, and jQuery.</li>
        <li>Enabled custom functionality by integrating new PHP code within websites.</li>
        <li>Diagnosed PHP, HTML, JavaScript, and CSS issues to correct bugs in code.</li>
        <li>Designed and edited web mockups using Adobe Photoshop and other design tools.</li>
        <li>Improved code as necessary to better support client needs and newer standards.</li>
        <li>Setup and maintained website back-end code bases and the supporting databases.</li>
        <li>Maintained databases and servers by writing bash and SQL scripts.</li>
      </ul>

      <h4>Developer</h4>
      <h5>ASI Software &amp; Web Solutions, Hoover, AL (November 2009 – August 2010)</h5>
      <ul>
        <li>Built and improved customer websites using CSS, HTML, JavaScript, and jQuery.</li>
        <li>Worked with clients to identify back-end issues with PHP code and correct them.</li>
        <li>Coordinated with team members to identify web problems and propose solutions.</li>
        <li>Identified and corrected bugs in the front-end CSS, HTML, and JavaScript code.</li>
        <li>Communicated with supervisor to complete the most important tasks on time.</li>
        <li>Sliced Adobe Photoshop mockups to create CSS and HTML layouts.</li>
      </ul>

      <h4>Web Intern</h4>
      <h5>IT Department Bryan College - Dayton, TN (2007 – 2009)</h5>
      <ul>
        <li>Maintained the college website via XHTML, CSS, and a content management system (MODX).</li>
        <li>Developed web pages for each athletic department and email templates for the athletic director.</li>
        <li>Corrected ASP.NET and C# code to insure correct functioning of the school website.</li>
      </ul>

      <h4>Ledford Research Project (PHP Blogging System)</h4>
      <h5>Student Researcher/Developer - Birmingham, AL (Summer 2008)</h5>
      <ul>
        <li>Set-up Linux server for hosting website content and MySQL database.</li>
        <li>Developed website design using HTML and CSS.</li>
        <li>Used PHP scripting language to interact with website content and MySQL database.</li>
        <li>Implemented secure PHP practices and MySQL database schema.</li>
        <li>Arranged results of research into downloadable content for placement on website.</li>
      </ul>

      <h4>IT Internship (Development Work)</h4>
      <h5>APAC Mid-South - Birmingham, AL (Summer 2008)</h5>
      <ul>
        <li>Interacted with Microsoft SharePoint and SQL Server to formulate SQL reports.</li>
        <li>Worked with ASP.NET, HTML, and CSS within a Windows Server 2003 environment.</li>
        <li>Remoted into client's computers to set up software and troubleshoot technical problems.</li>
      </ul>
    </article>

    <article>
      <h3>Work Projects</h3>
      <ul>
        <li>
          <span>Website for External Web Apps</span>
          <span>(Laravel, PHP, HTML, CSS, JavaScript, Sketch - 2018)</span>
        </li>
        <li>
          <span>Built Internal React App with PHP back-end</span>
          <span>(React, JavaScript, HTML, CSS, SASS, PHP, JSON - 2017)</span>
        </li>
        <li>
          <span>Redesigning Internal Portal Site</span>
          <span>(HTML, CSS, JavaScript, SASS, Gulp, Sketch - 2016)</span>
        </li>
        <li>
          <span>Designed Scheduling System</span>
          <span>(HTML, CSS, JavaScript, PHP, MySQL - 2015)</span>
        </li>
        <li>
          <span>Build Internal iPhone App with back-end</span>
          <span>(Objective C, XCode, PHP, MySQL, CSS, JavaScript - 2014)</span>
        </li>
        <li>
          <span>Program Internal Calendaring System</span>
          <span>(PHP, MySQL, CSS, HTML - 2013)</span>
        </li>
        <li>
          <span>Outage Map</span>
          <span>(Google Maps, JavaScript, Oracle, C# - 2012)</span>
        </li>
        <li>
          <span>Building Web SCADA Modeling Graphs</span>
          <span>(ASP.NET, C#, CSS, JavaScript - 2012)</span>
        </li>
        <li>
          <span>Data System to Track Customer Payments</span>
          <span>(PHP, HTML, CSS, JavaScript - 2011)</span>
        </li>
        <li>
          <span>Redesign Help Desk System</span>
          <span>(PHP, HTML, CSS, JavaScript - 2010)</span>
        </li>
      </ul>
    </article>

    <article>
      <h3>Personal Projects</h3>
      <p>I have listed more details about each one of these projects on my <a href='/projects'>projects</a> page.</p>
      <ul>
        <li>
          <a href='/projects#note_url_system'>Note/URL System</a>
          <span>(PHP, Laravel, PostgreSQL - 2017)</span>
        </li>
        <li>
          <a href='/projects#joshyoung'>Joshyoung Website</a>
          <span>(HTML, CSS, SASS, JavaScript, jQuery, Jekyll - 2016)</span>
        </li>
        <li>
          <a href='/projects#note_system_flask'>Note Taking System</a>
          <span>(Python, Flask, SQLite - 2014)</span>
        </li>
        <li>
          <a href='/projects#joshayoung'>Joshayoung Website</a>
          <span>(HTML, CSS, JavaScript - 2012)</span>
        </li>
        <li>
          <a href='/projects#codeitcreations'>Code It Creation Website</a>
          <span>(HTML, CSS, JavaScript - 2011)</span>
        </li>
        <li>
          <a href='/projects#ticketing_system_alt'>Ticketing System v2</a>
          <span>(C#, MSSQL, ASP.NET, CSS, JavaScript - 2010)</span>
        </li>
        <li>
          <a href='/projects#ticketing_system'>Ticketing System v1</a>
          <span>(PHP, MySQL, HTML, CSS, JavaScript - 2010)</span>
        </li>
        <li>
          <a href='/projects#commentsandcapers'>Comments and Capers Website</a>
          <span>(HTML, CSS, JavaScript - 2009)</span>
        </li>
        <li>
          <a href='/projects#blogging_system'>Blogging System</a>
          <span>(PHP, MySQL, HTML, CSS, JavaScript - Summer 2008)</span>
        </li>
      </ul>
    </article>

    <article>
      <h3>Education</h3>
      <h4>Bryan College, Dayton Tennessee (2006 - 2009)</h4>
      <h5><strong>Bachelor of Science, Computer Science</strong></h5>
      <h6>Minor: Business Administration</h6>
      <p>(Also see my continuing education under my <a href='/classes'>classes</a> page.)</p>
    </article>

    <article>
      <h3>Certification</h3>
      <p>More information about each certification is listed on on my <a href='/certifications'>certification</a> page.</p>
      <ul>
        <li><a href='/certifications#security'>CompTIA Security+</a></li>
        <li><a href='/certifications#ceh'>Certified Ethical Hacker</a></li>
        <li><a href='/certifications#pce'>Zend Certified PHP Engineer</a></li>
        <li><a href='/certifications#network'>CompTIA Network+</a></li>
        <li><a href='/certifications#professional'>CIW Web Development Professional</a></li>
        <li><a href='certifications#database'>CIW Database Design Specialist</a></li>
        <li><a href='/certifications#perl'>CIW Perl Specialist</a></li>
        <li><a href='/certifications#javascript'>CIW JavaScript Specialist</a></li>
        <li><a href='/certifications#linux'>CompTIA Linux+</a></li>
        <li><a href='/certifications#suse'>SUSE Certified Linux Administrator 11</a></li>
        <li><a href='/certifications#lpci'>LPCI-1</a></li>
        <li><a href='/certifications#aplus'>CompTIA A+</a></li>
      </ul>
    </article>

    <article>
      <h3>Technical Skills</h3>
      <ul>
        <li>Server Technologies</li>
        <li>Apache</li>
        <li>IIS</li>
        <li>Nginx</li>
        <li>MS Servers 2008/2012</li>
        <li>Linux (Debian/Red Hat/CentOS)</li>
        <li>FreeBSD</li>
      </ul>
      <ul>
        <li>Operating Systems</li>
        <li>Windows 7/8/10</li>
        <li>Mac</li>
        <li>VMware</li>
        <li>Linux (Arch, Fedora, Ubuntu)</li>
      </ul>
      <ul>
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
      <ul>
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
      <ul>
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
      <ul>
        <li>Design</li>
        <li>Sketch</li>
        <li>Photoshop</li>
        <li>Gimp</li>
        <li>Balsamiq Mockups</li>
      </ul>
      <ul>
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
      <ul>
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
      <ul>
        <li>Security</li>
        <li>NMAP</li>
        <li>Kali Linux</li>
        <li>Wireshark</li>
        <li>Vulnerability Scanning</li>
        <li>Enumeration</li>
        <li>Footprinting</li>
        <li>Web Security and Testing</li>
      </ul>
    </article>
  </Layout >
)

export default Resume;
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Certifications = () => (
  <Layout>
    <SEO title="Certifications" />
    <h1 className='header'>My Certifications</h1>
    <section>
      <div className='inner-section'>
        <article>
          <p className='introduction'>Below I have included a list of certifications that I have attained over the past few years.
      Many of these certs required passing more than one test. I have included a short summary of each certification along with a link to a better explanation of each one.</p>
          <ul>
            <li><a href='#security'>CompTIA Security+</a></li>
            <li><a href='#ceh'>Certified Ethical Hacker</a></li>
            <li><a href='#pce'>Zend Certified PHP Engineer</a></li>
            <li><a href='#network'>CompTIA Network+</a></li>
            <li><a href='#professional'>CIW Web Development Professional</a></li>
            <li><a href='#database'>CIW Database Design Specialist</a></li>
            <li><a href='#perl'>CIW Perl Specialist</a></li>
            <li><a href='#javascript'>CIW JavaScript Specialist</a></li>
            <li><a href='#linux'>CompTIA Linux+</a></li>
            <li><a href='#suse'>SUSE Certified Linux Administrator 11</a></li>
            <li><a href='#lpci'>LPCI-1</a></li>
            <li><a href='#aplus'>CompTIA A+</a></li>
          </ul>
        </article>

        <article>
          <a name='security'></a>
          <h3>CompTIA Security+</h3>
          <p>The CompTIA Security+ certification addressed many IT security subjects such as: cryptography, network security, compliance, threats, access control, etc. This was a very good introduction to security subjects as they relate to computers and networks.</p>
          <img className='cert-logo' alt='Security Plus Logo' src='/images/certs/resized/SecurityPlus_Logo_Certified_CE.png' />
          <a href='https://certification.comptia.org/certifications/security'>About Certification</a>
        </article>

        <article>
          <a name='ceh'></a>
          <h3>Certified Ethical Hacker (C|EH)</h3>
          <p>The Certified Ethical Hacker certification covered many areas of computer security including: footprinting, scanning, enumeration, penetration testing, SQL injection, etc. By gaining a better understanding of the tactics use by ethical hackers, I acquired valuable information to facilitate building better defenses and more secure web applications.</p>
          <img className='cert-logo' alt='CEH Logo' src='images/certs/resized/CEH_logo.gif' />
          <a href='https://www.eccouncil.org/Certification/certified-ethical-hacker'>About Certification</a>
        </article>

        <article>
          <a name='pce'></a>
          <h3>Zend Certified PHP Engineer (ZCPE)</h3>
          <p>The Zend Certified PHP Engineer certification required exhaustive knowledge of the PHP language. Many of the areas that were tested included: functions, arrays, object oriented programming, security, strings, program logic, error detection, debugging, etc.</p>
          <a href='https://www.zend.com/en/yellow-pages/ZEND024785'>Josh Young - ZCPE</a><br />
          <a href='https://www.zend.com/en/services/certification/php-certification'>About Certification</a>
        </article>

        <article>
          <a name='network'></a>
          <h3>CompTIA Network+</h3>
          <p>The CompTIA Network+ certification required knowledge in many network related areas. Here are a few of the subjects covered: routing, network topologies, virtualization, network segmentation, switch port security, user authentication, firewalls, network access control, etc.</p>
          <img className='cert-logo' alt='Network Plus Logo' src='img/certs/resized/NetworkPlus_Logo_Certified_CE.png' />
          <a href='https://certification.comptia.org/certifications/network'>About Certification</a>
        </article>

        <article>
          <a name='professional'></a>
          <h3>CIW Web Development Professional</h3>
          <p>The CIW Web Development Professional certification was awarded as a result of achieving the following certifications: CIW JavaScript Specialist, CIW Perl Specialist, and CIW Database Design Specialist.</p>
          <a href='http://www.ciwcertified.com/certifications/Web_Development_Series/development.php'>About Certification</a>
        </article>

        <article>
          <a name='database'></a>
          <h3>CIW Database Design Specialist</h3>
          <p>The CIW Database Design Specialist certification covered many areas of database design and optimization including: planning, relational algebra, design methodology, normalization, Structured Query Language (SQL), database security, etc.</p>
          <a href='http://www.ciwcertified.com/Certifications/Web_Development_Series/database_design.php'>About Certification</a>
        </article>

        <article>
          <a name='perl'></a>
          <h3>CIW Perl Specialist</h3>
          <p>The CIW Perl Specialist certification required knowledge in the following areas of the Perl language: loops, regular expressions, the interpreter, hashes, subroutines, reading/writing data, modules, object oriented programming techniques, database interaction, debugging, etc.</p>
          <a href='http://www.ciwcertified.com/Certifications/Web_Development_Series/perl.php'>About Certification</a>
        </article>

        <article>
          <a name='javascript'></a>
          <h3>CIW JavaScript Specialist</h3>
          <p>The CIW JavaScript Specialist certification covered the JavaScript language
      including topics such as: program flow, debugging, validation, DOM manipulation, libraries, AJAX, JavaScript security, libraries, etc.</p>
          <a href='http://www.ciwcertified.com/Certifications/Web_Development_Series/javascript.php'>About Certification</a>
        </article>

        <article>
          <a name='linux'></a>
          <h3>CompTIA Linux+</h3>
          <p>The CompTIA Linux+ certification required a very thorough knowledge of Linux. Here are just a few of the knowledge areas: file systems, run levels, package management, file management, process manipulation, command line regular expressions, scripting, security, shells, network configuration, and scheduled task configuration.</p>
          <img className='cert-logo' alt='Linux Plus Logo' src='img/certs/resized/LinuxPlus_Logo_Certified.png' />
          <a href='https://certification.comptia.org/certifications/linux'>About Certification</a>
        </article>

        <article>
          <a name='suse'></a>
          <h3>SUSE Certified Linux Administrator 11</h3>
          <img className='cert-logo' alt='SUSE Logo' src='img/certs/resized/cert_linux_admin_11.png' />
          <a href='https://training.suse.com/certification/sca-linux'>About Certification</a>
        </article>

        <article>
          <a name='lpci'></a>
          <h3>LPIC-1</h3>
          <p>The LPIC-1 certification was all about Linux fundamentals. It covered many Linux areas including: symbolic links, permissions, disk management, file system integrity, process execution, GNU commands, libraries, boot loader configuration, etc.</p>
          <a href='https://certification.comptia.org/certifications/linux'>About CompTIA Certification</a>
          <a href='https://www.lpi.org/certification/get-certified-lpi/lpic-1-linux-server-professional'>About LPIC Certification</a>
        </article>

        <article>
          <a name='aplus'></a>
          <h3>CompTIA A+</h3>
          <p>The CompTIA A+ certification required knowledge in many areas of computer hardware including: BIOS configuration, motherboards, RAM, installation and configuration of computers and peripherals, network cable types, TCP/IP, TCP/UDP ports, networking tools, and troubleshooting.</p>
          <img className='cert-logo' alt='A Plus Logo' src='img/certs/resized/APlus_Logo_Certified_CE.png' />
          <a href='https://certification.comptia.org/certifications/a'>About Certification</a>
        </article>
      </div>
    </section>
  </Layout>
)

export default Certifications;

import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ListTreehouse from "../hooks/list-treehouse";
import ListCodeSchool from "../hooks/list-code-school";


export default () => {
  const treehouse = ListTreehouse();
  const codeschool = ListCodeSchool();
  return (
    <Layout>
      <SEO title="Classes" />
      <h1 className='header'>Classes I've Taken</h1>
      <section>
        <div>
          <article>
            <p className='introduction'>In an effort to continually learn new technologies and stay abreast of existing technologies, I have found it helpful to take advantage of opportunities for continuing education. Below I have listed courses (both classroom and online) that I have completed over the years.</p>
            <ul>
              <li><a href='#upcase'>Upcase by ThoughtBot</a></li>
              <li><a href='#pragmaticstudio'>The Pragmatic Studio</a></li>
              <li><a href='#leadershipessentials'>Transcend Leadership Essentials</a></li>
              <li><a href='#frontend'>Frontend Masters Classes</a></li>
              <li><a href='#laracastsclasses'>Laracast Courses</a></li>
              <li><a href='#wesbos'>Wes Bos Classes</a></li>
              <li><a href='#udemy'>Udemy Classes</a></li>
              <li><a href='#treehouse'>Tree House Classes</a></li>
              <li><a href='#pluralsight'>PluralSight Courses</a></li>
              <li><a href='#codeschool'>Code School Classes</a></li>
              <li><a href='#fedvte'>FedVTE Training</a></li>
              <li><a href='#kali'>Penetration Testing with Kali Linux</a></li>
              <li><a href='#securityplus'>Security+ Certification Class</a></li>
              <li><a href='#ceh'>CEH - Ethical Hacking and Countermeasures</a></li>
              <li><a href='#unified'>Unified Threat Management Introduction Course</a></li>
              <li><a href='#linuxsteelpivot3'>Linux Administration 310 - Service Configuration, Management, and LAMP Servers</a></li>
              <li><a href='#linuxsteelpivot2'>Linux Administration 210 - System and Network Management</a></li>
              <li><a href='#linuxsteelpivot1'>Linux Administration 110 - System Installation and Configuration</a></li>
            </ul>
          </article>

          <article>
            <a name='upcase'></a>
            <h3>Upcase by Thoughtbox</h3>
            <p>Upcase offers many excellent classes centered around Ruby, Rails, Testing, Vim, and Tmux.</p>
            <ul>
              <li><a href='https://thoughtbot.com/upcase/onramp-to-vim'>Onramp to Vim</a></li>
              <li><a href='https://thoughtbot.com/upcase/rails-testing-exercises'>Rails Testing Exercises</a></li>
              <li><a href='https://thoughtbot.com/upcase/refactoring'>Refactoring</a></li>
              <li><a href='https://thoughtbot.com/upcase/test-doubles'>Test Doubles</a></li>
              <li><a href='https://thoughtbot.com/upcase/fundamentals-of-tdd'>Fundamentals of TDD</a></li>
              <li><a href='https://thoughtbot.com/upcase/tmux'>tmux</a></li>
              <li><a href='https://thoughtbot.com/upcase/dive-into-neovim'>Dive Into Neovim</a></li>
              <li><a href='https://thoughtbot.com/upcase/intermediate-ruby-on-rails-five'>Intermediate Ruby on Rails (Rails 5)</a></li>
              <li><a href='https://thoughtbot.com/upcase/test-driven-rails'>Test-Driven Rails</a></li>
              <li><a href='https://thoughtbot.com/upcase/navigating-ruby-files-with-vim'>Navigating Ruby Files with Vim</a></li>
            </ul>
          </article>

          <article>
            <a name='pragmaticstudio'></a>
            <h3>Pragmatic Studio Classes</h3>
            <p>The Pragmatic Studio offers some excellent classes. The classes are very in depth and thorough.</p>
            <ul>
              <li><a href='https://pragmaticstudio.com/alumni/josh-young-c7da'>Alumni Report</a></li>
              <li><a href='https://pragmaticstudio.com/ruby-blocks'>Mastering Ruby Blocks and Iterators</a></li>
              <li><a href='https://pragmaticstudio.com/rails-ii'>Ruby on Rails Level II</a></li>
              <li><a href='https://pragmaticstudio.com/rails'>Ruby on Rails Level I</a></li>
              <li><a href='https://pragmaticstudio.com/ruby'>Ruby Programming</a></li>
            </ul>
          </article>

          <article>
            <a name='leadershipessentials'></a>
            <h3>Transcend Leadership Essentials</h3>
            <p>
              This class covered the elements of the DISC personality profile in depth. With the new knowledge that DISC
              presented, this class elaborated on how to best work with others in the different DISC quadrants. In addition,
              other leadership characteristics were covered to equip class participants to best perform their jobs in a
              professional and respectful manner.
      </p>
          </article>

          <article>
            <a name='frontend'></a>
            <h3>Frontend Masters Classes</h3>
            <p>The Frontend Master website offers great courses covering front-end topics such as accessibilty, performance, JavasScript, etc.</p>
            <ul>
              <li><a href='https://frontendmasters.com/courses/serverless-aws/'>Serverless with AWS Lambda</a></li>
              <li><a href='https://frontendmasters.com/courses/git-in-depth'>Git In-depth</a></li>
              <li><a href='https://frontendmasters.com/courses/aws-frontend-react/'>AWS for Front-End Engineers (ft. S3, Cloudfront & Route 53)</a></li>
              <li><a href='https://frontendmasters.com/courses/intro-elm/'>Introduction to Elm, v2</a></li>
              <li><a href='https://frontendmasters.com/courses/design-for-developers/'>Design for Developers</a></li>
              <li><a href='https://frontendmasters.com/courses/javascript-hard-parts/'>JavaScript: The Hard Parts</a></li>
              <li><a href='https://frontendmasters.com/courses/full-stack'>Full Stack for Front End Engineers</a></li>
              <li><a href='https://frontendmasters.com/courses/full-stack-v2'>Full Stack for Front-Ends Part 2</a></li>
              <li><a href='https://frontendmasters.com/courses/chrome-dev-tools-v2'>Mastering Chrome Developer Tools v2</a></li>
              <li><a href='https://frontendmasters.com/courses/js-fundamentals-functional-v2'>JavaScript: From Fundamentals to Functional JS, v2</a></li>
              <li><a href='https://frontendmasters.com/courses/css-grids-flexbox'>CSS Grids and Flexbox for Responsive Web Design</a></li>
              <li><a href='https://frontendmasters.com/courses/javascript-basics'>Introduction to JavaScript Programming</a></li>
              <li><a href='https://frontendmasters.com/courses/web-development-v2'>Complete Intro to Web Development, v2</a></li>
              <li><a href='https://frontendmasters.com/courses/web-accessibility'>Web Accessibility</a></li>
              <li><a href='https://frontendmasters.com/courses/good-parts-javascript-web'>The Good Parts of JavaScript and the Web</a></li>
              <li><a href='https://frontendmasters.com/courses/javascript-frameworks-showdown'>Choosing a JavaScript Framework</a></li>
              <li><a href='https://frontendmasters.com/courses/js-fundamentals-to-functional'>JavaScript: From Fundamentals to Functional JS</a></li>
              <li><a href='https://frontendmasters.com/courses/website-performance'>Web Site Performance</a></li>
              <li><a href='https://frontendmasters.com/courses/web-ui-architecture'>Web UI Architecture</a></li>
            </ul>
          </article>

          <article>
            <a name='laracastsclasses'></a>
            <h3>Laracast Courses</h3>
            <p>Jeffery Way teaches some great courses at this site <a href='http://laracasts.com'>laracasts.com</a>. I have taken two of his courses (listed below).</p>
            <ul>
              <li><a href='https://laracasts.com/series/git-me-some-version-control'>Git Me Some Version Control</a></li>
              <li><a href='https://laracasts.com/series/how-to-build-command-line-apps-in-php'>How to Build Command-Line Apps</a></li>
              <li><a href='https://laracasts.com/series/php7-up-and-running'>PHP 7 Up and Running</a></li>
              <li><a href='https://laracasts.com/series/laravel-from-scratch-2017'>Laravel 5.4 from Scratch</a></li>
              <li><a href='https://laracasts.com/series/webpack-for-everyone'>Webpack for Everyone</a></li>
            </ul>
          </article>

          <article>
            <a name='wesbos'></a>
            <h3>Wes Bos Classes</h3>
            <p>Wes Bos delivers some excellent content at his <a href='http://wesbos.com/courses/'>website</a>. His classes have a web front-end focus and include topics such as: React, Redux, JavaScript, and CSS.</p>
            <ul>
              <li><a href='https://learnnode.com'>Learn Node</a></li>
              <li><a href='https://reactforbeginners.com'>React for Beginners</a></li>
              <li><a href='https://learnredux.com'>Learn Redux</a></li>
              <li><a href='https://flexbox.io'>What The Flexbox?!</a></li>
              <li><a href='https://masteringmarkdown.com'>Mastering Markdown</a></li>
            </ul>
          </article>

          <article>
            <a name='udemy'></a>
            <h3>Udemy Classes</h3>
            <p>You have to be selective with some of the classes offered on Udemy; however, sometimes the classes offered are excellent at a reasonable price.</p>
            <ul>
              <li><a href='https://www.udemy.com/learnsketch3'>Sketch 3 from A to Z: Become an App Designer</a></li>
            </ul>
          </article>

          <article>
            <a name='treehouse'></a>
            <h3>Tree House Classes</h3>
            <p>I took all of these classes as a part of a short Tree House membership. They were largely review for me, but some of the classes covered technologies that I had not had time to learn yet.</p>

            <ul>
              <>
                {treehouse.map(treehouse => (
                  <li><a href={treehouse.url}>{treehouse.title}</a></li>
                ))}
              </>
            </ul>
          </article>

          <article>
            <a name='pluralsight'></a>
            <h3>PluralSight Courses</h3>
            <p>PluralSight also offers some good content. It is not as focused as other platforms such as Code School though. I have taken a few courses from PluralSight which I have listed below.</p>
            <ul>
              <li><a href='https://app.pluralsight.com/library/courses/emmet-getting-started/table-of-contents'>Getting Started with Emmet</a></li>
              <li><a href='https://app.pluralsight.com/library/courses/docker-web-development/table-of-contents'>Docker for Web Developers</a></li>
            </ul>
          </article>

          <article>
            <a name='codeschool'></a>
            <h3>Code School Classes</h3>
            <p>The Code School site offers excellent classes. I took some of these as review and many as a way to level up my knowledge.</p>

            <ul>
              <>
                {codeschool.map(codeschool => (
                  <li><a href={codeschool.url}>{codeschool.title}</a></li>
                ))}
              </>
            </ul>
          </article>

          <article>
            <a name='fedvte'></a>
            <h3>FedVTE Training</h3>
            <p>These are free courses offered to government employees by the Department of Homeland Security. I completed the following courses through FedVTE.</p>
            <ul>
              <li><a href='https://fedvte.usalearning.gov/pdf/FedVTE_Training_Catalog.pdf'>Demilitarized Zone (DMZ) with IDS/IPS</a></li>
              <li><a href='https://fedvte.usalearning.gov/pdf/FedVTE_Training_Catalog.pdf'>Linux Operating System Security</a></li>
              <li><a href='https://fedvte.usalearning.gov/pdf/FedVTE_Training_Catalog.pdf'>Penetration Testing</a></li>
            </ul>
          </article>

          <article>
            <a name='kali'></a>
            <h3>Penetration Testing with Kali Linux</h3>
            <p>I took this class in preparation for Offensive Security's certification exam (<a href='https://www.offensive-security.com/information-security-certifications/oscp-offensive-security-certified-professional/'>OSCP</a>). Unfortunately, I did not pass my first exam attempt and have not had time to re-test. After speaking with a few individuals who passed the exam, it seems that no one passes it on their first attempt anyway. For me it was a great way to learn more about security and many different security techniques that relate to web development. For these reasons, the class time alone was extremely beneficial!</p>
            <a href='https://www.offensive-security.com/information-security-training/penetration-testing-training-kali-linux/'>Penetration Testing with Kali Linux</a>
          </article>

          <article>
            <a name='securityplus'></a>
            <h3>CompTIA Security+ Certification Training</h3>
            <p>In preparation for the Security+ certification, I took this class covering the fundamentals on the CompTIA Security+ certification exam. This class was offered as a night course by the University of Alabama in Huntsville (UAH).</p>
            <a href='http://www.uah.edu/'>University of Alabama in Huntsville</a>
          </article>

          <article>
            <a name='ceh'></a>
            <h3>CEH - Ethical Hacking and Countermeasures</h3>
            <p>In preparation for the CEH certification, I took this class covering the fundamentals of ethical hacking. The training was offered by Dynetics in Huntsville, AL. I do not have a direct link to a description of the training; however, I have included a link to Dynetics below along with more information about the CEH certification.</p>
            <a href='http://www.dynetics.com/services/space/training'>Dynetics</a><br />
            <a href='https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/'>About CEH</a>
          </article>

          <article>
            <a name='unified'></a>
            <h3>Unified Threat Management Introduction Course</h3>
            <p>This class covered setting up a secure pfSense firewall as well as firewall best practices. This class was delivered by <a href='http://www.sudosecure.com'>SudoSecure</a>.</p>
          </article>

          <article>
            <a name='linuxsteelpivot3'></a>
            <h3>Linux Administration 310 - Service Configuration, Management and LAMP Servers</h3>
            <p>This was the third class in the series, and it taught more advanced topics such as the following: sed, awk, syslog, postfix, open source licensing, LAMP servers, etc.</p>
          </article>

          <article>
            <a name='linuxsteelpivot2'></a>
            <h3>Linux Administration 210 - System and Network Management</h3>
            <p>This class was a follow-up to the 110 class and went into further detail. It coved topics such as: Linux networking, DNS, RAID, LVM, authentication, scripting, etc.</p>
          </article>

          <article>
            <a name='linuxsteelpivot1'></a>
            <h3>Linux Administration 110 - System Installation and Configuration</h3>
            <p>Even though I had taken Linux classes in school, my company offered to send me to this class prior to taking on more Linux system administration duties at work. This class was mostly review for me since I had previous Linux experience and training, but it served as a good review and preparation for the classes that followed. This class went over basic Linux information such as the file system, input, output, process management, etc.</p>
          </article>
        </div>
      </section>
    </Layout >
  );
};

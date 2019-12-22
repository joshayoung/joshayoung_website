import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1 className='header'>Projects</h1>
    <section>
      <div>
        <h2>Development Projects</h2>
        <article>
          <ul>
            <li><a href='#will_it_rain'>Will It Rain (2019)</a></li>
            <li><a href='#plot_notes'>Plot Notes (2018 - 2019)</a></li>
            <li><a href='#note_url_system'>Note/URL System (2017)</a></li>
            <li><a href='#joshyoung'>Joshyoung.me Website (2016)</a></li>
            <li><a href='#note_system_flask'>Note Taking System (2014)</a></li>
            <li><a href='#joshayoung'>Joshayoung Website (2012)</a></li>
            <li><a href='#codeitcreations'>Code It Creation Website (2011)</a></li>
            <li><a href='#ticketing_system_alt'>Ticketing System v2 (2010)</a></li>
            <li><a href='#ticketing_system'>Ticketing System v1 (2010)</a></li>
            <li><a href='#commentsandcapers'>Comments and Capers Website (2009)</a></li>
            <li><a href='#blogging_system'>Blogging System (2008)</a></li>
          </ul>
        </article>

        <article>
          <a name='will_it_rain'></a>
          <h3>Will It Rain (2019)</h3>
          <h4>(Ruby, RSpec)</h4>
          <p>This application gathers the weather for each day and sends out the information to an email list. This application is designed to be used on the command line.</p>
          <p>I am continually adding functionality to this project and cleaning up the code.</p>
          <a href='https://github.com/joshayoung/will-it-rain-ruby'>Repo</a>
        </article>

        <article>
          <a name='plot_notes'></a>
          <h3>Plot Notes (2018 - 2019)</h3>
          <h4>(Ruby/Rails, RSpec, HTML, CSS, JavaScript)</h4>
          <p>This application is used to add, tag, and search notes. This application used Ruby on Rails and RSpec.</p>
          <p>I am continually adding functionality to this project and cleaning up the code.</p>
          <a href='https://github.com/joshayoung/plot-notes'>Repo</a>
        </article>

        <article>
          <a name='note_url_system'></a>
          <h3>Note / URL System (2017)</h3>
          <h4>(PHP/Laravel, HTML, CSS, JavaScript)</h4>
          <p>This application will be written to house many of my tech notes and URL bookmarks. I know there are many applications written for both tasks. However, I have tried many of these, and I do not like their features. This application will be written using the latest version of Laravel.</p>
          <p>Essentially, it will allow me to add notes and tag them to URLs. It will also include features for stand-alone notes and URLs, as well as note searching and tagging. This application is currently a work in progress. I will be posting the code on GitHub and keeping this entry updated as I make progress.</p>
        </article>

        <article>
          <a name='joshyoung'></a>
          <h3>This Website (joshyoung.me - 2016)</h3>
          <h4>(HTML, CSS, SASS, JavaScript, jQuery, Jekyll)</h4>
          <p>I wrote this site to house my personal blog, projects, resume, etc. I decided to write this with a static site generator. Following my research, I decided that Jekyll was the best option for my purposes. This site is written in Jekyll and hosted on GitHub pages. Here is the link to the site: <a href='http://www.joshyoung.me'>joshyoung.me</a> and a link to the: <a href='https://github.com/joshayoung/josh_website'>repo</a>.</p>
        </article>

        <article>
          <a name='note_system_flask'></a>
          <h3>Note Taking System (2014)</h3>
          <h4>(Python, Flask, HTML, CSS, JavaScript, SQLite)</h4>
          <p>This project was written with the Python Flask framework. Essentially, it is a note system that allows for note taking features such as tagging, searching, etc. To learn more about SQLite, I decided to build this project in SQLite. This project was a precursor to the Laravel note taking system listed above.</p>
        </article>

        <article>
          <a name='joshayoung'></a>
          <h3>Personal Website (joshayoung.com - 2012)</h3>
          <h4>(HTML, JavaScript, CSS, jQuery)</h4>
          <p>This site was a precursor to this web page. However, at the time I had not started using responsive web design, therefore much of the site is not optimized for fast load times, responsiveness and the like. This site was written in raw HTML, CSS, and JavaScript/jQuery and designed by me. I have learned a ton about web development since that time, but I will list the site here for archival purposes. I have made very few changes since it was written. The site is running on GitHub here: <a href='joshayoung.joshyoung.me'>joshayoung.com</a>.</p>
        </article>

        <article>
          <a name='codeitcreations'></a>
          <h3>Business Website (codeitcreations.com - 2011)</h3>
          <h4>(HTML, CSS, JavaScript, jQuery, PHP)</h4>
          <p>This was a site I designed and developed around the time I was doing some freelancing. This was a one page site written in HTML, CSS, JavaScript, and PHP. For a while, I had this site hosted and running on a web server; however, I have since moved it to GitHub pages. The site is still running here: <a href='codeitcreations.joshyoung.me'>codeitcreations.com</a>.</p>
          <p>It displays many of the designs I had finished or sites that I had worked on at the time, so you may find them interesting for that purpose. Although, I would describe myself as a web developer, not a web designer, the designs displayed on this site show how far I have progressed over the years.</p>
        </article>

        <article>
          <a name='ticketing_system_alt'></a>
          <h3>Ticketing System v2 (2010)</h3>
          <h4>(C#, MSSQL, ASP.NET, CSS, JavaScript)</h4>
          <p>This project was exactly identical to the project listed below. However, I decided to re-write it in C#/ASP.NET. By doing this, I was able to better learn the Microsoft development stack. I was also able to interact with Microsoft SQL Server, which has come in handy during subsequent development tasks.</p>
        </article>

        <article>
          <a name='ticketing_system'></a>
          <h3>Ticketing System v1 (2010)</h3>
          <h4>(PHP, MySQL, HTML, CSS, JavaScript)</h4>
          <p>This project was essentially a help desk system that I wrote from scratch using PHP. It allowed for many features including: entering, tagging, searching, editing, and deleting tickets. Of course it also involved creating efficient database structure and normalization between each of the tables. At the time, this was a great learning experience for me and improved my skills as a developer.</p>
        </article>

        <article>
          <a name='commentsandcapers'></a>
          <h3>Family Website (commentsandcapers.com - 2009)</h3>
          <h4>(HTML, WordPress, PHP, MySQL, HTML, CSS, JavaScript)</h4>
          <p>This site was built to allow my grandmother to maintain her own website. I started by creating a custom WordPress theme based on a design I had created. In addition, I also designed an alternative theme to display select pages in a different layout, per her request.</p>
          <p>I also wrote some custom PHP code that facilitated the guest book and contact form. I maintained the site for years inside of WordPress. Unfortunately, my grandmother recently died. I have since moved the whole site to GitHub pages for archival purposes. I still have the site running here: <a href='http://commentsandcapers.joshyoung.me'>commentsandcapers.com</a>. Aside from a few small changes, I have made no improvements to the code since it was written in 2009.</p>
        </article>

        <article>
          <a name='blogging_system'></a>
          <h3>Blogging System (Summer 2008)</h3>
          <h4>(PHP, MySQL, HTML, CSS, JavaScript)</h4>
          <p>For this project, I built my own server from computer components. Following that, I installed and configured Apache, PHP, MySQL and installed other software to configure and host the site. The blogging system was built with raw PHP code, no framework and utilized a MySQL database on the backend.</p>
          <p>It allowed users to add, edit, and delete blog posts, as well as comment on the individual posts. In addition, I designed and developed the web page to host this application. This project allowed me to learn more about the fundamentals of programming, servers, and web development.</p>
        </article>
      </div>
    </section>
  </Layout>
)

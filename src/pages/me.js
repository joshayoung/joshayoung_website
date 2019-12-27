import React from "react";
import Layout from "../components/layout";
import PodcastEpisodes from "../hooks/podcast-episodes";
import Podcasts from "../hooks/podcasts";
import BooksRecommended from "../hooks/books-recommended";
import Book from "../components/book";
import BookRecommended from "../components/book-recommended";

export default ({ children }) => {
  const podcastEpisodes = PodcastEpisodes();
  const podcasts = Podcasts();
  const books = BooksRecommended();
  return (
    <Layout>
      <h1>About Me</h1>
      <p>My name is Josh Young. I am a web developer living and working in Franklin, Tennessee. I enjoy all things tech related. I am not a huge blogger, but I enjoy writing small posts about what I am currently  working with or technologies that I am using. Maybe something I say here will help someone in their journey; or at the very least provide a central place for me to document what I have learned when working through new projects.</p>

      <h3>My Job</h3>
      <p>For my day job, I maintain web applications, websites, other apps for my employer,
      <a href='https://www.daveramsey.com'>Ramsey Solutions</a>. In a typical day, I work primarily with Rails, Ruby, CSS, SASS, JavaScript and their accompanying technologies such as build tools, testing frameworks, and the like.</p>
      <p>In the past, I have had the opportunity to work with many technologies including, but not limited to: PHP, Laravel, Objective-C, C#, ASP.NET and Python. On the <a href='/resume'>Resume</a> portion of this site, I have listed some of my job duties in more detail.</p>

      <a name='hobbies'></a>
      <h3>Hobbies</h3>
      <p>Many of my hobbies relate to technology and development. I enjoy coding and designing web applications and web sites. When it comes to web development, I enjoy the whole stack from front end to back end. Therefore, I spend a significant amount of my free time keeping up with and learning the latest languages and frameworks. When possible, I try to implement this additional knowledge into the software stack that I use at work.</p>
      <p>I also spend some of my free time maintaining my home network, firewall, fileserver, git server, among other open-source applications. I enjoy Linux and FreeBSD so I spend time configuring these systems in my free time as well. As evident by some of my certifications and training, I also dabble in computer security. A good working knowledge of computer security and specifically web application security is very helpful as a web developer. If I am not working on servers or code, I spend my time playing my harmonica, biking, reading, or researching nutrition.</p>

      <a name='podcasts'></a>
      <h3>Recommended Podcasts</h3>
      <p>Below I have listed the tech podcasts that I currently listen to or have listened to in the past. Podcasts are a great way to keep up with the latest changes in development. Hopefully this list will introduce a good podcast to someone who enjoys learning and keeping up with the latest changes in tech.</p>

      <ul aria-labelledby='recommended_podcasts' aria-describedby='recommended_podcasts_description'>
        {podcasts.map(post => (
          <div key={post.id}>
            {
              post.display === true ?
                <li><a href={post.url}>{post.title}</a></li>
                :
                ''
            }
          </div>
        ))}
      </ul>

      <a name='podcast_episodes'></a>
      <h3>Great Podcast Episodes</h3>
      <p>
      </p>

      <ul aria-labelledby='podcast_episodes' aria-describedby='podcasts_episodes_description'>
        {podcastEpisodes.map(post => (
          <div key={post.id}>
            {
              post.display === true ?
                <li><a href={post.url}>{post.title}</a></li>
                :
                ''
            }
          </div>
        ))}
      </ul>

      <a name='books'></a>
      <h3>Books I've Read</h3>
      <p>Frequently, I try to delve deeper into specific aspects of tech that I want to learn more about. I find that buying a book about a particular technology can be a beneficial deep-dive experience. Below I have listed some of the books I have read over the years which have contributed to where I am today (listed in alphabetical order and categorized below).</p>
      <ul>
        {books.map(book => (
          <Book key={book.id} title={book.title} post={book.data} />
        ))}
      </ul>

      <a name='books_i_recommendend'></a>
      <h3>Books I Recommend</h3>
      <p>Of the software engineering, networking, security, and design books that I listed above, these are some of the books that I highly recommend.</p>
      <ul>
        {books.map(book => (
          <BookRecommended key={book.id} title={book.title} hide={book.hide_list} post={book.data} />
        ))}
      </ul>
    </Layout >
  )
}
import React from 'react';
import PropTypes from "prop-types";

const BookRecommended = ({ title, hide, post }) => {
  const fun = function (data) {
    if (data.truncated_authors) {
      return " by" + data.truncated_authors;
    } else if (data.author !== '') {
      return " by " + data.author;
    }
  }
  return (
    <>
      {/* <pre>{JSON.stringify(recommend)}</pre> */}
      {hide !== true ?
        <article className='box'>
          <>
            <h3>{title}</h3>
            {post.map((book, i) => (
              <div key={i}>
                {book.display && (book.recommend == true) ?
                  <>
                    {/* <pre>{JSON.stringify(post)}</pre> */}
                    {book.short_title ?
                      <p>{book.short_title}</p>
                      :
                      <p>{book.title}</p>
                    }
                    {fun(book)}
                  </>
                  :
                  ''
                }
              </div>
            ))}
          </>
        </article>

        : ''}

    </>

  )
};

export default BookRecommended;
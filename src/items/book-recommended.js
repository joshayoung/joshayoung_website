import React from 'react';

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
      {hide !== true ?
        <>
          <h5>{title}</h5>
          <ul>
            {post.map((book, i) => (
              <>
                {
                  book.display && (book.recommend === true) ?
                    <li key={i}>
                      {book.short_title ?
                        <>{book.short_title}</>
                        :
                        <>{book.title}</>
                      }
                      {fun(book)}
                    </li>
                    :
                    ''
                }
              </>
            ))}
          </ul>
        </>
        : ''}
    </>
  )
};

export default BookRecommended;
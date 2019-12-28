import React from 'react';

const Book = ({ title, post }) => {
  const fun = function (data) {
    if (data.truncated_authors) {
      return " by" + data.truncated_authors;
    } else if (data.author !== '') {
      return " by " + data.author;
    }
  }
  return (
    <>
      <h5>{title}</h5>
      <ul>
        {post.map((book, i) => (
          <li key={i}>
            {book.display ?
              <>
                {book.short_title ?
                  <>{book.short_title}</>
                  :
                  <>{book.title}</>
                }
                {fun(book)}
              </>
              :
              ''
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default Book;
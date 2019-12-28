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
          <h3>{title}</h3>
          {post.map((book, i) => (
            <div key={i}>
              {book.display && (book.recommend === true) ?
                <>
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
        : ''}
    </>
  )
};

export default BookRecommended;
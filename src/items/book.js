import React from "react";

const Book = ({ title, post }) => {
  const fun = function(book) {
    if (book.truncated_authors) {
      return " by " + book.truncated_authors;
    } else if (book.author !== "") {
      return " by " + book.author;
    }
  };

  const bookTitle = function(book) {
    let title = '';
    if (book.short_title) {
      title = book.short_title
    } else {
      title = book.title
    }
    return title;
  }

  const theBook = function(book) {
    if (!book.display) {
      return null;
    }
    return (
      <li> {bookTitle(book)} {fun(book)} </li>
    )
  }

  return (
    <>
      <h5>{title}</h5>
      <ul>
        {post.map((book, i) => (
          <div key={i}>
            {theBook(book)}
          </div>
        ))}
      </ul>
    </>
  );
};

export default Book;

import React from "react";
import BooksRecommended from "../hooks/books-recommended";
import BookRecommended from "../components/book-recommended";

export default () => {
  const books = BooksRecommended();

  return (
    <ul>
      {books.map(book => (
        <BookRecommended key={book.id} title={book.title} hide={book.hide_list} post={book.data} />
      ))}
    </ul>
  );
};

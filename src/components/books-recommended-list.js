import React from "react";
import BookData from "../hooks/book-data";
import BookRecommended from "../components/book-recommended";

export default () => {
  const books = BookData();

  return (
    <ul>
      {books.map(book => (
        <BookRecommended key={book.id} title={book.title} hide={book.hide_list} post={book.data} />
      ))}
    </ul>
  );
};

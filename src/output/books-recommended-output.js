import React from "react";
import BookData from "../hooks/book-data";
import BookRecommended from "../items/book-recommended";

export default () => {
  const books = BookData();

  return (
    <>
      {books.map(book => (
        <BookRecommended key={book.id} title={book.title} hide={book.hide_list} post={book.data} />
      ))}
    </>
  );
};
